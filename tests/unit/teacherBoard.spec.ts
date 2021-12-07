import { mount } from "@vue/test-utils";
import TeacherBoard from "@/views/TeacherBoard.vue";
import router from "@/router";
import state from "../mockedState";

describe("Given a TeacherBoard component", () => {
  describe("When it renders", () => {
    test("Then it should renders html substring", () => {
      const wrapper = mount(TeacherBoard, {
        global: {
          plugins: [router],
          mocks: {
            $store: {
              state,
              methods: {
                getGroupsFromApi: jest.fn(),
                getUserGroupsFromApi: jest.fn(),
                handleAddToMyGroups: jest.fn(),
                handleDeleteGroupe: jest.fn(),
                addGroupToUser: jest.fn(),
                deleteUserGroup: jest.fn(),
                this: jest.fn(),
              },
              commit: jest.fn(),
              dispatch: jest.fn(),
            },
          },
        },
      });
      const htmlSubstyring =
        "<p>En esta página puedes formar grupos de tus alumnos. Y para cada grupo, agregue tareas o materiales de estudio.</p>";

      expect(wrapper.html()).toContain(htmlSubstyring);
    });
  });
});
