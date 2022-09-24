import Vue from "vue";
import VueRouter from "vue-router";

const Home = () => import('@/views/home'/* webpackChunkName: "home" */);
const Profile = () => import('@/views/profile'/* webpackChunkName: "profile" */);
const Comment = () => import('@/views/comment'/* webpackChunkName: "comment" */);
const Seller = () => import('@/views/seller'/* webpackChunkName: "seller" */);

Vue.use(VueRouter);


const routes = [
  {
    path: "/",
    redirect: "/home",
  },
  {
    path: "/home",
    component: Home ,
  },
  {
    name: "profile",
    path: "/profile",
    components: { profile: Profile },
  },
  {
    name: "comment",
    path: "/comment",
    component:Comment,
  },
  {
    name: "seller",
    path: "/seller",
    component: Seller,
  },
];

const router = new VueRouter({
  routes,
  mode: 'history',
});

export default router;
