import { mount } from "@vue/test-utils";
import FormNewTeacher from "@/components/FormNewTeacher.vue";
import router from "@/router";
import state from "../mockedState";

describe("Given a FormNewTeacher.vue component ", () => {
  describe("When it renders", () => {
    const wrapper = mount(FormNewTeacher, {
      global: {
        plugins: [router],
        mocks: {
          $store: {
            state,
          },
        },
      },
    });

    test("Then it should renders html substring and inputs", () => {
      const htmlSubstyring = '<div class="container-sm create-form d-flex flex-column mb-5 w-75">';

      expect(wrapper.html()).toContain(htmlSubstyring);
    });

    test("Then it should show text from html", () => {
      const bFormCheckboxText = "Darle acceso a la sección para profesores";
      const buttonText = "Crearlo";
      expect(wrapper.text()).toContain(bFormCheckboxText + buttonText);
    });

    describe("When user click on Create button", () => {
      test("Then it should invoke registerUser with userData", async () => {
        const form = wrapper.get("b-form");
        form.trigger("submit");

        const onSubmit = jest.fn();
        onSubmit();

        expect(onSubmit).toHaveBeenCalled();
      });
    });
  });
});
