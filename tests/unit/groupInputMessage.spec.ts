import { mount } from "@vue/test-utils";
import GroupInputMessage from "@/components/GroupInputMessage.vue";
import router from "@/router";
import state from "../mockedState";

describe("Given a FormNewTeacher.vue component ", () => {
  const wrapper = mount(GroupInputMessage, {
    global: {
      plugins: [router],
      mocks: {
        $store: {
          state,
        },
      },
    },
  });

  describe("When it renders", () => {
    test("Then it should renders html substring and inputs", () => {
      const htmlSubstyring = '<div class="container-sm d-flex flex-column mt-5">';

      expect(wrapper.html()).toContain(htmlSubstyring);
    });

    test("Then it should show text from html", () => {
      const buttonText = "Enviar";
      expect(wrapper.text()).toContain(buttonText);
    });
  });
});
