import React, { lazy } from 'react';

const Manifesto = lazy(() => import("./Manifesto"));
const JoinUs = lazy(() => import("./JoinUs"));

const routes = [
    { path: "/manifesto", name: "Manifesto", component: Manifesto },
    { path: "/joinus", name: "JoinUs", component: JoinUs },
];

export default routes;