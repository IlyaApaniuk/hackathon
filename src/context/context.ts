import React from "react";

import IPool from "../models/Pool";

interface IDefaultValue {
    pools: IPool[];
}

export const initValue: IDefaultValue = {
    pools: []
};

const AppContext = React.createContext(initValue);

export default AppContext;
