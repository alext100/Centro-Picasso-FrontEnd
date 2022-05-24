import { enableAutoUnmount, mount } from "@vue/test-utils";
import BootstrapVue3 from "bootstrap-vue-3";
import { createRouterMock, injectRouterMock } from "vue-router-mock";
import { createStore } from "vuex";
import TeacherCard from "@/components/TeacherCard.vue";
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
  methods: { handleDelete: jest.fn() },
  actions: { deleteTeacher: jest.fn() },
};

const router = createRouterMock({});
beforeEach(() => {
  injectRouterMock(router);
});
enableAutoUnmount(afterEach);

describe("Given a TeacherCard component", () => {
  describe("When it rendered with received props with a first name and a last name", () => {
    test("Then it should show teachers first name, last name and a button text", async () => {
      const wrapper = mount(TeacherCard, wrapperOptions);
      state.isAdmin = true;
      const cardText = `Pablo Lopez`;

      await wrapper.setProps({ firstname: "Pablo", lastname: "Lopez" });

      expect(wrapper.text()).toContain(cardText);
    });
  });
});

describe("When a user click on the 'Borrar' button", () => {
  test("Then it should invoke handleDelete with userID", async () => {
    const wrapper = mount(TeacherCard, wrapperOptions);
    const spyDelete = jest.spyOn(wrapper.vm, "handleDelete");
    const deleteButton = wrapper.get('[data-test="delete"]');
    state.isAdmin = true;

    await wrapper.setProps({ userId: "1q2w3e4r" });
    await deleteButton.trigger("click");

    expect(spyDelete).toHaveBeenCalledWith("1q2w3e4r");
  });
});
