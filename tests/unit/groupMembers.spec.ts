import { mount } from "@vue/test-utils";
import { createStore } from "vuex";
import GroupMembers from "@/components/GroupMembers.vue";
import router from "@/router";
import state from "../mockedState";

describe("Given a GroupMembers component ", () => {
  describe("When it renders", () => {
    test("Then it should renders html substring and inputs", () => {
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

      const wrapper = mount(GroupMembers, {
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
      const htmlSubstyring = '<h2 class="mb-4">Miembros del grupo:</h2>';

      expect(wrapper.html()).toContain(htmlSubstyring);
    });
  });
});
