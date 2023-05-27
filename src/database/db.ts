import IDataBase from '../models/db';

const db: IDataBase = {
    pools: [],
    navigation: [
        { name: 'Pools', href: '/app', current: true },
        { name: 'Forum', href: '/app/forum', current: false },
    ]
}

export default db;
