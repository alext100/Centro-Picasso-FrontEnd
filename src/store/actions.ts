/* eslint-disable @typescript-eslint/no-explicit-any */
import axios from "axios";
import { ActionContext } from "vuex";
import jwtDecode from "jwt-decode";
import { State, UserLoginData, UserWithToken } from "@/types/interfaces";

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
    dispatch("login", localStorageUser.token);
  },

  async userLogedFromApi(
    { commit }: ActionContext<State, State>,
    { user, token, refreshToken }: UserWithToken
  ): Promise<void> {
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
        firstName: data.firstName,
        lastName: data.lastName,
        token: data.token,
        refreshToken: data.refreshToken,
      })
    );
    commit("loginUser", data);
    commit("loadUser", data);
  },

  async deleteDataFromLocalStorage({ commit }: ActionContext<State, State>): Promise<void> {
    localStorage.setItem("userData", JSON.stringify(""));
    const logedOutUser = { token: "", refreshToken: "" };
    commit("logoutUser", logedOutUser);
  },
};
export default actions;