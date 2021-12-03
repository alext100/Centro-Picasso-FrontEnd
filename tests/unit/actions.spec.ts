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
});
