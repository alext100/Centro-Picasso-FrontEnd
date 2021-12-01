/* eslint-disable @typescript-eslint/no-explicit-any */
import { State, UserModel } from "@/types/interfaces";

const mutations = {
  loginUser(state: State, payload: any) {
    state.isUserAuthenticated = true;
    state.currentUser.token = payload.token;
    state.currentUser.refreshToken = payload.refreshToken;
  },

  loadUser(state: State, payload: any) {
    state.currentUser = payload;
  },

  logoutUser(state: State, payload: any) {
    state.isUserAuthenticated = false;
    state.currentUser.token = payload.token;
    state.currentUser.refreshToken = payload.refreshToken;
  },
  userIsAdmin(state: State) {
    state.isAdmin = true;
  },
  loadTeachers(state: State, payload: Array<UserModel>) {
    state.teachers = payload;
  },
};

export default mutations;
