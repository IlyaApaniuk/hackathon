import { IConversationCE } from "../models/Conversation";
import { IMessageCE } from "../models/Message";

import { fetchData } from "./FetchService";

const appId = "tiCe9Jvh";

export const sendMessage = async (message: IMessageCE[], conversationId: string) => {
    try {
        const response = await fetchData(`v1/${appId}/conversations/${conversationId}/messages`, "POST", JSON.stringify(message));

        return response;
    } catch (ex) {
        throw ex;
    }
};

export const leaveConversation = async (userId: string, conversationId: string) => {
    try {
        const response = await fetchData(`v1/${appId}/conversations/${conversationId}/participants/${userId}`, "DELETE");

        return response;
    } catch (ex) {
        throw ex;
    }
};

export const addParticipantToConversation = async (userId: string, conversationId: string) => {
    try {
        const response = await fetchData(`v1/${appId}/conversations/${conversationId}/participants/${userId}`, "PUT");

        return response;
    } catch (ex) {
        throw ex;
    }
};

export const createConversation = async (conversation: IConversationCE) => {
    try {
        const conversationId = `internal_conversation_${new Date().getTime()}`;
        const response = await fetchData(`v1/${appId}/conversations/${conversationId}`, "PUT", JSON.stringify(conversation));

        return response;
    } catch (ex) {
        throw ex;
    }
};

export const findConversations = async () => {
    try {
        const response = await fetchData(`v1/${appId}/conversations`, "GET");

        return response;
    } catch (ex) {
        throw ex;
    }
};

export const findUsers = async () => {
    try {
        const response = await fetchData(`v1/${appId}/users`, "GET");

        return response;
    } catch (ex) {
        throw ex;
    }
};

export const findUserById = async (userId: string) => {
    try {
        const response = await fetchData(`v1/${appId}/users/${userId}`, "GET");

        return response;
    } catch (ex) {
        throw ex;
    }
};
