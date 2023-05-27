import IPool from "../models/Pool";
import { getPoolsInfo } from "../services/NftService";

import useExecuteQuery from "./useExecuteQuery";

const usePoolsInfo = (addresses: string[], shouldPerform: boolean) => {
    const {
        data: pools,
        error: poolsError,
        clearError: clearPoolsError
    } = useExecuteQuery<IPool[]>(getPoolsInfo, { shouldPerform }, addresses);

    return {
        pools,
        poolsError,
        clearPoolsError
    };
};

export default usePoolsInfo;
