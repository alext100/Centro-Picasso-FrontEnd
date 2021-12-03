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

// eslint-disable-next-line no-shadow
enum CourseLevel {
  "A1",
  "A2",
  "B1",
  "B2",
  "C1",
  "C2",
  "Para una persona",
  "Para dos personas",
  "Para tres personas",
  "Para cuatro personas",
}
interface Prices {
  price: number;
  level: CourseLevel;
  duration: string;
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
  teachers: Array<UserModel>;
  prices: Array<Prices>;
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

export { UserModel, State, UserWithToken, UserLoginData, UserRegisterData, Prices };
