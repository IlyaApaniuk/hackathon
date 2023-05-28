import React, { useCallback, useContext, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { Shimmer, ShimmerElementType, ShimmerElementsGroup } from "@fluentui/react/lib/Shimmer";

import AppContext from "../../context/context";
import useAddresses from "../../hooks/useAddresses";
import useDataBase from "../../hooks/useDataBase";
import useAuthUser from "../../hooks/useAuthUser";
import useCreateConversation from "../../hooks/useCreateConversation";
import { onPayToJoinPool } from "../../services/NftService";
import usePoolsInfo from "../../hooks/usePoolsInfo";

import Pool from "./Pool/Pool";

import "./Pools.scss";


const Pools: React.FC = () => {
    const navigate = useNavigate();
    const { authUser } = useAuthUser();
    const context = useContext(AppContext)

    const {
        addresses,
        addressesError,
        isAddressesLoading,
        clearAddressesError
    } = useAddresses();
    const {
        pools,
        poolsError,
        isPoolsLoading,
        clearPoolsError
    } = usePoolsInfo(addresses || [], !!addresses);

    const isLoading = isPoolsLoading || isAddressesLoading;

    const conv = {
        participants: [authUser?.id || ""],
        subject: "Black leather boots",
        welcomeMessages: ["Hello there!", "I'm currently out of town, leave a message and I'll respond ASAP. :)"],
        custom: {
            productId: "454545"
        },
        photoUrl: "https://example.com/productpictures/454545.png"
    };

    // const { newPoolConversationError, onSubmitNewPoolConversation, clearNewPoolConversationError } = useCreateConversation(conv);

    // const onJoinPool = useCallback(
    //     async (poolId: number | undefined) => {
    //         const isPaidSuccessfully = await onPayToJoinPool();

    //         if (isPaidSuccessfully) {
    //             await onSubmitNewPoolConversation();
    //             if (!newPoolConversationError) {
    //                 navigate(`/app/pools/${poolId}`);
    //             }
    //         }
    //     },
    //     [newPoolConversationError, navigate, onSubmitNewPoolConversation]
    // );

    const onJoinPool = useCallback((address: string) => {
        navigate(`/app/pools/${address}`);
    }, [navigate]);

    return (
        <div className="Pools-Wrapper">
            {pools?.map(p => (
                <Pool key={p.address} pool={p} onClick={() => onJoinPool(p.address)} />
            ))}
        </div>
    );
};

export default Pools;
