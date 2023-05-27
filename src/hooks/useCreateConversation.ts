import { IConversationCE } from "../models/Conversation";
import { createConversation } from "../services/ChatService";

import useExecuteQuery from "./useExecuteQuery";

const useCreateConversation = (conversation: IConversationCE) => {
    const {
        error: newPoolConversationError,
        onSubmit: onSubmitNewPoolConversation,
        clearError: clearNewPoolConversationError
    } = useExecuteQuery(createConversation, { shouldPerform: false }, { conversation });

    return {
        newPoolConversationError,
        onSubmitNewPoolConversation,
        clearNewPoolConversationError
    };
};

export default useCreateConversation;
