import HomePage from "../views/HomePage.vue";
import NotFound from "../components/NotFound.vue";
import CompanyPage from "../views/CompanyPage.vue";
import ProductsPage from "../views/ProductsPage.vue";
import ContactPage from "../views/ContactPage.vue";
import ProductCart from "../views/CartPage.vue";
import IndustryPage from "../views/IndustryPage.vue";

export const routes = [
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
    path: "/products/category/:category",
    name: "Products Category Page",
    component: ProductsPage,
    props: (route) => ({ category: route.params.category }),
  },
  {
    path: "/products/:id?",
    name: "Products Page",
    component: ProductsPage,
    props: true,
  },
  {
    path: "/industries/:slug",
    name: "Industry Page",
    component: IndustryPage,
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
