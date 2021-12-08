import { mount } from "@vue/test-utils";
import Header from "@/components/Header.vue";
import router from "@/router";

describe("Given a Header.vue component ", () => {
  describe("When it renders", () => {
    const wrapper = mount(Header, {
      global: {
        plugins: [router],
        mocks: {
          $store: {
            state: {
              isUserAuthenticated: true,
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
    test("Then it should renders html substring and show links to the pages", () => {
      const htmlSubstyring =
        '<nav id="nav" class="header d-flex flex-column justify-content-between navbar navbar-expand-lg navbar-light bg-light p-3 sticky-md-top">';

      expect(wrapper.html()).toContain(htmlSubstyring);
      expect(wrapper.text()).toContain("Inicio");
      expect(wrapper.text()).toContain("Sobre el centro");
      expect(wrapper.text()).toContain("Precios");
      expect(wrapper.text()).toContain("Blog");
      expect(wrapper.text()).toContain("Contactos");
      expect(wrapper.text()).toContain("Inscribirse");
    });

    describe("When a user click on the 'logout'", () => {
      test("Then it should invoke handleLogout()", async () => {
        const logoutButton = wrapper.get('[data-test="logout"]');
        await logoutButton.trigger("click");
        const handleLogout = jest.fn();

        handleLogout();

        expect(handleLogout).toHaveBeenCalled();
      });
    });
  });
});
