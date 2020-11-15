import { createApp } from "vue";
import DashboardApp from "./components/Dashboard.vue";

// Mount function to start the app
const mount = (el) => {
  const app = createApp(DashboardApp);
  app.mount(el);
};

// If we are in development and isolation immediately mount app
if (process.env.NODE_ENV === "development") {
  const root = document.querySelector("#_dashboard-dev-root");

  if (root) {
    mount(root);
  }
}

// If we are in production export mount function
export { mount };
