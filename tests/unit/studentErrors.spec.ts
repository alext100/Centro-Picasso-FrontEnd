import { mount } from "@vue/test-utils";
import StudentErrors from "@/components/StudentErrors.vue";
import router from "@/router";
import state from "../mockedState";

describe("Given a studentErrors component ", () => {
  describe("When it renders", () => {
    test("Then it should renders html substring", () => {
      const wrapper = mount(StudentErrors, {
        global: {
          plugins: [router],
          mocks: {
            $store: {
              state,
              methods: {
                handleDeleteError: jest.fn(),
                getUserErrorsById: jest.fn(),
                deleteErrorFromUser: jest.fn(),
                getOneUserById: jest.fn(),
                this: jest.fn(),
              },
              commit: jest.fn(),
              dispatch: jest.fn(),
            },
          },
        },
      });
      const htmlSubstyring = '<ul class="list-group-item-success reverseorder">';

      expect(wrapper.html()).toContain(htmlSubstyring);
    });
  });
});
