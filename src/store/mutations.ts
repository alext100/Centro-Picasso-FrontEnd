/* eslint-disable @typescript-eslint/no-explicit-any */
import { Errors, Groups, Prices, State, UserModel, UserWithToken } from "@/types/interfaces";

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
    state.isAdmin = false;
    state.isProfessor = false;
    state.isStudent = false;
    state.currentUser = {
      user: {
        id: "",
        username: "",
        password: "",
        email: "",
        firstname: "",
        lastname: "",
        adminAccess: false,
        professorAccess: false,
        studentAccess: false,
        groups: [],
        studentErrors: [],
        image: "",
      },
      adminAccess: false,
      professorAccess: false,
      studentAccess: false,
      id: "",
      token: "",
      refreshToken: "",
    };
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

  loadGroups(state: State, payload: Array<Groups>) {
    state.groups = payload;
  },

  loadUserGroups(state: State, payload: Array<Groups>) {
    state.userGroups = payload;
  },

  updatedPrice(state: State, payload: Array<Prices>) {
    state.prices = payload;
  },

  deleteTeacher(state: State, id: string) {
    state.teachers = state.teachers.filter((teacher) => teacher.id !== id);
  },

  loadOneGroup(state: State, payload: Groups) {
    state.currentGroup = payload;
  },

  loadedUsersFromGroup(state: State, payload: UserModel) {
    state.loadedUsersFromGroup.push(payload);
  },

  deleteLoadedUsersFromGroup(state: State) {
    state.loadedUsersFromGroup = [];
  },

  addUserError(state: State, payload: Array<Errors>) {
    state.currentStudentErrors = payload;
  },

  loadOneUserById(state: State, payload: UserModel) {
    state.loadedOneUserById = payload;
  },

  loadAllUsers(state: State, payload: Array<UserModel>) {
    state.allUsers = payload;
  },
};

export default mutations;
