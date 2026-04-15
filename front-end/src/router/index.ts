import { createRouter, createWebHistory } from "vue-router";

// Layouts
import DefaultLayout from "../layouts/DefaultLayout.vue";
import AuthenticationLayout from "../layouts/AuthenticationLayout.vue";
import AdminLayout from "../layouts/AdminLayout.vue";

// Public Pages
import Home from "../views/Home.vue";

// Auth
import Login from "../views/Auth/Login.vue";

// Admin Pages
import AdminDashboard from "../views/Admin/Dashboard.vue";
import AdminProducts from "../views/Admin/Products.vue";
import AdminOrders from "../views/Admin/Orders.vue";
import AdminCategories from "../views/Admin/Categories.vue";
import AdminUsers from "../views/Admin/Users.vue";

// Misc
import NotFound from "../views/NotFound.vue";

const routes = [
  // =========================
  // PUBLIC WEBSITE
  // =========================
  {
    path: "/",
    component: DefaultLayout,
    children: [
      {
        path: "",
        name: "Home",
        component: Home,
      },
    ],
  },

  // =========================
  // AUTH (LOGIN / REGISTER)
  // =========================
  {
    path: "/admin/login",
    component: AuthenticationLayout,
    children: [
      {
        path: "",
        name: "Login",
        component: Login,
      },
    ],
  },

  // =========================
  // ADMIN DASHBOARD
  // =========================
  {
    path: "/admin",
    component: AdminLayout,
    children: [
      {
        path: "",
        name: "AdminDashboard",
        component: AdminDashboard,
      },
      
      {
        path: "products",
        name: "AdminProducts",
        component: AdminProducts,
      },
       {
        path: "orders",
        name: "AdminOrders",
        component: AdminOrders,
      },
        {
        path: "categories",
        name: "AdminCategories",
        component: AdminCategories,
      },
       {
        path: "users",
        name: "AdminUsers",
        component: AdminUsers,
      },
    ],
  },

  // =========================
  // 404 PAGE (MUST BE LAST)
  // =========================
  {
    path: "/:pathMatch(.*)*",
    name: "NotFound",
    component: NotFound,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;