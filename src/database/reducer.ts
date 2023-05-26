import actions from "./actions"
import IPull from "../models/Pull";
import IDataBase from "../models/db";

const reducer = <T>(action: { payload: T, type: actions }, database: IDataBase): IDataBase => {
    switch (action.type) {
        case actions.ADD_PULL: {
            const pull = { id: database.pulls.length + 1, ...action.payload as IPull}
            const pulls = [...database.pulls, pull];

            return {
                ...database,
                pulls
            };
        }
        default: 
            return { ...database };
    }
};

export default reducer;