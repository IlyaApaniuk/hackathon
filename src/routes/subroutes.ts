import { lazy } from "react";

const Forum = lazy(() => import('../components/Forum/Forum'));
const Pools = lazy(() => import('../components/Pools/Pools'));

const subroutes = [
    {
        path: '/',
        component: Pools
    },
    {
        path: '/forum',
        component: Forum
    }
];

export default subroutes;
