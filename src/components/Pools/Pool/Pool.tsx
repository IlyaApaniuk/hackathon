import React from "react";

import IPool from "../../../models/Pool";
import PoolMain from "./PoolMain/PoolMain";
import PoolAdditional from "./PoolAdditional/PoolAdditional";

import "./Pool.scss";

export interface IPoolProps {
    pool: IPool;
}

const Pool: React.FC<IPoolProps> = ({ pool }) => {
    return (
        <div className="Pool-Container">
            <PoolMain pool={pool} />
            <PoolAdditional pool={pool} />
        </div>
    );
};

export default Pool;
