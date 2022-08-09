import Home from './../page/home/index.vue'
import Dashboard from './../page/dashboard/index.vue'
import Login from './../page/login/index.vue'
import NotFound from './../page/notFound/index.vue'
import { requireAuth } from './auth.js'

import { createRouter, createWebHistory,  } from 'vue-router'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { 
            path: '/', component: Home, 
            beforeEnter: requireAuth,
            
        },
        // { 
        //     path: '/home', 
        //     component: Home,
        //     beforeEnter: requireAuth, 
        // },
        { 
            path: '/dashboard', 
            component: Dashboard,
            beforeEnter: requireAuth, 
        },
        { path: '/login', component: Login,  name: 'login',},
        { path: '/:pathMatch(.*)*', name: 'NotFound', component: NotFound },
    ],
  })

  export default router