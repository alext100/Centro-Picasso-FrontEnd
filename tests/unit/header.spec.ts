import { shallowMount } from "@vue/test-utils";
import Header from "@/components/Header.vue";

describe("Given a Header.vue component ", () => {
  describe("When it renders", () => {
    test("Then it should renders html substring and show links to the pages", () => {
      const htmlSubstyring =
        '<nav id="nav" class="d-flex justify-content-between navbar navbar-expand-lg navbar-light bg-light">';

      const wrapper = shallowMount(Header);

      expect(wrapper.html()).toContain(htmlSubstyring);
      expect(wrapper.text()).toContain("Inicio");
      expect(wrapper.text()).toContain("Sobre el centro");
      expect(wrapper.text()).toContain("Precios");
      expect(wrapper.text()).toContain("Blog");
      expect(wrapper.text()).toContain("Contactos");
    });
  });
});
