import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Explore from "../views/Explore.vue";
import PostExplore from "../views/PostExplore.vue";
import CreatePost from "../views/CreatePost.vue";
import Login from "../views/Login.vue";
import store from "../store/index";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
    meta: { requiresAuth: true },
  },
  {
    path: "/login",
    name: "Login",
    component: Login,
  },
  {
    path: "/explore",
    name: "Explore",
    component: Explore,
    meta: { requiresAuth: true },
  },
  {
    path: "/explore/:postId",
    name: "PostExplore",
    component: PostExplore,
    props: true,
    meta: { requiresAuth: true },
  },
  {
    path: "/create-post",
    name: "CreatePost",
    component: CreatePost,
    meta: { requiresAuth: true },
  },
];
let productsFetched = false;

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    return savedPosition || { x: 0, y: 0 };
  },
});

router.beforeEach(async (to, from) => {
  if (to.meta.requiresAuth) {
    if (!productsFetched) {
      try {
        
        await store.commit('SET_LOADING');
        await store.dispatch("fetchUser");
        await store.dispatch("fetchPosts");
        await store.commit('SET_LOADING');
        productsFetched = true; // Mark products as fetched
      } catch (error) {
        return { path: "/login" };
      }
    }
  }
});

export default router;
