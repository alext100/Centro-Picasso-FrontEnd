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
  };
  id: string;
  token: string;
  refreshToken: string;
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
  teachers: Array<UserModel>;
}
interface UserLoginData {
  username: string;
  password: string;
}
interface UserRegisterData {
  username: string;
  name: string;
  email: string;
  password: string;
  firstname: string;
  lastname: string;
}
export { UserModel, State, UserWithToken, UserLoginData, UserRegisterData };
