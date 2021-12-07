import { mount } from "@vue/test-utils";
import About from "@/views/About.vue";
import router from "@/router";
import state from "../mockedState";

describe("Given a About component", () => {
  describe("When it renders", () => {
    test("Then it should renders html substring and show text on the page", () => {
      const wrapper = mount(About, {
        global: {
          plugins: [router],
          mocks: {
            $store: {
              state,
            },
          },
        },
      });
      const htmlSubstyring = "<h1>Sobre el centro</h1>";
      const text =
        "Sobre el centroHistoria Desde sus inicios, uno de nuestros objetivos ha sido no solo enseñar español, sino también generar el interés de los estudiantes por el idioma a través de la inmersión total en la cultura española, lo que hace que las clases sean increíblemente emocionantes e interesantes y les ayuda a conocer todas las peculiaridades de la sociedad española. y Cultura.ObjetivoNuestro principal objetivo es preservar la pureza de la lengua que se habla en la propia España, por ello todos nuestros profesores vinieron a Rusia para enseñarte la lengua castellana de referencia.Motivación Centro Picasso cree que la mejor manera de aprender un idioma es aprender en paralelo la cultura, la historia y la forma de pensar de la gente del país del idioma de destino. Realizamos periódicamente eventos culturales donde los alumnos de nuestro centro pueden poner en práctica sus conocimientos y conocer a los españoles, su cultura y forma de vida.";

      expect(wrapper.html()).toContain(htmlSubstyring);
      expect(wrapper.text()).toContain(text);
    });
  });
});
