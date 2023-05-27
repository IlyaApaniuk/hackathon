import { getPoolList } from "../services/NftService";

import useExecuteQuery from "./useExecuteQuery";

const useAddresses = () => {
    const {
        data: addresses,
        error: addressesError,
        clearError: clearAddressesError
    } = useExecuteQuery<string[]>(getPoolList, { shouldPerform: true });

    return {
        addresses,
        addressesError,
        clearAddressesError
    };
};

export default useAddresses;
