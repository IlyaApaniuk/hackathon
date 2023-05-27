import { useState, useEffect, useCallback } from "react";

const useExecuteQuery = <T>(handler: (...params: any) => Promise<Response>, options: { shouldPerform: boolean }, params?: any) => {
    const { shouldPerform } = options;
    const [data, setData] = useState<T | null>(null);
    const [error, setError] = useState<string | null>(null);

    const getData = useCallback(async () => {
        try {
            const response = await handler(params || {});
            const value = await response.json();

            setData(value);
        } catch (e) {
            const ex = e as Error;
            setError(ex?.message);
        }
    }, [handler, params]);

    const onSubmit = useCallback(async () => {
        try {
            const response = await handler(params || {});
            const value = await response.json();

            return value;
        } catch (e) {
            const ex = e as Error;
            setError(ex.message);
        }
    }, [handler, params]);

    const clearError = () => {
        setError(null);
    };

    useEffect(() => {
            shouldPerform && getData();
    }, [getData, shouldPerform]);

    return {
        data,
        error,
        onSubmit,
        clearError,
        refetch: getData
    };
};

export default useExecuteQuery;
