import { createRouter, createWebHistory } from "vue-router";


import Home from "../views/Home.vue";
import CreatePost from "../views/CreatePost.vue";

const routes=[
  
  {
    path: "/",
    name: "Home",
    component: Home,
  },
 
  {
    path: "/create-post",
    name: "CreatePost",
    component: CreatePost,
  },
 
];

const router = createRouter({
  history: createWebHistory(),
  // base: '/',
  routes,
});



export default router;
