import { State } from "@/types/interfaces";

const state = {
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
  },
  userId: "",
  token: "",
  refreshToken: "",
  isLoggedIn: false,
  isAdmin: false,
  isProfessor: false,
  isStudent: false,
  currentUser: localStorage.getItem("userData") ? JSON.parse(localStorage.getItem("userData") || "") : "",
  // eslint-disable-next-line no-unneeded-ternary
  isUserAuthenticated: localStorage.getItem("userData") ? true : false,
  teachers: [],
};

export default state as unknown as State;
