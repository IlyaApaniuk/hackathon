import React from 'react'

import useChatConversations from '../../../hooks/useChatConversations';

const Conversations: React.FC = () => {
    const {
        refetch,
        conversations
    } = useChatConversations()

    return (
        <div>Conversations</div>
    )
}

export default Conversations;
