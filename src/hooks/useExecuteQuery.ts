import {
    useState,
    useEffect,
    useCallback
} from "react"

const useExecuteQuery = <T>(handler: () => Promise<Response>, options: { shouldPerform: boolean }) => {
    const {
        shouldPerform
    } = options
    const [data, setData] = useState<T | null>(null);

    const getData = useCallback(async () => {
        const response = await handler()
        const value = await response.json()

        setData(value)
    }, [handler])

    useEffect(() => {
        shouldPerform && getData()
    }, [handler, getData, shouldPerform])

    return {
        data,
        refetch: getData
    }
}

export default useExecuteQuery