import React, { useCallback, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { PlusCircleIcon } from "@heroicons/react/24/outline";

import IPool from "../../models/Pool";
import useAddresses from "../../hooks/useAddresses";
import useDataBase from "../../hooks/useDataBase";
import useAuthUser from "../../hooks/useAuthUser";
import useCreateConversation from "../../hooks/useCreateConversation";
import { onPayToJoinPool } from "../../services/NftService";

import "./Pools.scss";
import usePoolsInfo from "../../hooks/usePoolsInfo";
import Pool from "./Pool/Pool";

const Pools: React.FC = () => {
    const navigate = useNavigate();
    const { authUser } = useAuthUser();

    const {
        addresses,
        addressesError,
        clearAddressesError
    } = useAddresses();
    const {
        pools,
        poolsError,
        clearPoolsError
    } = usePoolsInfo(addresses || [], !!addresses);

    const conv = {
        participants: [authUser?.id || ""],
        subject: "Black leather boots",
        welcomeMessages: ["Hello there!", "I'm currently out of town, leave a message and I'll respond ASAP. :)"],
        custom: {
            productId: "454545"
        },
        photoUrl: "https://example.com/productpictures/454545.png"
    };

    const { newPoolConversationError, onSubmitNewPoolConversation, clearNewPoolConversationError } = useCreateConversation(conv);

    const onJoinPool = useCallback(
        async (poolId: number | undefined) => {
            const isPaidSuccessfully = await onPayToJoinPool();

            if (isPaidSuccessfully) {
                await onSubmitNewPoolConversation();
                if (!newPoolConversationError) {
                    navigate(`/app/pools/${poolId}`);
                }
            }
        },
        [newPoolConversationError, navigate, onSubmitNewPoolConversation]
    );

    return (
        <div className="Pools-Wrapper">
            {pools?.map(p => (
                <Pool key={p.address} pool={p} />
            ))}
        </div>
    );
};

export default Pools;
