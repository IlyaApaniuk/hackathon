import INavigation from "./Navigation";
import IPool from "./Pool";

export default interface IDataBase {
    [name: string]: IPool[] | INavigation[];
    pools: IPool[];
    navigation: INavigation[];
}

