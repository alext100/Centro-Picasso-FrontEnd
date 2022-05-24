import { enableAutoUnmount, flushPromises, mount } from "@vue/test-utils";
import BootstrapVue3 from "bootstrap-vue-3";
import { createRouterMock, injectRouterMock } from "vue-router-mock";
import { createStore } from "vuex";
import FormNewTeacher from "@/components/FormNewTeacher.vue";
import state from "../mockedState";

const store = createStore({
  state() {
    return state;
  },
});

const router = createRouterMock({});
beforeEach(() => {
  injectRouterMock(router);
});
enableAutoUnmount(afterEach);

const wrapperOptions = {
  global: {
    plugins: [store, BootstrapVue3],
  },
};

describe("Given a FormNewTeacher.vue component ", () => {
  describe("When it renders", () => {
    test("Then it should renders html substring and inputs", () => {
      const wrapper = mount(FormNewTeacher, wrapperOptions);
      const htmlSubString = '<div class="container-sm create-form d-flex flex-column mb-5 w-75">';

      expect(wrapper.html()).toContain(htmlSubString);
    });

    test("Then it should show text from html", () => {
      const wrapper = mount(FormNewTeacher, wrapperOptions);
      const bFormCheckboxText = "Darle acceso a la sección para profesores";
      const buttonText = "Crearlo";

      expect(wrapper.text()).toContain(bFormCheckboxText + buttonText);
    });

    describe("When user click on 'Create' button", () => {
      test("Then the form should be submitted", async () => {
        const wrapper = mount(FormNewTeacher, wrapperOptions);
        const form = wrapper.findComponent('[data-test="createBForm"]');

        await form.trigger("submit");
        await flushPromises();

        expect(form.emitted().submit).toBeTruthy();
      });
    });
  });
});
