<template>
  <div class="home align-items-center d-flex flex-column justify-content-center">
    <p class="home_text">Nuevos grupos</p>
    <b-button class="moreinfo-button m-3" pill>Más info</b-button>
  </div>
  <PorqueNosotrosVue />
  <CursosOnMainPage />
  <SobreElCentroOnMainPage />
  <div class="container">
    <h2 class="d-flex justify-content-around m-4">Profesores</h2>
    <ul class="list-group-item-success">
      <li v-for="teacher in teachers || []" :key="teacher" class="container__list items-list">
        <teacher-card :lastname="teacher.lastname" :image="teacher.image" :firstname="teacher.firstname" :userId="teacher.id" />
      </li>
    </ul>
    <ContactosOnMainPage />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { mapActions, mapState } from "vuex";
import PorqueNosotrosVue from "@/components/PorqueNosotros.vue";
import TeacherCard from "@/components/TeacherCard.vue";
import CursosOnMainPage from "@/components/CursosOnMainPage.vue";
import SobreElCentroOnMainPage from "@/components/SobreElCenroOnMainPage.vue";
import ContactosOnMainPage from "@/components/ContactosOnMainPage.vue";

export default defineComponent({
  name: "Home",
  components: { PorqueNosotrosVue, TeacherCard, CursosOnMainPage, SobreElCentroOnMainPage, ContactosOnMainPage },
  computed: {
    ...mapState(["teachers"]),
  },
  methods: {
    ...mapActions(["getTeachersFromApi"]),
  },
  mounted() {
    this.getTeachersFromApi();
  },
});
</script>

<style>
button.home_button-more-info {
  background-color: #cc1810;
  color: white;
  border-radius: 20px;
  width: 150px;
}
.home {
  height: 200px;
  background-color: #ffad00;
}
.home_text {
  font-family: "Montserrat", sans-serif;
  text-transform: uppercase;
  font-size: 30px;
}
button.moreinfo-button {
  background-color: #cc1810;
  font-size: 25px;
}
.items-list {
  list-style: none;
}
@media screen and (max-width: 991px) {
  .home {
    max-height: 220px;
  }
}
@media screen and (max-width: 768px) {
  .home {
    max-height: 150px;
  }
}
</style>
