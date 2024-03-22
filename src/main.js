import { createApp } from "vue";
import App from "./App.vue";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

//Calendar
import VCalendar from "v-calendar";
import "v-calendar/style.css";

// Vuetify
import "vuetify/styles";
import { createVuetify } from "vuetify";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";

const vuetify = createVuetify({
  components,
  directives,
});

const app = createApp(App);
app.component("font-awesome-icon", FontAwesomeIcon);
app.use(VCalendar, {});
app.use(vuetify).mount("#app");
