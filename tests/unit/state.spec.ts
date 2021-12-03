import state from "@/store/state";

describe("Given a state to test", () => {
  describe("When the real test is imported", () => {
    test("It should be equal to the state to test", () => {
      const stateToTest = {
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
        prices: [],
        teachers: [],
      };

      expect(stateToTest).toStrictEqual(state);
    });
  });
});
