import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import VisionApi from './views/VisionApi.vue'
import FreshWorks from './views/FreshWorks.vue'
import CloudVisionApi from './views/CloudVisionApi.vue'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home
        },
        {
            path: '/about',
            name: 'about',
            // route level code-splitting
            // this generates a separate chunk (about.[hash].js) for this route
            // which is lazy-loaded when the route is visited.
            component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
        },
        {
            path: '/vision-api',
            name: 'VisionApi',
            component: VisionApi
        },
        {
            path: '/cloud-vision-api',
            name: 'CloudVisionApi',
            component: CloudVisionApi
        },
        {
            path: '/freshworks',
            name: 'FreshWorks',
            component: FreshWorks
        }
      
    ]
})
