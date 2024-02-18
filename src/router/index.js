import { createRouter, createWebHistory } from "vue-router";
import InicioSesion from "../components/InicioSesion.vue";
import CompraDetalle from "@/components/Compra-Detalle.vue";
import Detalles from "@/components/Detalles-Moneda.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: InicioSesion,
  },
  {
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
  },
  {
    path: "/cripto",
    name: "cripto",
    component: CompraDetalle,
  },
  {
    /*En Vue Router, cuando configuras una ruta con un parámetro dinámico como :coin en el path, 
    estás indicando que ese segmento de la URL puede cambiar dinámicamente y
    que deseas capturar ese valor para usarlo en el componente asociado.*/
    path: "/detalles/:coin",
    name: "detalles",
    component: Detalles,
    props: true,
    /*El uso de props: true en la configuración de la ruta indica que deseas que los parámetros capturados en la URL se pasen como props al componente asociado.
    Al hacerlo, puedes acceder a esos parámetros directamente como propiedades del componente,
    en lugar de tener que extraerlos manualmente de $route.params dentro del componente.
    Por ejemplo, sin props: true, en el componente Detalles.vue, tendrías que acceder a los parámetros de la ruta de la siguiente manera:*/
  },
  {
    path: "/compra",
    name: "Compra-Coins",
    component: () =>
      import(/* webpackChunkName: "about" */ "../components/Compra-Coins.vue"),
  },
  {
    path: "/venta",
    name: "Venta",
    component: () =>
      import(/* webpackChunkName: "about" */ "../components/Venta-Coins.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
