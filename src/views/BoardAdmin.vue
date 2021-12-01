<template>
  <div class="container">
    <h1>¡Hola, {{ currentUser.username }}!</h1>
    <p>
      Aquí puedes cambiar la información sobre los profesores, sus derechos de acceso. También los precios de los cursos que serán
      visibles para los visitantes del sitio en la página de Precios. Y también puedes crear un horario de lecciones que solo los
      profesores verán.
    </p>
    <ul>
      <li v-for="teacher in teachers" :key="teacher">
        <router-link :to="'/users/' + teacher.id"
          ><span>{{ teacher.username }}</span></router-link
        >
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { mapActions, mapState } from "vuex";

export default defineComponent({
  name: "Admin",
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
