import { createStore } from "vuex";
import state from "@/store/state";
import actions from "@/store/actions";
import mutations from "@/store/mutations";

export default createStore({
  state,
  mutations,
  actions,
  modules: {},
  getters: {
    getCurrentUser() {
      return state.currentUser;
    },
  },
});
