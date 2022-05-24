import { enableAutoUnmount, mount } from "@vue/test-utils";
import BootstrapVue3 from "bootstrap-vue-3";
import { createRouterMock, injectRouterMock } from "vue-router-mock";
import { createStore } from "vuex";
import TeacherBoard from "@/views/TeacherBoard.vue";
import state from "../mockedState";

const store = createStore({
  state() {
    return state;
  },
});

const wrapperOptions = {
  global: {
    plugins: [store, BootstrapVue3],
  },
  methods: {
    getGroupsFromApi: jest.fn(),
    getUserGroupsFromApi: jest.fn(),
    handleAddToMyGroups: jest.fn(),
    handleDeleteGroupe: jest.fn(),
    addGroupToUser: jest.fn(),
    deleteUserGroup: jest.fn(),
    this: jest.fn(),
  },
  data() {
    return {
      isHiddenFormToCreate: true,
    };
  },
};

const router = createRouterMock({});
beforeEach(() => {
  injectRouterMock(router);
});
enableAutoUnmount(afterEach);

describe("Given a TeacherBoard component", () => {
  describe("When it renders", () => {
    test("Then it should render h1 header with user name", () => {
      const wrapper = mount(TeacherBoard, wrapperOptions);
      const headerHtml = "<h1>¡Hola Pablo!</h1>";
      const header = wrapper.find("h1");

      expect(header.exists()).toBe(true);
      expect(header.html()).toBe(headerHtml);
    });
  });
});
