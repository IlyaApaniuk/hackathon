import { lazy } from "react";

const Forum = lazy(() => import("../components/Forum/Forum"));
const Pools = lazy(() => import("../components/Pools/Pools"));
const PoolDetails = lazy(() => import("../components/Pools/PoolDetails/PoolDetails"));

const subroutes = [
    {
        path: "/",
        component: Pools
    },
    {
        path: "/forum",
        component: Forum
    },
    {
        path: "/pools/:poolId",
        component: PoolDetails
    }
];

export default subroutes;
