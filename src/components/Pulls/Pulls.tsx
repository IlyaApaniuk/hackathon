import React, { useCallback, useMemo } from 'react'
import useDataBase from '../../hooks/useDataBase';
import IPull from '../../models/Pull';
import actions from '../../database/actions';

const Pulls: React.FC = () => {
    const {
        onGetData,
        onChangeDatabase
    } = useDataBase();

    const pulls = useMemo(() => (
        onGetData("pulls")
    ), [onGetData]);

    const onAddPull = useCallback(() => {
        const pull = {
            description: 'sobaka'
        } as IPull;
        onChangeDatabase({ payload: pull, type: actions.ADD_PULL })
    }, [onChangeDatabase])

    return (
        <div>
            <button onClick={onAddPull}>Add Pull</button>
            <div>
                {pulls.map(p => (
                    <div key={p.id}>
                        <p>{p.id}</p>
                        <p>{p.description}</p>
                    </div>
                ))}
            </div>
        </div>
    )
};

export default Pulls;