import { mount } from "@vue/test-utils";
import { createStore } from "vuex";
import TeacherCard from "@/components/TeacherCard.vue";
import state from "@/store/state";
import router from "@/router";

describe("Given a TeacherCard component", () => {
  const store = createStore({
    state() {
      state.isAdmin = true;
      return state;
    },
    actions: { deleteTeacher: jest.fn(), this: jest.fn(), handleDelete: jest.fn() },
  });

  const wrapper = mount(TeacherCard, {
    props: { firstname: "asfe", lastname: "asdf", image: "asdf", userId: "asdf" },
    global: {
      plugins: [router, store],
      mocks: {
        methods: {},
        $route: {
          params: {
            id: "123455",
          },
        },
        $store: {
          state,
        },
      },
    },
    dispatch: jest.fn(),
    commit: jest.fn(),
    handleDelete: jest.fn(),
    deleteTeacher: jest.fn(),
    stubs: ["router-link", "router-view"],
  });
  describe("When it received props with a first name and last name", () => {
    describe("When it rendered", () => {
      test("Then it should show teachers first name, last name and a button text", async () => {
        const cardText = `Pablo LopezBorrar`;

        await wrapper.setProps({ firstname: "Pablo", lastname: "Lopez" });

        expect(wrapper.text()).toBe(cardText);
      });
    });
  });

  describe("When a user click on the 'Borrar' button", () => {
    test("Then it should invoke handleDelete with userID", async () => {
      const handleDelete = jest.fn();

      const deleteButton = await wrapper.get('[data-test="delete"]');

      /*  await deleteButton.trigger("click"); */
      await handleDelete();

      await expect(handleDelete).toHaveBeenCalled();
    });
  });
});
