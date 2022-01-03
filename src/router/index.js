import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../view/home.vue"
Vue.use(VueRouter);

const routes = [
    {path:'/', name:'Home', component:Home},
    {
        path:'/about',
        name:'about',
        component:() => import('../view/about.vue')
    },
]


const router = new VueRouter({
    mode: 'history',
    // base: process.env.BASE_URL,
    routes
})

router.beforeEach((to,from,next)=>{
  console.log(to,from)
  next()
})

export default router