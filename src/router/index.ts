import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import Home from "../views/Home.vue";
import Contacts from "../views/Contacts.vue";
import About from "../views/About.vue";
import Blog from "../views/Blog.vue";
import Courses from "../views/Courses.vue";
import Prices from "../views/Prices.vue";
import Login from "../views/Login.vue";
import BoardAdmin from "../views/BoardAdmin.vue";
import TeacherBoard from "../views/TeacherBoard.vue";
import Inscribirse from "../views/Inscribirse.vue";
import StudentBoard from "../views/StudentBoard.vue";
/* import protectedRoute from "./protectedRoute"; */

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "Sobre el centro",
    component: About,
  },
  {
    path: "/blog",
    name: "Blog",
    component: Blog,
  },
  {
    path: "/contacts",
    name: "Contacts",
    component: Contacts,
  },
  {
    path: "/courses",
    name: "Courses",
    component: Courses,
  },
  {
    path: "/inscribirse",
    name: "Inscribirse",
    component: Inscribirse,
  },
  {
    path: "/prices",
    name: "Prices",
    component: Prices,
  },
  {
    path: "/login",
    name: "Login",
    component: Login,
  },
  {
    path: "/admin",
    name: "Admin",
    component: BoardAdmin,
    /* beforeEnter: protectedRoute, */
  },
  {
    path: "/teacher",
    name: "TeacherBoard",
    component: TeacherBoard,
  },
  {
    path: "/student",
    name: "StudentBoard",
    component: StudentBoard,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
