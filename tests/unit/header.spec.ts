import { enableAutoUnmount, mount } from "@vue/test-utils";
import BootstrapVue3 from "bootstrap-vue-3";
import { createRouterMock, injectRouterMock } from "vue-router-mock";
import { createStore } from "vuex";
import Header from "@/components/Header.vue";
import state from "../mockedState";

const store = createStore({
  state() {
    return state;
  },
});

store.dispatch = jest.fn();
store.commit = jest.fn();

const router = createRouterMock({});
beforeEach(() => {
  injectRouterMock(router);
});
enableAutoUnmount(afterEach);

const wrapperOptions = {
  global: {
    plugins: [store, BootstrapVue3],
    stubs: { RouterLink: false },
  },
  methods: {
    handleLogout: jest.fn(),
    this: jest.fn(),
  },
  actions: {
    getUserFromLocalStorage: jest.fn(),
    deleteDataFromLocalStorage: jest.fn(),
  },
};

describe("Given a Header.vue component ", () => {
  describe("When it renders", () => {
    test("Then it should show links to the pages", () => {
      const wrapper = mount(Header, wrapperOptions);

      expect(wrapper.text()).toContain("Inicio");
      expect(wrapper.text()).toContain("Sobre el centro");
      expect(wrapper.text()).toContain("Precios");
      expect(wrapper.text()).toContain("Blog");
      expect(wrapper.text()).toContain("Contactos");
      expect(wrapper.text()).toContain("Inscribirse");
    });

    describe("When a user click on the 'logout'", () => {
      state.isUserAuthenticated = true;
      test("Then it should invoke handleLogout()", async () => {
        const wrapper = mount(Header, wrapperOptions);
        const logoutButton = wrapper.find(".logout-button");
        const spyLogout = jest.spyOn(wrapper.vm, "handleLogout");

        await logoutButton.trigger("click");

        expect(spyLogout).toHaveBeenCalled();
      });

      test("Then it should invoke router.push with '/'", async () => {
        const wrapper = mount(Header, wrapperOptions);
        const logoutButton = wrapper.find(".logout-button");

        await logoutButton.trigger("click");

        expect(wrapper.vm.$router.push).toHaveBeenCalledWith("/");
      });
    });
  });
});
