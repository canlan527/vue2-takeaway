import Vue from "vue";
import VueRouter from "vue-router";

import Home from '@/views/home'

const Profile = () => import('@/views/profile')

Vue.use(VueRouter);


const routes = [
  {
    path: "/",
    redirect: "/home",
  },
  {
    path: "/home",
    component: Home,
  },
  {
    name: "profile",
    path: "/profile",
    components: { profile: Profile },
  },
];

const router = new VueRouter({
  routes,
});

export default router;
