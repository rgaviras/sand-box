import Vue from "vue";
import Vuex from "vuex";
import Dashboard from "./components/Dashboard";
import { recentSales } from "./data/data";

import "./style.css";

Vue.config.productionTip = false;
Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    recentSales
  }
});

/* eslint-disable no, A-new */
new Vue({
  el: "#app",
  store,
  template: "<Dashboard />",
  components: { Dashboard }
});
