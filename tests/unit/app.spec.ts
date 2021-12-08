import { mount } from "@vue/test-utils";
import router from "../../src/router";
import state from "../mockedState";
import App from "../../src/App.vue";
import "@testing-library/jest-dom";

describe("Given the App", () => {
  describe("When its rendered", () => {
    test("Then it should render a div with htmlString of header component", async () => {
      const wrapper = mount(App, {
        global: {
          plugins: [router],
          mocks: {
            $store: {
              state,
            },
          },
        },
      });

      const htmlString = '<div class="align-items-md-center d-flex mb-3 ml-5">';

      expect(wrapper.html()).toContain(htmlString);
    });
  });
});
