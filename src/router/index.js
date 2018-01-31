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
                    path: '/tab1',
                    name: 'tab1',
                    component: Card
                },
                {
                    path: '/tab2',
                    name: 'tab2',
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
