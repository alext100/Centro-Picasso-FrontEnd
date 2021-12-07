import { mount } from "@vue/test-utils";
import { createStore } from "vuex";
import TeacherCard from "@/components/TeacherCard.vue";
import state from "@/store/state";
import router from "@/router";

describe("Given a TeacherCard component", () => {
  describe("When it received props with a first name and last name", () => {
    describe("When it rendered", () => {
      test("Then it should show teachers first name, last name and a button text", async () => {
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

        const wrapper = mount(TeacherCard, {
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

        const cardText = `Pablo Lopez`;

        await wrapper.setProps({ firstname: "Pablo", lastname: "Lopez" });

        expect(wrapper.text()).toBe(cardText);
      });
    });
  });
});
