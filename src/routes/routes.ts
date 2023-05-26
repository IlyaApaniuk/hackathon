import { lazy } from "react";

const App = lazy(() => import('../components/App/App'));
const Chat = lazy(() => import('../components/Chat/Chat'));
const Pulls = lazy(() => import('../components/Pulls/Pulls'));
const Welcome = lazy(() => import('../components/Welcome/Welcome'));

const routes = [
    {
        path: '/*',
        component: Welcome
    }, 
    {
        path: '/app',
        component: App
    },
    {
        path: '/app/chat',
        component: Chat
    },
    {
        path: '/app/pulls',
        component: Pulls
    }
];

export default routes;
