import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Login from '@/components/Login'
import Home from '@/components/Home'
import Card from '@/components/Card'

Vue.use(Router)

const router = new Router({
    routes: [
        {
            path: '/',
            component: Home,
            children: [
                {
                    path: '/',
                    component: Card
                }
            ]
        },
        {
            path: '/login',
            name: 'login',
            component: Login
        },
        {
            path: '/home',
            component: Home,
            children: [
                {
                    path: '/',
                    component: Card
                },
                {
                    path: '/card',
                    component: Card
                },
                {
                    path: '/articles',
                    name: 'articles',
                    component: HelloWorld
                },
                {
                    path: '/me',
                    name: 'me',
                    component: HelloWorld
                }
            ]
        }
    ]
})

router.afterEach((to, from, next) => {
    document.title = to.name
})
export default router
