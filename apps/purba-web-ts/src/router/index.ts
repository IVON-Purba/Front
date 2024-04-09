import { createRouter, createWebHistory } from "vue-router";

import FirstIn from "../views/FirstIn.vue";
import CreateAccount from "../views/CreateAccount.vue";
import MainDisplay from "../views/MainDisplay.vue";
import CameraFirst from "../views/CameraFirst.vue";
import Announcements from "../views/Announcements.vue";
import CameraImage from "../views/CameraImage.vue";
import CameraSummary from "../views/CameraSummary.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "FirstIn",
      component: FirstIn
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
      path: "/ci",
      name: "CameraImage",
      component: CameraImage
    },
    {
      path: "/cs",
      name: "CameraSummary",
      component: CameraSummary
    }
  ]
});

export default router;
