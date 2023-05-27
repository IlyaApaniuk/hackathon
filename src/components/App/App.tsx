import classNames from "classnames";
import { useNavigate, useLocation } from "react-router-dom";
import React, { useCallback, useEffect, useMemo } from "react";
import { useEthers } from "@usedapp/core";

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

import "./App.css";

const App: React.FC = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const { account, deactivate, activateBrowserWallet } = useEthers();

    const { onGetData, onChangeDatabase } = useDataBase();

    const navigation = useMemo(() => onGetData<INavigation[]>("navigation"), [onGetData]);

    const onChangeNav = useCallback(
        (href: string) => {
            navigate(href);
            onChangeDatabase({ payload: href, type: actions.UPDATE_NAV });
        },
        [navigate, onChangeDatabase]
    );

    const onAuthClick = useCallback(() => {
        if (account) {
            deactivate();
        } else {
            activateBrowserWallet();
        }
    }, [account, deactivate, activateBrowserWallet]);

    useEffect(() => {
        onChangeDatabase({ payload: location.pathname, type: actions.UPDATE_NAV });
    }, []);

    return (
        <div className="min-h-full">
            <header className="App-Header">
                <div className="App-Header_Content"></div>
            </header>

            <main className="">
                <div className="min-h-full">{routesMapper(subroutes)}</div>
            </main>
        </div>
    );
};

export default App;
