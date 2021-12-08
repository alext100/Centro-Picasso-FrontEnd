import { mount } from "@vue/test-utils";
import { createStore } from "vuex";
import StudentBoard from "@/views/StudentBoard.vue";
import router from "@/router";
import state from "../mockedState";

describe("Given a GroupMembers component ", () => {
  describe("When it renders", () => {
    test("Then it should renders html substring", () => {
      const wrapper = mount(StudentBoard, {
        global: {
          plugins: [router],
          mocks: {
            $store: {
              state: {
                isUserAuthenticated: true,
                currentUser: { firstname: "" },
                currentGroup: {
                  groupname: "",
                },
              },

              methods: {
                getUserFromLocalStorage: jest.fn(),
                deleteDataFromLocalStorage: jest.fn(),
                handleLogout: jest.fn(),

                this: jest.fn(),
              },
              commit: jest.fn(),
              dispatch: jest.fn(),
            },
          },
        },
      });
      const htmlSubstyring = '<h2 class="mb-4">Miembros del grupo:</h2>';

      expect(wrapper.html()).toContain(htmlSubstyring);
    });
  });
});
