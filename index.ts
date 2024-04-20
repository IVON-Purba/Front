import { createRouter, createWebHistory } from "vue-router";

import FirsIn from "../views/FirstIn.vue";
import CreateAccount from "../views/CreateAccount.vue";
import MainDisplay from "../views/MainDisplay.vue";
import CameraFirst from "../views/CameraFirst.vue";
import Announcements from "../views/Announcements.vue";
import CameraImage from "../views/CameraImage.vue";
import An1 from "../views/An1.vue"; //공지사항1 추가

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [

    {
      path: "/",
      name: "FirstIn",
      component: FirsIn
    },
    {
      path: "/cr",
      name: "CreateAccount",
      component: CreateAccount
    },
    {
      path: "/main",
      name: "MainDisplay",
      component: MainDisplay
    },
    {
      path: "/cm",
      name: "CameraFirst",
      component: CameraFirst
    },
    {
      path: "/an",
      name: "Announcements",
      component: Announcements
    },
    {
      path: "/an1", //공지사항 1
      name: "An1",
      component: An1
    },
    {
      path: "/ci",
      name: "CameraImage",
      component: CameraImage
    }

  ]
});

export default router;
