import React, { useCallback, useMemo, useState } from "react";

import IPool from "../models/Pool";

interface IAppContextInitValue {
    pools: IPool[];
    onSetPools: (pools: IPool[]) => void;
    findPoolById: (poolId: string | undefined) => IPool | undefined;
}

const noop = () => {};

const initValue: IAppContextInitValue = {
    pools: [],
    onSetPools: noop,
    findPoolById: () => { return undefined; }
};

const AppContext = React.createContext(initValue);

const AppProvider = ({ children }: any) => {
    const [pools, setPools] = useState<IPool[]>([]);

    const onSetPools = (pools: IPool[]) => {
        setPools([...pools]);
    };

    const findPoolById = useCallback((poolId: string | undefined) => (
        pools.find(p => p.address === poolId)
    ), [pools]);

    return <AppContext.Provider value={{ pools, onSetPools, findPoolById }}>{children}</AppContext.Provider>;
};

export { AppProvider };
export default AppContext;
