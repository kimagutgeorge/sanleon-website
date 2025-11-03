import { createRouter, createWebHistory } from "vue-router";
import HomePage from "../views/HomePage.vue";
import NotFound from "../components/NotFound.vue";
import CompanyPage from "../views/CompanyPage.vue";
import ProductsPage from "../views/ProductsPage.vue";

const routes = [
  { path: "/:pathMatch(.*)*", name: "Not Found", component: NotFound },
  {
    path: "/",
    name: "Home Page",
    component: HomePage,
  },
  {
    path: "/company",
    name: "Company Page",
    component: CompanyPage,
  },
  {
    path: "/products",
    name: "Products Page",
    component: ProductsPage,
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
