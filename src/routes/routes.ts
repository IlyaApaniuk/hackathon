import { lazy } from "react";

const App = lazy(() => import("../components/App/App"));
const Welcome = lazy(() => import("../components/Welcome/Welcome"));

const routes = [
    {
        path: "/*",
        component: Welcome
    },
    {
        path: "/app/*",
        component: App
    }
];

export default routes;
