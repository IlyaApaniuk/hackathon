import IPull from "./Pull";

export default interface IDataBase {
    [name: string]: IPull[];
    pulls: IPull[];
}

