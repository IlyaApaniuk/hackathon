import { fetchData } from "./FetchService"

const appId = 'tiCe9Jvh'

export const findConversations = async () => {
    try {
        const conversations = await fetchData(`v1/${appId}/conversations`, "GET")

        return conversations
    } catch (ex) {
        throw ex
    }
}

export const findUsers = async () => {
    try {
        const users = await fetchData(`v1/${appId}/users`, "GET")

        return users
    } catch (ex) {
        throw ex
    }   
}