import React from "react";

import IConversation from "../../../models/Conversation";
// import useChatConversations from '../../../hooks/useChatConversations';

import conversations from "../../../conversationsMock.json";

const Conversations: React.FC = () => {
    // const {
    //     refetch,
    //     conversations
    // } = useChatConversations()

    const cons: IConversation[] = conversations;

    return (
        <div role="list" className="divide-y divide-gray-100">
            {cons?.map(c => (
                <li key={c.id} className="flex justify-between gap-x-6 py-5">
                    <div className="flex gap-x-4">
                        <img className="h-12 w-12 flex-none rounded-full bg-gray-50" src={c?.photoUrl || undefined} alt="" />
                        <div className="min-w-0 flex-auto">
                            <p className="text-sm font-semibold leading-6 text-gray-900">{c?.subject}</p>
                            <p className="mt-1 truncate text-xs leading-5 text-gray-500">{c?.lastMessage?.text}</p>
                        </div>
                    </div>
                </li>
            ))}
        </div>
    );
};

export default Conversations;
