<template>
  <div class="container">
    <h1>¡Hola, {{ currentUser.username }}!</h1>
    <p>
      Aquí puedes cambiar la información sobre los profesores, sus derechos de acceso. También los precios de los cursos que serán
      visibles para los visitantes del sitio en la página de Precios. Y también puedes crear un horario de lecciones que solo los
      profesores verán.
    </p>
    <h2>Profesores</h2>
    <ul class="list-group-item-success">
      <li v-for="teacher in teachers" :key="teacher" class="container__list">
        <teacher-card :lastname="teacher.lastname" :image="teacher.image" :firstname="teacher.firstname" />
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { mapActions, mapState } from "vuex";
import TeacherCard from "@/components/TeacherCard.vue";

export default defineComponent({
  name: "Admin",
  components: { TeacherCard },

  computed: {
    ...mapState(["teachers", "currentUser"]),
  },
  methods: {
    ...mapActions(["getTeachersFromApi"]),
  },
  mounted() {
    this.getTeachersFromApi();
  },
  data() {
    return {
      user: "",
    };
  },
});
</script>

<style>
.container__list {
  list-style: none;
}
</style>
