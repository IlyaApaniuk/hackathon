import { lazy } from "react";

const Forum = lazy(() => import("../components/Forum/Forum"));
const Pools = lazy(() => import("../components/Pools/Pools"));
const Profile = lazy(() => import("../components/Profile/Profile"));
const Passport = lazy(() => import("../components/Passport/Passport"));
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
    },
    {
        path: "/passport",
        component: Passport
    },
    {
        path: "/profile",
        component: Profile
    }
];

export default subroutes;
