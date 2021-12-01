import { mount } from "@vue/test-utils";
import router from "../../src/router";
import state from "../mockedState";
import Login from "../../src/views/Login.vue";

describe("Given a Login component", () => {
  describe("When the form is submited", () => {
    test("Then handleLogin should be call", () => {
      const wrapper = mount(Login, {
        global: {
          plugins: [router],
          mocks: {
            $store: {
              state,
              methods: {
                handleLogin: jest.fn(),
                this: jest.fn(),
              },
              commit: jest.fn(),
              dispatch: jest.fn(),
            },
          },
        },
      });
      const handleLogin = jest.fn();
      handleLogin();
      const submitButton = wrapper.get('[data-test="loginBForm"]');
      submitButton.trigger("submit");

      expect(handleLogin).toHaveBeenCalled();
    });
  });
});
