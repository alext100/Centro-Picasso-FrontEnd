interface UserModel {
  id: string;
  username: string;
  password: string;
  email: string;
  firstname: string;
  lastname: string;
  adminAccess: boolean;
  professorAccess: boolean;
  studentAccess: boolean;
  groups: Array<string>;
  studentErrors: Array<string>;
  image: string;
}
interface UserWithToken {
  user: {
    id: string;
    username: string;
    password: string;
    email: string;
    firstname: string;
    lastname: string;
    adminAccess: boolean;
    professorAccess: boolean;
    studentAccess: boolean;
    groups: Array<string>;
    studentErrors: Array<string>;
    image: string;
  };
  id: string;
  token: string;
  refreshToken: string;
}
interface Prices {
  price: number;
  level: string;
  duration: string;
  id: string;
}

interface Groups {
  groupname: string;
  members: Array<string>;
  messages: Array<string>;
  id: string;
}
interface State {
  user: UserModel;
  userId: string;
  token: string;
  refreshToken: string;
  isLoggedIn: boolean;
  currentUser: UserWithToken;
  isUserAuthenticated: boolean;
  isAdmin: boolean;
  isProfessor: boolean;
  isStudent: boolean;
  teachers: Array<UserModel>;
  prices: Array<Prices>;
  groups: Array<Groups>;
  userGroups: Array<Groups>;
  currentGroup: Array<Groups>;
  loadedUsersFromGroup: Array<UserModel>;
}
interface UserLoginData {
  username: string;
  password: string;
}
interface UserRegisterData {
  username: string;
  email: string;
  password: string;
  firstname: string;
  lastname: string;
  image: string;
  professorAccess: boolean;
}

export { UserModel, State, UserWithToken, UserLoginData, UserRegisterData, Prices, Groups };
