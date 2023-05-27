import React, { useCallback, useMemo } from 'react';

import IPool from '../../models/Pool';
import actions from '../../database/actions';
import useDataBase from '../../hooks/useDataBase';

const Pools: React.FC = () => {
    const {
        onGetData,
        onChangeDatabase
    } = useDataBase();

    const pools = useMemo(() => (
        onGetData<IPool[]>("pools")
    ), [onGetData]);

    const onAddPool = useCallback(() => {
        const pool = {
            description: 'sobaka'
        } as IPool;
        onChangeDatabase({ payload: pool, type: actions.ADD_POOL })
    }, [onChangeDatabase])

    return (
        <div>
            <button onClick={onAddPool}>Add Poll</button>
            <div>
                {pools.map(p => (
                    <div key={p.id}>
                        <p>{p.id}</p>
                        <p>{p.description}</p>
                    </div>
                ))}
            </div>
        </div>
    )
};

export default Pools;