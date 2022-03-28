import {createRouter, createWebHistory, RouteRecordRaw} from "vue-router";
import Home from '../pages/Home.vue';
// import Messages from '../pages/Messages.vue';
import Generic from '../pages/Generic.vue'
import Login from '../pages/Login.vue'
import session from "../models/session";

const routes: RouteRecordRaw[] = [
  { path: '/', component: Home },
  { path: '/about', component: Generic, props: { title: 'About Page'} },
  { path: '/contact', component: Generic, props: { title: 'Contact Page'} },
  { path: '/login', component: Login },
  { path: '/signup', component: Generic, props: { title: 'Signup Page'} },
  { path: '/wall', component: ()=> import('../pages/Wall.vue') },
  { path: '/hidden', component: Generic, props: { title: 'You reached the Hidden Page'} }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  linkActiveClass: 'is-active',
});

router.beforeEach((to, from) => {
  if(session.destinationURL == null && to.path !== '/login'){
    session.destinationURL = to.path
  }
  console.log({ to })
  const protectedURLs = ['/wall', '/feed', 'hidden']
  console.log(protectedURLs)
  if(protectedURLs.includes(to.path)){
    console.log('requires login')
    if(!session.user){
      return '/login';
    }
  }
})

export default router;