import { mount } from "@vue/test-utils";
import { createStore } from "vuex";
import AddUser from "@/components/AddUser.vue";
import router from "@/router";
import state from "../mockedState";

describe("Given a GroupMembers component ", () => {
  describe("When it renders", () => {
    test("Then it should renders html substring", () => {
      const store = createStore({
        state() {
          state.currentGroup = {
            groupname: "",
            members: ["asfdaa", "asdgfa"],
            messages: [{}],
            id: "",
          };
          state.loadedUsersFromGroup = [];
          return state;
        },
        actions: { getGroupById: jest.fn(), getUserById: jest.fn(), deleteLoadedUsers: jest.fn() },
      });

      const wrapper = mount(AddUser, {
        global: {
          plugins: [router, store],
          mocks: {
            $route: {
              params: {
                id: "12345",
              },
            },
            $store: {
              state,
            },
          },
        },
        stubs: ["router-link", "router-view"],
      });
      const htmlSubstyring =
        "<p>En esta página puedes formar grupos de tus alumnos. Y para cada grupo y puede agregue tareas o materiales de estudio.</p>";

      expect(wrapper.html()).toContain(htmlSubstyring);
    });
  });
});
