import { mount } from "@vue/test-utils";
import PricesTable from "@/components/PricesTable.vue";
import router from "@/router";
import state from "../mockedState";

describe("Given a PricesTable component ", () => {
  describe("When it renders", () => {
    test("Then it should renders html substring", () => {
      const wrapper = mount(PricesTable, {
        global: {
          plugins: [router],
          mocks: {
            $store: {
              state,
              methods: {
                getPricesFromApi: jest.fn(),
                updatePriceInDB: jest.fn(),
                this: jest.fn(),
              },
              commit: jest.fn(),
              dispatch: jest.fn(),
            },
          },
        },
      });
      const htmlSubstyring = '<table class="table" aria-label="precios de cursos">';

      expect(wrapper.html()).toContain(htmlSubstyring);
    });
  });
});
