import {createRouter, createWebHistory} from 'vue-router';
import Signin from "./components/auth/Signin";
import Dashboard from "./components/dashboard/Dashboard";
import Projects from "./components/projects/Projects";

const router = createRouter( {
    history: createWebHistory(),
    routes: [
        { path: '/login', component: Signin, name: 'login'},
        { path: '/dashboard', component: Dashboard, name: 'dashboard'},
        { path: '/projects', component: Projects, name: 'projects'},
    ]
})

export default router;
