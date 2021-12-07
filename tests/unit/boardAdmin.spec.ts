import { mount } from "@vue/test-utils";
import BoardAdmin from "@/views/BoardAdmin.vue";
import router from "@/router";
import state from "../mockedState";

describe("Given a BoardAdmin component", () => {
  describe("When it renders", () => {
    test("Then it should renders html substring", () => {
      const wrapper = mount(BoardAdmin, {
        global: {
          plugins: [router],
          mocks: {
            $store: {
              state,
              methods: {
                getTeachersFromApi: jest.fn(),
                getPricesFromApi: jest.fn(),
                this: jest.fn(),
              },
              commit: jest.fn(),
              dispatch: jest.fn(),
            },
          },
        },
      });
      const htmlSubstyring = "<h2>Precios</h2>";

      expect(wrapper.html()).toContain(htmlSubstyring);
    });
  });
});
