<template>
  <div class="container">
    <h1>¡Hola, {{ currentUser.username }}!</h1>

    <p>En esta página puedes formar grupos de tus alumnos. Y para cada grupo, agregue tareas o materiales de estudio.</p>

    <div class="container">
      <h2>Mis grupos:</h2>
      <ul class="list-group-item-secondary">
        <li v-for="group in userGroups || []" :key="group" class="container__list">
          <p>{{ group.groupname }}</p>
          <b-button pill class="b-card__button mb-5 w-25">Borrar de mis grupos</b-button>
        </li>
      </ul>
    </div>

    <div class="container">
      <h2>Todos los grupos</h2>
      <ul class="list-group-item-secondary">
        <li v-for="group in groups || []" :key="group" class="container__list">
          <p>{{ group.groupname }}</p>
          <b-button pill class="b-card__button mb-5 w-25">Añadir a mis grupos</b-button>
        </li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { mapActions, mapState } from "vuex";

export default defineComponent({
  name: "TeacherBoard",
  computed: {
    ...mapState(["currentUser", "groups", "userGroups"]),
  },
  methods: {
    ...mapActions(["getGroupsFromApi", "getUserGroupsFromApi"]),
  },
  mounted() {
    this.getGroupsFromApi();
    this.getUserGroupsFromApi();
  },
});
</script>
