import React from "react";

import useChatUsers from "../../hooks/useChatUsers";

const Chat: React.FC = () => {
    const {
        users
    } = useChatUsers()



    return (
        <div>
            Chat
        </div>
    )
};

export default Chat;
