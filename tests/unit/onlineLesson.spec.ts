import { mount } from "@vue/test-utils";
import OnlineLesson from "@/components/OnlineLesson.vue";
import router from "@/router";
import state from "../mockedState";

describe("Given a GroupMembers component ", () => {
  describe("When it renders", () => {
    test("Then it should renders html substring", () => {
      const wrapper = mount(OnlineLesson, {
        global: {
          plugins: [router],
          mocks: {
            $store: {
              state,
            },
          },
        },
      });
      const htmlSubstyring = '<h2 class="mb-4">Miembros del grupo:</h2>';

      expect(wrapper.html()).toContain(htmlSubstyring);
    });
  });
});
