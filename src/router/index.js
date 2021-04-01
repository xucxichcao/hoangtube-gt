import Vue from "vue";
import VueRouter from "vue-router";
import Index from "../views/Index.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Index",
    component: Index,
  },
  {
    path: "/home",
    name: "Home",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Home.vue"),
  },
  {
    path: "/author",
    name: "Author",
    component: () => import("../views/Author.vue")
  },
  {
    path: "/book",
    name: "Book",
    component: () => import("../views/Books.vue")
  },
  {
    path: "/discovery",
    name: "Discovery",
    component: () => import("../views/Discovery.vue")
  },
  {
    path: "/character",
    name: "Character",
    component: () => import("../views/Character.vue")
  },
  {
    path: "/gallery",
    name: "Gallery",
    component: () => import("../views/Gallery.vue")
  }
];

const router = new VueRouter({
  routes,
});

export default router;
