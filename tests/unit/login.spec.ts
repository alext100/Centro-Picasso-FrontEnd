import { enableAutoUnmount, flushPromises, mount } from "@vue/test-utils";
import BootstrapVue3 from "bootstrap-vue-3";
import { createRouterMock, injectRouterMock } from "vue-router-mock";
import { createStore } from "vuex";
import Login from "@/views/Login.vue";
import state from "../mockedState";

const store = createStore({
  state() {
    return state;
  },
});

const wrapperOptions = {
  global: {
    plugins: [store, BootstrapVue3],
    stubs: { RouterLink: false },
  },
  methods: {
    handleLogin: jest.fn(),
    checkForm: jest.fn(),
  },
};

const router = createRouterMock({});
beforeEach(() => {
  injectRouterMock(router);
});
enableAutoUnmount(afterEach);

describe("Given a Login component", () => {
  describe("When user submit the form", () => {
    test("Then the form should be submitted", async () => {
      const wrapper = mount(Login, wrapperOptions);
      const loginForm = wrapper.findComponent('[data-test="loginBForm"]');

      await loginForm.trigger("submit");
      await flushPromises();

      expect(loginForm.emitted().submit).toBeTruthy();
    });
  });
});
