import actions from "./actions"
import IPool from "../models/Pool";
import IDataBase from "../models/db";

const reducer = <T>(action: { payload: T, type: actions }, database: IDataBase): IDataBase => {
    switch (action.type) {
        case actions.ADD_POOL: {
            const pool = { id: database.pools.length + 1, ...action.payload as IPool}
            const pools = [...database.pools, pool];

            return {
                ...database,
                pools: pools
            };
        }
        case actions.UPDATE_NAV: {
            const nav = database.navigation.map(n => ({ ...n, current: action.payload === n.href }));

            return {
                ...database,
                navigation: nav
            }
        }
        default: 
            return { ...database };
    }
};

export default reducer;