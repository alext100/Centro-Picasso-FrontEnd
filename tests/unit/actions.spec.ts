import axios from "axios";
import { Commit, Dispatch } from "vuex";
import jwtDecode from "jwt-decode";
import actions from "@/store/actions";
import state from "../mockedState";
import { configActionContext, configActionContextDispatch } from "../test-utils";

jest.mock("axios");
const mockedAxios = axios as jest.Mocked<typeof axios>;
const commit = jest.fn() as jest.MockedFunction<Commit>;
const dispatch = jest.fn() as jest.MockedFunction<Dispatch>;

describe("Given an actions from store", () => {
  describe("When the action getPricesFromApi is invoked", () => {
    test("Then it should call commit with loadPrices and received data", async () => {
      const data = [
        {
          price: 3100,
          level: "Para tres personas",
          duration: "1.5 horas",
          id: "61a9d9f93d1576bdbb9af859",
        },
      ];
      mockedAxios.get.mockResolvedValue({
        data,
      });

      await actions.getPricesFromApi(configActionContext(commit));

      expect(commit).toHaveBeenCalledWith("loadPrices", data);
    });
  });

  describe("When the action getTeachersFromApi is invoked", () => {
    test("Then it should call commit with loadTeachers and received data", async () => {
      const data = [
        {
          username: "maria",
          password: "$2b$10$gtoDQ8yc/ddtCy45.uMK52RzF.520Bou1zaJpBNoJO",
          email: "maria@asf",
          firstname: "María",
          lastname: "Fernandez",
          adminAccess: false,
          professorAccess: true,
          studentAccess: false,
          groups: [],
          studentErrors: [],
          image: "https://i.ebayimg.com/thumbs/images/g/VbAwFX/s-l300.jpg",
          id: "61a7c88f0f7c5abg5ha5ea323a",
        },
        {
          username: "manuel",
          password: "$2b$10$5tXsP5PsR55NM8MO.Ie1kmrJZ4s8PklFr0XUO5nGiRp2YG",
          email: "manuel@asf",
          firstname: "Manuel",
          lastname: "Gomez",
          adminAccess: false,
          professorAccess: true,
          studentAccess: false,
          groups: [],
          studentErrors: [],
          image: "https://fr.shopping.rakuten.com/photo/1444508_L.jpg",
          id: "61a7c8aa057c5abd5ae5ay23c",
        },
      ];
      mockedAxios.get.mockResolvedValue({
        data,
      });

      await actions.getTeachersFromApi(configActionContext(commit));

      expect(commit).toHaveBeenCalledWith("loadTeachers", data);
    });
  });

  describe("When the action updatePriceInDB is invoked", () => {
    test("Then it should call commit with updatedPrice and newPrices", async () => {
      const data = [
        {
          price: 3100,
          level: "Para tres personas",
          duration: "1.5 horas",
          id: "61a9d9f93d1576bdbb9af859",
        },
      ];
      mockedAxios.get.mockResolvedValue({
        data,
      });

      await actions.updatePriceInDB(configActionContext(commit), { newPrice: "", priceId: "", priceObject: [] });

      expect(commit).toHaveBeenCalledWith("updatedPrice", data);
    });
  });

  describe("When the action deleteDataFromLocalStorage is invoked", () => {
    test("Then it should invoke commit with logoutUser", async () => {
      const logedOutUser = { token: "", refreshToken: "" };

      await actions.deleteDataFromLocalStorage(configActionContext(commit));

      expect(commit).toHaveBeenCalledWith("logoutUser", logedOutUser);
    });
  });

  describe("When the action deleteLoadedUsers is invoked", () => {
    test("Then it should invoke commit with deleteLoadedUsersFromGroup", async () => {
      await actions.deleteLoadedUsers(configActionContext(commit));

      expect(commit).toHaveBeenCalledWith("deleteLoadedUsersFromGroup");
    });
  });

  describe("When the action updateGroup is invoked", () => {
    test("Then it should invoke commit with getGroupById and id of the group to update", async () => {
      const groupToUpdate = {
        groupname: "DDDD",
        members: [],
        messages: [],
        id: "61a0d8e8726c02fd1ef1f53f",
      };

      await actions.updateGroup(configActionContextDispatch(dispatch), groupToUpdate);

      expect(dispatch).toHaveBeenCalledWith("getGroupById", groupToUpdate.id);
    });
  });

  describe("When the action getUserById is invoked with an user id", () => {
    test("Then it should call commit with loadedUsersFromGroup and received data", async () => {
      const userID = "61a7c88f0f7c5abg5ha5ea323a";
      const data = [
        {
          username: "maria",
          password: "$2b$10$gtoDQ8yc/ddtCy45.uMK52RzF.520Bou1zaJpBNoJO",
          email: "maria@asf",
          firstname: "María",
          lastname: "Fernandez",
          adminAccess: false,
          professorAccess: true,
          studentAccess: false,
          groups: [],
          studentErrors: [],
          image: "https://i.ebayimg.com/thumbs/images/g/VbAwFX/s-l300.jpg",
          id: "61a7c88f0f7c5abg5ha5ea323a",
        },
      ];
      mockedAxios.get.mockResolvedValue({
        data,
      });

      await actions.getUserById(configActionContext(commit), userID);

      expect(commit).toHaveBeenCalledWith("loadedUsersFromGroup", { ...data });
    });
  });

  describe("When the action getGroupById is invoked with a group id", () => {
    test("Then it should call commit with loadOneGroup and received data", async () => {
      const groupID = "61ac2b80c9da15a9378fb207";
      const data = [
        {
          groupname: "EEEE",
          members: ["61a7c85e0f7c5abd5aea3238", "61a7c88f0f7c5abd5aea323a", "61a7c8aa0f7c5abd5aea323c"],
          messages: [
            {
              message: "Los deberes: aliosjdjnbfoaqrngr`qeirngvpaqnvaqñdkfq qirf`qiç",
              time: "2021-12-05T21:00:02.251Z",
            },
          ],
          id: "61ac2b80c9da15a9378fb207",
        },
      ];
      mockedAxios.get.mockResolvedValue({
        data,
      });

      await actions.getGroupById(configActionContext(commit), groupID);

      expect(commit).toHaveBeenCalledWith("loadOneGroup", data);
    });
  });

  describe("When the action deleteTeacher is invoked with a teacher id", () => {
    test("Then it should call commit with deleteTeacher and this id", async () => {
      const userID = "61a7c88f0f7c5abg5ha5ea323a";
      const data = [
        {
          username: "maria",
          password: "$2b$10$gtoDQ8yc/ddtCy45.uMK52RzF.520Bou1zaJpBNoJO",
          email: "maria@asf",
          firstname: "María",
          lastname: "Fernandez",
          adminAccess: false,
          professorAccess: true,
          studentAccess: false,
          groups: [],
          studentErrors: [],
          image: "https://i.ebayimg.com/thumbs/images/g/VbAwFX/s-l300.jpg",
          id: "61a7c88f0f7c5abg5ha5ea323a",
        },
      ];
      mockedAxios.get.mockResolvedValue({
        data,
      });

      await actions.deleteTeacher(configActionContext(commit), userID);

      expect(commit).toHaveBeenCalledWith("deleteTeacher", userID);
    });
  });

  describe("When the action getGroupsFromApi is invoked", () => {
    test("Then it should call commit with loadGroups and received data", async () => {
      const data = [
        {
          groupname: "CCCC",
          members: [],
          messages: [],
          id: "61a0d8d8726c02fd1ef1f53d",
        },
        {
          groupname: "DDDD",
          members: [],
          messages: [],
          id: "61a0d8e8726c02fd1ef1f53f",
        },
        {
          groupname: "EEEE",
          members: ["61a7c85e0f7c5abd5aea3238", "61a7c88f0f7c5abd5aea323a", "61a7c8aa0f7c5abd5aea323c"],
          messages: [
            {
              message: "Los deberes: aliosjdjnbfoaqrngr`qeirngvpaqnvaqñdkfq qirf`qiç",
              time: "2021-12-05T21:00:02.251Z",
            },
          ],
          id: "61ac2b80c9da15a9378fb207",
        },
      ];
      mockedAxios.get.mockResolvedValue({
        data,
      });

      await actions.getGroupsFromApi(configActionContext(commit));

      expect(commit).toHaveBeenCalledWith("loadGroups", data);
    });
  });

  describe("When the action registerUser is invoked", () => {
    test("Then it should call commit with getTeachersFromApi and received data", async () => {
      const data = { username: "aerstfg", password: "aefgasdga" };
      mockedAxios.get.mockResolvedValue({
        data,
      });

      await actions.registerUser(configActionContextDispatch(dispatch));

      expect(dispatch).toHaveBeenCalledWith("getTeachersFromApi");
    });
  });

/*   describe("When the action login is executed successfully", () => {
    test("Login should call dispatch", async () => {
      /* const userData = {} as UserLoginData; */
      const mockedState = state;
      const userData = { username: mockedState.user.username, password: mockedState.user.password, data: { token: mockedState.token } };
      const token = `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6Im1hcmlhIiwiaWQiOiI2MWE3Yzg4ZjBmN2M1YWJkNWFlYTMyM2EiLCJpYXQiOjE2Mzg2MzUyODAsImV4cCI6MTYzODg5NDQ4MH0.YeLWuXTKg_GloPhLd6KcXIMxjdwCK6RzorFoNL4_TO4`;
      mockedAxios.post.mockResolvedValue({
        data: {
          username: "maria",
          password: "$2b$10$gtoDQ8yc/ddtCy4ttyeel.uMK212RzF.0hrSiL20Bou1zaJpBNoJO",
          email: "maria@asf",
          firstname: "María",
          lastname: "Fernandez",
          adminAccess: false,
          professorAccess: true,
          studentAccess: false,
          groups: [
            "61a0d8cb726c02fd1ef1f539",
            "619f6039715b49f29a18d374",
            "61a0d8d2726c02fd1ef1f53b",
            "61ac2bb0c9da15a9378fb20d",
            "61ac2ba9c9da15a9378fb20b",
            "61ac2b8dc9da15a9378fb209",
            "61ac2b80c9da15a9378fb207",
          ],
          studentErrors: [],
          image: "https://i.ebayimg.com/thumbs/images/g/OtcAAOSwzbVbAwFX/s-l300.jpg",
          id: "61a7c88f0f7c5abd5aea323a",
        },
      });
      const user = jwtDecode(token);

      await actions.login(configActionContextDispatch(dispatch), { user, token });

      expect(dispatch).toHaveBeenCalledWith("userLogedFromApi");
    });
  }); */
});
