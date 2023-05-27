import classNames from "classnames";
import { useNavigate, useLocation } from "react-router-dom";
import React, { useCallback, useEffect, useMemo } from "react";
import { useEthers } from '@usedapp/core';

import { Disclosure } from "@headlessui/react";
import { 
    XMarkIcon,
    Bars3Icon, 
    CloudArrowUpIcon, 
    CloudArrowDownIcon
} from "@heroicons/react/24/outline";

import actions from "../../database/actions";
import subroutes from "../../routes/subroutes";
import INavigation from "../../models/Navigation";
import useDataBase from "../../hooks/useDataBase";
import { getShortAddress } from "../../utils/utils";
import routesMapper from "../../routes/routesMapper";

const App: React.FC = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const { account, deactivate, activateBrowserWallet } = useEthers();

    const {
        onGetData,
        onChangeDatabase
    } = useDataBase();

    const navigation = useMemo(() => (
        onGetData<INavigation[]>("navigation")
    ), [onGetData]);

    const onChangeNav = useCallback((href: string) => {
        navigate(href);
        onChangeDatabase({ payload: href, type: actions.UPDATE_NAV})
    }, [navigate, onChangeDatabase]);

    const onAuthClick = useCallback(() => {
        if (account) {
            deactivate();
        } else {
            activateBrowserWallet();
        }
    }, [
        account, 
        deactivate, 
        activateBrowserWallet
    ]);

    useEffect(() => {
        onChangeDatabase({ payload: location.pathname, type: actions.UPDATE_NAV })
    }, []);

    return (
        <>
            <div className="min-h-full">
                <Disclosure as="nav" className="bg-gray-800">
                    {({ open }) => (
                    <>
                        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                            <div className="flex h-16 items-center justify-between">
                                <div className="flex items-center">
                                    <div className="flex-shrink-0">
                                    <img
                                        className="h-8 w-8"
                                        src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500"
                                        alt="Your Company"
                                    />
                                    </div>
                                    <div className="hidden md:block">
                                        <div className="ml-10 flex items-baseline space-x-4">
                                            {navigation.map((item) => (
                                                <span
                                                    style={{ cursor: "pointer" }}
                                                    key={item.name}
                                                    className={classNames(
                                                        item.current
                                                            ? "bg-gray-900 text-white"
                                                            : "text-gray-300 hover:bg-gray-700 hover:text-white",
                                                            "rounded-md px-3 py-2 text-sm font-medium"
                                                    )}
                                                    aria-current={item.current ? "page" : undefined}
                                                    onClick={() => onChangeNav(item.href)}
                                                >
                                                    {item.name}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                                <div className="hidden md:block">
                                    <div className="ml-4 flex items-center md:ml-6">
                                        <button
                                            type="button"
                                            className="rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white"
                                        >
                                            {account ? (
                                                <CloudArrowDownIcon 
                                                    className="h-6 w-6" 
                                                    aria-hidden="true"
                                                    onClick={onAuthClick}
                                                />
                                            ) : (
                                                <CloudArrowUpIcon 
                                                    className="h-6 w-6" 
                                                    aria-hidden="true"
                                                    onClick={onAuthClick}
                                                />
                                            )}
                                        </button>
                                        {account && (
                                            <span className="text-gray-400">
                                                {getShortAddress(account)}
                                            </span>
                                        )}
                                    </div>
                                </div>
                                <div className="-mr-2 flex md:hidden">
                                    {/* Mobile menu button */}
                                    <Disclosure.Button className="inline-flex items-center justify-center rounded-md bg-gray-800 p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                                    <span className="sr-only">Open main menu</span>
                                    {open ? (
                                        <XMarkIcon
                                        className="block h-6 w-6"
                                        aria-hidden="true"
                                        />
                                    ) : (
                                        <Bars3Icon
                                        className="block h-6 w-6"
                                        aria-hidden="true"
                                        />
                                    )}
                                    </Disclosure.Button>
                                </div>
                            </div>
                        </div>

                        <Disclosure.Panel className="md:hidden">
                            <div className="space-y-1 px-2 pb-3 pt-2 sm:px-3">
                            {navigation.map((item) => (
                                <Disclosure.Button
                                    style={{ cursor: "pointer" }}
                                    key={item.name}
                                    as="span"
                                    className={classNames(
                                        item.current
                                            ? "bg-gray-900 text-white"
                                            : "text-gray-300 hover:bg-gray-700 hover:text-white",
                                            "block rounded-md px-3 py-2 text-base font-medium"
                                    )}
                                    aria-current={item.current ? "page" : undefined}
                                    onClick={() => onChangeNav(item.href)}
                                >
                                    {item.name}
                                </Disclosure.Button>
                            ))}
                            </div>
                        </Disclosure.Panel>
                        </>
                    )}
                </Disclosure>

                <header className="bg-white shadow">
                    <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
                        <h1 className="text-3xl font-bold tracking-tight text-gray-900">
                        Dashboard
                        </h1>
                    </div>
                </header>
                <main>
                    <div className="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">
                        {routesMapper(subroutes)}
                    </div>
                </main>
            </div>
        </>
    );
};

export default App;
