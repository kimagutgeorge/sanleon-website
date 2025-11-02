import { createRouter, createWebHistory } from "vue-router";
import HomePage from "../views/HomePage.vue";
import NotFound from "../components/NotFound.vue";
import CompanyPage from "../views/CompanyPage.vue";

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
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
