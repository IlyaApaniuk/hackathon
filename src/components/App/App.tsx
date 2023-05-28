import { useNavigate, useLocation } from "react-router-dom";
import React, { useCallback, useEffect, useMemo } from "react";
import { useEthers } from "@usedapp/core";


import actions from "../../database/actions";
import subroutes from "../../routes/subroutes";
import INavigation from "../../models/Navigation";
import useDataBase from "../../hooks/useDataBase";
import { getShortAddress } from "../../utils/utils";
import routesMapper from "../../routes/routesMapper";

import logo from "../../images/logo.png";
import metamaskLogo from "../../images/metamask_logo.png";

import "./App.scss";
import AppContext, { initValue } from "../../context/context";

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
        <div className="App min-h-full">
            <header className="App-Header">
                <div className="App-Header_Content">
                    <img src={logo} alt="" height={40} width={138} />
                    <div className="App-Header_Controls">
                        {account ? (
                            <div className="MetamaskConnected" onClick={onAuthClick}>
                                <img src={metamaskLogo} alt="" width={16} height={16}/>
                                <div className="Address">
                                    {getShortAddress(account)}
                                </div>
                            </div>
                        ) : (
                            <div className="MetamaskDisconnected" onClick={onAuthClick}>
                                Connect To Metamask
                            </div>
                        )}
                    </div>
                </div>
            </header>

            <main className="">
                <AppContext.Provider value={initValue}>
                    <div className="min-h-full">{routesMapper(subroutes)}</div>
                </AppContext.Provider>
            </main>
        </div>
    );
};

export default App;
