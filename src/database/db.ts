import IDataBase from "../models/db";

const db: IDataBase = {
    navigation: [
        { name: "Pools", href: "/app", current: true },
        { name: "Forum", href: "/app/forum", current: false }
    ]
};

export default db;
