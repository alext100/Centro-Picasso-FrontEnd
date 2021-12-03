import axios from "axios";
import { Commit } from "vuex";
import actions from "@/store/actions";
import configActionContext from "../test-utils";

jest.mock("axios");
const mockedAxios = axios as jest.Mocked<typeof axios>;
const commit = jest.fn() as jest.MockedFunction<Commit>;

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
});
