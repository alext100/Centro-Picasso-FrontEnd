/* eslint-disable @typescript-eslint/no-explicit-any */
import axios from "axios";
import { ActionContext } from "vuex";
import jwtDecode from "jwt-decode";
import { Errors, Groups, State, UserLoginData, UserModel, UserWithToken } from "@/types/interfaces";
import state from "./state";

const actions: any = {
  async login({ dispatch }: ActionContext<State, State>, userData: UserLoginData): Promise<void> {
    const response = await axios.post(process.env.VUE_APP_LOGIN_URL, userData);
    const { token } = response.data;
    const user = jwtDecode(token);
    dispatch("userLogedFromApi", { user, token });
    localStorage.setItem("userData", JSON.stringify({ token }));
  },

  getUserFromLocalStorage({ dispatch }: ActionContext<State, State>) {
    const localStorageUser = JSON.parse(localStorage.getItem("userData") || "");
    dispatch("login", {
      username: localStorageUser.username,
      password: localStorageUser.password,
    });
  },

  async userLogedFromApi({ commit }: ActionContext<State, State>, { user, token, refreshToken }: UserWithToken): Promise<void> {
    const { data } = await axios({
      method: "GET",
      url: `${process.env.VUE_APP_URL}/user/get-one-by-id/${user.id}`,
      headers: { Authorization: `Bearer ${token}` },
    });
    data.token = token;
    data.refreshToken = refreshToken;
    localStorage.setItem(
      "userData",
      JSON.stringify({
        id: data.id,
        username: data.username,
        email: data.email,
        password: data.password,
        firstName: data.firstname,
        lastName: data.lastname,
        token: data.token,
        refreshToken: data.refreshToken,
        groups: data.groups,
        studentErrors: data.studentErrors,
        adminAccess: data.adminAccess,
        professorAccess: data.professorAccess,
        studentAccess: data.studentAccess,
      })
    );
    commit("loginUser", data);
    commit("loadUser", data);
    if (data.adminAccess === true) {
      commit("userIsAdmin");
    } else if (data.professorAccess) {
      commit("userIsTeacher");
    } else if (data.studentAccess) {
      commit("userIsStudent");
    }
  },

  async deleteDataFromLocalStorage({ commit }: ActionContext<State, State>): Promise<void> {
    localStorage.removeItem("userData");
    const logedOutUser = { token: "", refreshToken: "" };
    commit("logoutUser", logedOutUser);
  },

  async getTeachersFromApi({ commit }: ActionContext<State, State>) {
    const { data } = await axios.get(`${process.env.VUE_APP_URL}/user/get-all-teachers`);
    commit("loadTeachers", data);
  },

  async getPricesFromApi({ commit }: ActionContext<State, State>): Promise<void> {
    const { data } = await axios.get(`${process.env.VUE_APP_URL}/prices/get-all`);
    commit("loadPrices", data);
  },

  async getGroupsFromApi({ commit }: ActionContext<State, State>): Promise<void> {
    const { data } = await axios.get(`${process.env.VUE_APP_URL}/group/get-all`);
    commit("loadGroups", data);
  },

  async getUserGroupsFromApi({ commit }: ActionContext<State, State>): Promise<void> {
    const { data } = await axios({
      method: "GET",
      url: `${process.env.VUE_APP_URL}/user/get-all-user-groups`,
      headers: { Authorization: `Bearer ${state.currentUser.token}` },
    });
    commit("loadUserGroups", data.groups);
  },

  async updatePriceInDB(
    { commit }: ActionContext<State, State>,
    { newPrice, priceId, priceObject }: { newPrice: number; priceId: string; priceObject: Array<string | number> }
  ): Promise<void> {
    const newPriseObject = { ...priceObject, price: newPrice };
    await axios.put(`${process.env.VUE_APP_URL}/prices/update/${priceId}`, newPriseObject);
    const { data: newPrices } = await axios.get(`${process.env.VUE_APP_URL}/prices/get-all`);
    commit("updatedPrice", newPrices);
  },

  async registerUser({ dispatch }: ActionContext<State, State>, userData: UserLoginData): Promise<void> {
    await axios.post(`${process.env.VUE_APP_URL}/user/register`, userData);
    dispatch("getTeachersFromApi");
  },

  async deleteTeacher({ commit }: ActionContext<State, State>, userId: string): Promise<void> {
    await axios.delete(`${process.env.VUE_APP_URL}/user/delete/${userId}`);
    commit("deleteTeacher", userId);
  },

  async addGroupToUser({ dispatch }: ActionContext<State, State>, groupId: string): Promise<void> {
    const idOfGroup = (group: Groups) => group.id === groupId;
    if (state.userGroups.find(idOfGroup) === undefined) {
      await axios({
        method: "PATCH",
        url: `${process.env.VUE_APP_URL}/user/add-group-to-user/${groupId}`,
        headers: { Authorization: `Bearer ${state.currentUser.token}` },
      });
      dispatch("getUserGroupsFromApi");
    }
  },

  async getGroupById({ commit }: ActionContext<State, State>, groupId: string): Promise<void> {
    const { data } = await axios.get(`${process.env.VUE_APP_URL}/group/get-one-by-id/${groupId}`);
    commit("loadOneGroup", data);
  },

  async getUserById({ commit }: ActionContext<State, State>, userId: string): Promise<void> {
    const { data } = await axios.get(`${process.env.VUE_APP_URL}/user/get-one-by-id/${userId}`);
    commit("loadedUsersFromGroup", { ...data });
  },

  async deleteLoadedUsers({ commit }: ActionContext<State, State>): Promise<void> {
    commit("deleteLoadedUsersFromGroup");
  },

  async updateGroup({ dispatch }: ActionContext<State, State>, groupToUpdate: Groups): Promise<void> {
    await axios.put(`${process.env.VUE_APP_URL}/group/update/${groupToUpdate.id}`, groupToUpdate);
    dispatch("getGroupById", groupToUpdate.id);
  },

  async addErrorToUser({ dispatch }: ActionContext<State, State>, { userId, userError }: { userId: string; userError: Errors }): Promise<void> {
    const { data } = await axios.patch(`${process.env.VUE_APP_URL}/user/add-error-to-user/${userId}`, userError);
    dispatch("getUserErrorsById", data.id);
  },

  async getAllCurrentUserErrors({ commit }: ActionContext<State, State>): Promise<void> {
    const { data } = await axios({
      method: "GET",
      url: `${process.env.VUE_APP_URL}/error/get-all`,
      headers: { Authorization: `Bearer ${state.currentUser.token}` },
    });
    commit("addUserError", data.errors);
  },

  async getUserErrorsById({ commit }: ActionContext<State, State>, userId: string): Promise<void> {
    const { data } = await axios.get(`${process.env.VUE_APP_URL}/user/get-all-user-errors/${userId}`);
    commit("addUserError", data.studentErrors);
  },

  async getOneUserById({ commit }: ActionContext<State, State>, userId: string): Promise<void> {
    const { data } = await axios.get(`${process.env.VUE_APP_URL}/user/get-one-by-id/${userId}`);
    commit("loadOneUserById", data);
  },

  async deleteUserGroup({ dispatch }: ActionContext<State, State>, groupId: string): Promise<void> {
    const idOfGroup = (group: Groups) => group.id === groupId;
    if (state.userGroups.find(idOfGroup) !== undefined) {
      await axios({
        method: "PATCH",
        url: `${process.env.VUE_APP_URL}/user/delete-group-from-user/${groupId}`,
        headers: { Authorization: `Bearer ${state.currentUser.token}` },
      });
      dispatch("getUserGroupsFromApi");
    }
  },

  async deleteErrorFromUser(
    { dispatch }: ActionContext<State, State>,
    { userId, userErrorId }: { userId: string; userErrorId: string }
  ): Promise<void> {
    const { data } = await axios.patch(`${process.env.VUE_APP_URL}/user/delete-error-from-user/${userId}`, { id: userErrorId });
    dispatch("getUserErrorsById", data);
  },

  async getAllUsersFromApi({ commit }: ActionContext<State, State>): Promise<void> {
    const { data } = await axios.get(`${process.env.VUE_APP_URL}/user/get-all`);
    commit("loadAllUsers", data);
  },

  async addGroupToAnyUser({ dispatch }: ActionContext<State, State>, { userId, groupId }: { userId: string; groupId: string }): Promise<void> {
    const idOfUser = (user: UserModel) => user.id === userId;
    if (state.loadedUsersFromGroup.find(idOfUser) === undefined) {
      await axios.patch(`${process.env.VUE_APP_URL}/group/add-group-to-any-user/${userId}`, { id: groupId });
    }
    dispatch("getUserById", userId);
  },
};
export default actions;
