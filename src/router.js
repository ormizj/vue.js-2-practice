//configuring vue-router
import VueRouter from 'vue-router'
import Vue from 'vue'
import App from './App.vue'

//configuring router
Vue.use(VueRouter)

//adding base-routes, more can be added inside Components
const routes = [
    { path: '/', name: 'App', component: App },
    { path: '/routing', name: 'Routing', component: undefined },
    { path: "*", name: '404', component: undefined }
]
const router = new VueRouter({ mode: 'history', routes })

//redirecting to home-page if current page not found
router.afterEach(() => {
    if (router.history.current.name === '404') router.push('/')
})

export default router