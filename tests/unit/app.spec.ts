import { mount } from "@vue/test-utils";
import { createStore } from "vuex";
import router from "../../src/router";
import state from "../mockedState";
import App from "../../src/App.vue";
import "@testing-library/jest-dom";

describe("Given the App", () => {
  describe("When its rendered", () => {
    test("Then it should render a div with htmlString of header component", async () => {
      const store = createStore({
        state() {
          return state;
        },
      });

      const wrapper = mount(App, {
        global: {
          plugins: [router, store],
        },
        stubs: ["router-view"],
      });

      const htmlString =
        '<nav id="nav" class="header d-flex flex-column justify-content-between navbar navbar-expand-lg navbar-light bg-light p-3 sticky-md-top">';

      expect(wrapper.html()).toContain(htmlString);
    });
  });
});
