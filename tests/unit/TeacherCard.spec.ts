import { mount } from "@vue/test-utils";
import TeacherCard from "@/components/TeacherCard.vue";

describe("Given a TeacherCard component", () => {
  describe("When it received props with a first name and last name", () => {
    describe("When it rendered", () => {
      test("Then it should show teachers first name, last name and a button text", async () => {
        const wrapper = mount(TeacherCard);
        // eslint-disable-next-line no-useless-concat
        const cardText = `Pablo Lopez` + `Cambiar`;

        await wrapper.setProps({ firstname: "Pablo", lastname: "Lopez" });

        expect(wrapper.text()).toBe(cardText);
      });
    });
  });
});
