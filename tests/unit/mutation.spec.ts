import { Prices, State, UserModel, UserWithToken } from "@/types/interfaces";
import mutations from "@/store/mutations";
import state from "../mockedState";

let mockedState: State;

describe("Given a store mutations", () => {
  describe("When it receives a state and payload with user", () => {
    test("Then isUserAuthenticated should be true in store", () => {
      mockedState = state;
      const payload: UserWithToken = {
        token: "111",
        refreshToken: "111",
        user: {
          id: "22",
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
        id: "22",
      };

      mutations.loginUser(mockedState, payload);

      expect(state.isUserAuthenticated).toBe(true);
    });

    describe("When it receives a state and payload with empty object", () => {
      test("Then currentUser in store should be an empty object", () => {
        mockedState = state;
        const payload: any = {};

        mutations.loadUser(mockedState, payload);

        expect(state.currentUser).toStrictEqual({});
      });
    });

    describe("When it receives a state and payload with token and refreshToken = ''", () => {
      test("Then isUserAuthenticated should be false in the store", () => {
        mockedState = state;
        const payload: any = {
          token: "",
          refreshToken: "",
        };

        mutations.logoutUser(mockedState, payload);

        expect(state.isUserAuthenticated).toBe(false);
      });
    });

    describe("When it receives a state", () => {
      test("Then isAdmin should be true in the store", () => {
        mockedState = state;

        mutations.userIsAdmin(mockedState);

        expect(state.isAdmin).toBe(true);
      });
    });

    describe("When it receives a state and payload with array of teachers", () => {
      test("Then teachers should be in the store", () => {
        mockedState = state;
        const payload: Array<UserModel> = [
          {
            username: "pablo",
            password: "$2b$10$vqJx/Vjrq75ygzySQJNEUu.Y3.t6aLYJ2mp2mbUmqM/OyEiZizw4S",
            email: "pablo@asf",
            firstname: "Pablo",
            lastname: "Lopez",
            adminAccess: false,
            professorAccess: true,
            studentAccess: false,
            groups: [],
            studentErrors: [],
            id: "61a7c85e0f7c5abd5aea3238",
            image: "https://fr.shopping.rakuten.com/photo/1444459108_L.jpg",
          },
          {
            username: "maria",
            password: "$2b$10$gtoDQ8yc/ddtCy4ttyeel.uMK212RzF.0hrSiL20Bou1zaJpBNoJO",
            email: "maria@asf",
            firstname: "María",
            lastname: "Fernandez",
            adminAccess: false,
            professorAccess: true,
            studentAccess: false,
            groups: [],
            studentErrors: [],
            id: "61a7c88f0f7c5abd5aea323a",
            image: "https://fr.shopping.rakuten.com/photo/1444459108_L.jpg",
          },
          {
            username: "manuel",
            password: "$2b$10$jxatXsPDPAPsR5DMNM8MO.Ie1kmrJZ4s8PklFr0XUOZWSnGiRp2YG",
            email: "manuel@asf",
            firstname: "Manuel",
            lastname: "Gomez",
            adminAccess: false,
            professorAccess: true,
            studentAccess: false,
            groups: [],
            studentErrors: [],
            id: "61a7c8aa0f7c5abd5aea323c",
            image: "https://fr.shopping.rakuten.com/photo/1444459108_L.jpg",
          },
        ];

        mutations.loadTeachers(mockedState, payload);

        expect(state.teachers).toStrictEqual(payload);
      });
    });

    describe("When it receives a state and payload with array of prices", () => {
      test("Then prices should be in the store", () => {
        mockedState = state;
        const payload: Array<Prices> = [
          {
            price: 4445,
            level: "A1",
            duration: "4 mes",
            id: "61a0c0dfe27603f8593b180b",
          },
          {
            price: 5001,
            level: "A2",
            duration: "4 mes",
            id: "61a0c396da7e9712a4996e29",
          },
          {
            price: 5006,
            level: "B1",
            duration: "4 mes",
            id: "61a8e38aa00fdc2c04499365",
          },
        ];

        mutations.loadPrices(mockedState, payload);

        expect(state.prices).toStrictEqual(payload);
      });
    });

    describe("When it receives a state and payload with array of prices", () => {
      test("Then prices should be updated the store", () => {
        mockedState = state;
        const payload: Array<Prices> = [
          {
            price: 4900,
            level: "A1",
            duration: "4 mes",
            id: "61a0c0dfe27603f8593b180b",
          },
          {
            price: 5000,
            level: "A2",
            duration: "4 mes",
            id: "61a0c396da7e9712a4996e29",
          },
          {
            price: 5000,
            level: "B1",
            duration: "4 mes",
            id: "61a8e38aa00fdc2c04499365",
          },
        ];

        mutations.updatedPrice(mockedState, payload);

        expect(state.prices).toStrictEqual(payload);
      });
    });
  });
});
