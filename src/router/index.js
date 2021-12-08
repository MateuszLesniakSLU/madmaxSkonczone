import { createRouter, createWebHashHistory } from "vue-router";
import Contact from "../components/Contact.vue";
import Services from "../components/Services.vue";
import Shops from "../components/Shops.vue";
import WebShops from "../components/WebShops.vue";
import AboutUs from "../components/AboutUs.vue";

const routes = [
  {
    path: "/",
    redirect: "/aboutus",
  },
  {
    path: "/shops",
    name: "shops",
    component: Shops,
  },
  {
    path: "/services",
    name: "Services",
    component: Services,
  },
  {
    path: "/webshops",
    name: "Web Shops",
    component: WebShops,
  },
  {
    path: "/contact",
    name: "Contact",
    component: Contact,
  },
  {
    path: "/aboutus",
    name: "About Us",
    component: AboutUs,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
