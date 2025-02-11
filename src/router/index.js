import { createRouter, createWebHistory } from "vue-router";

import MainPage from "@/pages/MainPage.vue";
import ProductsPage from "@/pages/ProductsPage.vue";
import ServicesPage from "@/pages/ServicesPage.vue";
import ContctPage from "@/pages/ContctPage.vue"; // Replace with your actual component

const routes = [
  {
    path: "/",
    name: "Home",
    component: MainPage,
  },
  {
    path: "/products",
    name: "Products",
    component: ProductsPage,
  },
  {
    path: "/services",
    name: "Services",
    component: ServicesPage,
  },
  {
    path: "/contact",
    name: "Contact",
    component: ContctPage,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
