import { createApp } from 'vue'
import {createRouter, createWebHistory} from  "vue-router";
import App from "@/App.vue";
import Transpolis from '@/components/Transpolis.vue'
import Superviseur from "@/components/Superviseur.vue";
import Bat172 from "@/components/Bat172.vue";
import Plug from "@/components/Plug.vue";
import Atelier from "@/components/Atelier.vue";
import Bureau from "@/components/Bureau.vue";
import Home from "@/components/Home.vue";

const routes= [
    {
        path: '/',
        component: Home
    },
    {
        path: "/transpolis",
        component: Transpolis
    },
    {
        path: "/superviseur",
        component: Superviseur
    },
    {
        path: "/bat172",
        component: Bat172
    },
    {
        path:  '/plug',
        component : Plug
    },
    {
        path: '/atelier',
        component: Atelier
    },
    {
        path: '/bureau',
        component: Bureau
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
});

const app = createApp(App)
app.use(router)
app.mount('#app')
