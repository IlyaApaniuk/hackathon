import React from "react";
import { useParams } from "react-router-dom";

const PoolDetails: React.FC = () => {
    const { poolId } = useParams();

    return <div>Pool Details</div>;
};

export default PoolDetails;
