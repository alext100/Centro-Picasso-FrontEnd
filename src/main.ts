import { createApp } from "vue";
import BootstrapVue3 from "bootstrap-vue-3";
import DKToast from "vue-dk-toast";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "bootstrap/dist/css/bootstrap.css";

import "bootstrap-vue-3/dist/bootstrap-vue-3.css";

const app = createApp(App);
app.use(BootstrapVue3);
app.use(DKToast, {
  duration: 2000,
  positionY: "bottom",
  positionX: "right",
  styles: {
    color: "#CC1810",
    backgroundColor: "#FFC107",
    width: "120px",
    border: "1px solid #CC1810",
  },
});
app.use(store);
app.use(router);
app.mount("#app");
