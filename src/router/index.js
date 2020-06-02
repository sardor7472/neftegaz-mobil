import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    component: () => import("../views/layouts/cabinet"),
    children: [
      {
        path: "",
        component: () => import("../views/Home")
      },
      {
        path: "/appeal",
        name: "appeal",
        component: () => import("../views/Appeal")
      },
      {
        path: "/chamber",
        name: "chamber",
        component: () => import("../views/Chamber")
      },
      {
        path: "/uzbekneftegaz-dep",
        name: "uzbekneftegaz-dep",
        component: () => import("../views/Uzbekneftegaz-dep")
      },
      {
        path: "/related",
        name: "related",
        component: () => import("../views/document/Related")
      },
      {
        path: "/control",
        name: "control",
        component: () => import("../views/document/Control")
      },
      {
        path: "/execution",
        name: "execution",
        component: () => import("../views/document/Execution")
      },
      {
        path: "/history",
        name: "history",
        component: () => import("../views/document/History")
      },
      {
        path: "/send",
        name: "send",
        component: () => import("../views/document/Send")
      },
      {
        path: "/document",
        name: "document",
        component: () => import("../views/document/Document")
      },
      {
        path: "/Document-dep-document",
        name: "Document-dep-document",
        component: () => import("../views/document-dep/Document-dep-document")
      },
      {
        path: "/Document-dep-history",
        name: "Document-dep-history",
        component: () => import("../views/document-dep/Document-dep-history")
      },
      {
        path: "/document-dep-execution",
        name: "document-dep-execution",
        component: () => import("../views/document-dep/Document-dep-execution")
      },
      {
        path: "/document-dep-related",
        name: "document-dep-related",
        component: () => import("../views/document-dep/Document-dep-related")
      },
      {
        path: "/my-document",
        name: "my-document",
        component: () => import("../views/My-document")
      },
      {
        path: "/uzbekneftegaz-new",
        name: "uzbekneftegaz-new",
        component: () => import("../views/Uzbekneftegaz-new")
      },
      {
        path: "/uzbekneftegaz-send",
        name: "uzbekneftegaz-send",
        component: () => import("../views/Uzbekneftega-send")
      },
      {
        path: "/received",
        name: "received",
        component: () => import("../views/Received")
      },
      {
        path: "/parol",
        name: "parol",
        component: () => import("../views/profile/Parol")
      },
      {
        path: "/education",
        name: "education",
        component: () => import("../views/profile/Education")
      },
      {
        path: "/info",
        name: "info",
        component: () => import("../views/profile/Info")
      },
      {
        path: "/profile",
        name: "profile",
        component: () => import("../views/profile/Profile")
      },
    ]
  },
  {
    path: "/",
    component: () => import("../views/layouts/empty"),
    children: [
      {
        path: "/login",
        name: "login",
        component: () => import("../views/Login")
      },
      {
        path: "/enter",
        name: "enter",
        component: () => import("../views/Enter")
      }
    ]
  },

];
const router = new VueRouter({
  mode: "history",
  routes
});

export default router;
