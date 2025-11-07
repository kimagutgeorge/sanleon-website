import { createRouter, createWebHistory } from "vue-router";
import HomePage from "../views/HomePage.vue";
import NotFound from "../components/NotFound.vue";
import CompanyPage from "../views/CompanyPage.vue";
import ProductsPage from "../views/ProductsPage.vue";
import ContactPage from "../views/ContactPage.vue";
import ProductCart from "../views/CartPage.vue";

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
    path: "/products/:id?",
    name: "Products Page",
    component: ProductsPage,
    props: true,
  },
  {
    path: "/contact-us",
    name: "Contact Us",
    component: ContactPage,
  },
  {
    path: "/favourites",
    name: "Favourite Page",
    component: ProductCart,
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
  scrollBehavior(to, from, savedPosition) {
    // Always scroll to top
    return { top: 0 };
  },
});

export default router;
