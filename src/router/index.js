import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: () => import("../views/HomeView.vue"),
    },
    {
      path: "/login",
      name: "login",
      meta: {
        layout: "empty",
      },
      component: () => import("../views/LoginView.vue"),
    },
    {
      path: "/users",
      name: "users",
      component: () => import("../views/UsersView.vue"),
    },
    {
      path: "/users/:id",
      name: "users-id",
      component: () => import("../views/UserDetailView.vue"),
    },
    {
      path: "/translations",
      name: "translations",
      component: () => import("../views/TranslationsView.vue"),
    },
  ],
});

export default router;
