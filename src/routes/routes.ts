import { lazy } from "react";

const App = lazy(() => import('../components/App/App'));
const Chat = lazy(() => import('../components/Chat/Chat'));
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
    }
];

export default routes;
