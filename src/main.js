import { createApp } from 'vue'
import {createRouter, createWebHistory} from  "vue-router";
import App from "@/App.vue";
import Transpolis from '@/components/Transpolis.vue'
import Superviseur from "@/components/Superviseur.vue";
import Bat172 from "@/components/Bat172.vue";

const app = createApp(App)

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: "/",
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
    ],
});

export default  router
app.use(router)
app.mount('#app')
