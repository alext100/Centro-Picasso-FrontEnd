/* eslint-disable @typescript-eslint/no-explicit-any */
import { Prices, State, UserModel, UserWithToken } from "@/types/interfaces";

const mutations = {
  loginUser(state: State, payload: UserWithToken) {
    state.isUserAuthenticated = true;
    state.currentUser = payload;
    state.currentUser.refreshToken = payload.refreshToken;
  },

  loadUser(state: State, payload: UserWithToken) {
    state.currentUser = payload;
  },

  logoutUser(state: State, payload: UserWithToken) {
    state.isUserAuthenticated = false;
    state.currentUser.token = payload.token;
    state.currentUser.refreshToken = payload.refreshToken;
  },

  userIsAdmin(state: State) {
    state.isAdmin = true;
  },

  userIsTeacher(state: State) {
    state.isProfessor = true;
  },

  userIsStudent(state: State) {
    state.isStudent = true;
  },

  loadTeachers(state: State, payload: Array<UserModel>) {
    state.teachers = payload;
  },

  loadPrices(state: State, payload: Array<Prices>) {
    state.prices = payload;
  },

  updatedPrice(state: State, payload: Array<Prices>) {
    state.prices = payload;
  },

  deleteTeacher(state: State, id: string) {
    state.teachers = state.teachers.filter((teacher) => teacher.id !== id);
  },
};

export default mutations;
