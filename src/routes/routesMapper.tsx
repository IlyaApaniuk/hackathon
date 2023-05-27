import { Routes, Route } from "react-router-dom";

const routesMapper = (routes: { path: string; component: React.LazyExoticComponent<React.FC<{}>> }[]) => {
    return (
        <Routes>
            {routes.map(route => {
                const { path, component: Component } = route;

                return <Route key={path} path={path} element={<Component />} />;
            })}
        </Routes>
    );
};

export default routesMapper;
