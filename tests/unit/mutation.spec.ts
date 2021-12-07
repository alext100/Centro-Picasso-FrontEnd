import { Groups, Prices, State, UserModel, UserWithToken } from "@/types/interfaces";
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

    describe("When it receives a state and payload with one group", () => {
      test("Then group should be in the store equal a currentGroup", () => {
        mockedState = state;
        const payload: Groups = {
          groupname: "AAAA",
          members: [],
          messages: ["asdfasdf"],
          id: "61a0d8cb726c02fd1ef1f539",
        };

        mutations.loadOneGroup(mockedState, payload);

        expect(state.currentGroup).toStrictEqual(payload);
      });
    });

    describe("When it receives a state and deleteLoadedUsersFromGroup", () => {
      test("Then loadedUsersFromGroup should be [] (empty array) in the store", () => {
        mockedState = state;

        mutations.deleteLoadedUsersFromGroup(mockedState);

        expect(state.loadedUsersFromGroup).toStrictEqual([]);
      });
    });

    describe("When it receives a state and payload with groups and loadUserGroups mutation", () => {
      test("Then userGroups in the store should be equal a groups from payload", () => {
        mockedState = state;
        const payload: Array<Groups> = [
          {
            groupname: "AAAA",
            members: [],
            messages: [],
            id: "61a0d8cb726c02fd1ef1f539",
          },
          {
            groupname: "DDDD",
            members: [],
            messages: [],
            id: "61a0d8e8726c02fd1ef1f53f",
          },
          {
            groupname: "HHHH",
            members: ["61abd38fa3a87125e3cafa67", "61ab732e549814b7da6a6264", "61a7c8aa0f7c5abd5aea323c"],
            messages: [
              {
                message: "Los deberes para as´pkdgmadópkgmkádkmgf por`0iqjerg",
                time: "2021-12-05T21:02:18.406Z",
              },
              {
                message: "SAFASFASDF",
                time: "2021-12-05T21:14:07.943Z",
              },
              {
                message: "sdfgsdfg",
                time: "2021-12-05T21:21:29.439Z",
              },
              {
                message: "shtrhsrthsrthstrh",
                time: "2021-12-05T21:25:24.966Z",
              },
              {
                message: "adfngñoandñvionad`fivapdu",
                time: "2021-12-05T21:26:30.925Z",
              },
            ],
            id: "61ac2bb0c9da15a9378fb20d",
          },
          {
            groupname: "DDDD",
            members: [],
            messages: [],
            id: "61ad1d359749652ab4098845",
          },
        ];

        mutations.loadUserGroups(mockedState, payload);

        expect(state.userGroups).toStrictEqual(payload);
      });
    });

    describe("When it receives a state with userIsStudent mutation", () => {
      test("Then isStudent should be true in the store", () => {
        mockedState = state;

        mutations.userIsStudent(mockedState);

        expect(state.isStudent).toBe(true);
      });
    });

    describe("When it receives a state with userIsTeacher mutation", () => {
      test("Then isProfessor  should be true in the store", () => {
        mockedState = state;

        mutations.userIsTeacher(mockedState);

        expect(state.isProfessor).toBe(true);
      });
    });

    describe("When it receives a state and payload with array of all groups and a loadGroups mutation", () => {
      test("Then userGroups in the store should be equal a all groups", () => {
        mockedState = state;
        const payload: Array<Groups> = [
          {
            groupname: "AAAA",
            members: [],
            messages: [],
            id: "61a0d8cb726c02fd1ef1f539",
          },
          {
            groupname: "DDDD",
            members: [],
            messages: [],
            id: "61a0d8e8726c02fd1ef1f53f",
          },
          {
            groupname: "HHHH",
            members: ["61abd38fa3a87125e3cafa67", "61ab732e549814b7da6a6264", "61a7c8aa0f7c5abd5aea323c"],
            messages: [
              {
                message: "Los deberes para as´pkdgmadópkgmkádkmgf por`0iqjerg",
                time: "2021-12-05T21:02:18.406Z",
              },
              {
                message: "SAFASFASDF",
                time: "2021-12-05T21:14:07.943Z",
              },
              {
                message: "sdfgsdfg",
                time: "2021-12-05T21:21:29.439Z",
              },
              {
                message: "shtrhsrthsrthstrh",
                time: "2021-12-05T21:25:24.966Z",
              },
              {
                message: "adfngñoandñvionad`fivapdu",
                time: "2021-12-05T21:26:30.925Z",
              },
            ],
            id: "61ac2bb0c9da15a9378fb20d",
          },
          {
            groupname: "DDDD",
            members: [],
            messages: [],
            id: "61ad1d359749652ab4098845",
          },
        ];

        mutations.loadGroups(mockedState, payload);

        expect(state.userGroups).toStrictEqual(payload);
      });
    });

    describe("When a deleteTeacher mutation receives a state and a payload with id of a teacher", () => {
      test("Then teachers in the state should be without teacher that had received id", () => {
        mockedState = state;
        const idOfTeacherToDelete = "61a7c85e0f7c5abd5aea3238";
        state.teachers = [
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
        const updatedTeachers: Array<UserModel> = [
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

        mutations.deleteTeacher(mockedState, idOfTeacherToDelete);

        expect(state.teachers).toStrictEqual(updatedTeachers);
      });
    });

    describe("When loadedUsersFromGroup mutation receives a state and user", () => {
      test("Then loadedUsersFromGroup in state should have this user", () => {
        mockedState = state;
        state.loadedUsersFromGroup = [
          {
            username: "maria",
            password: "$2b$108yc/ddtCyl.uMK212RzF.0hrSzaJpBNoJO",
            email: "maria@asf",
            firstname: "María",
            lastname: "Fernandez",
            adminAccess: false,
            professorAccess: true,
            studentAccess: false,
            groups: [],
            studentErrors: [],
            id: "61a7c88f0f7c5abd5aea323a",
            image: "http://fr.shopping.ran.com/photo/14L.jpg",
          },
          {
            username: "manuel",
            password: "$2b$10$jxatXsPDMO.Ie1kmrJZ4s8PklFr0XUGiRp2YG",
            email: "manuel@asf",
            firstname: "Manuel",
            lastname: "Gomez",
            adminAccess: false,
            professorAccess: true,
            studentAccess: false,
            groups: [],
            studentErrors: [],
            id: "61a7c8aa0f7c5abd5aea323c",
            image: "https://fr.shopping.rakuten.com/photo/148_L.jpg",
          },
        ];
        const userToAdd = {
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
        };
        const updatedUsers = [
          {
            username: "maria",
            password: "$2b$108yc/ddtCyl.uMK212RzF.0hrSzaJpBNoJO",
            email: "maria@asf",
            firstname: "María",
            lastname: "Fernandez",
            adminAccess: false,
            professorAccess: true,
            studentAccess: false,
            groups: [],
            studentErrors: [],
            id: "61a7c88f0f7c5abd5aea323a",
            image: "http://fr.shopping.ran.com/photo/14L.jpg",
          },
          {
            username: "manuel",
            password: "$2b$10$jxatXsPDMO.Ie1kmrJZ4s8PklFr0XUGiRp2YG",
            email: "manuel@asf",
            firstname: "Manuel",
            lastname: "Gomez",
            adminAccess: false,
            professorAccess: true,
            studentAccess: false,
            groups: [],
            studentErrors: [],
            id: "61a7c8aa0f7c5abd5aea323c",
            image: "https://fr.shopping.rakuten.com/photo/148_L.jpg",
          },
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
        ];

        mutations.loadedUsersFromGroup(mockedState, userToAdd);

        expect(state.loadedUsersFromGroup).toStrictEqual(updatedUsers);
      });
    });

    describe("When addUserError mutation receives a state and an array with UserErrors", () => {
      test("Then currentStudentErrors in state should be equal a UserErrors", () => {
        mockedState = state;
        const userErrors = [
          {
            errorType: "fallo",
            errorMessage: "message",
            errorComment: "Comment",
          },
          {
            errorType: "pronunciacion",
            errorMessage: "some message",
            errorComment: "Comment",
          },
        ];

        mutations.addUserError(mockedState, userErrors);

        expect(state.currentStudentErrors).toStrictEqual(userErrors);
      });
    });

    describe("When loadOneUserById mutation receives a state and a user", () => {
      test("Then loadedOneUserById in state should be equal a user", () => {
        mockedState = state;

        const user = {
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
        };

        mutations.loadOneUserById(mockedState, user);

        expect(state.loadedOneUserById).toStrictEqual(user);
      });
    });
  });
});
