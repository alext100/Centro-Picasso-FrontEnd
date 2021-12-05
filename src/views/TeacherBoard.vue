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

    <b-button v-on:click="isHiddenFormToCreate = !isHiddenFormToCreate" pill class="b-card__button mb-5 mt-5 w-100">{{
      isHiddenFormToCreate ? "Mostrar todos los grupos" : "Ocultar los grupos"
    }}</b-button>

    <div v-if="!isHiddenFormToCreate" class="container">
      <h2>Todos los grupos</h2>
      <ul class="list-group-item-secondary container__list--try">
        <li v-for="group in groups || []" :key="group" class="container__list">
          <p>{{ group.groupname }}</p>
          <b-button @click="handleAddToMyGroups(group.id), $toast('Añadido a tus grupos')" pill class="b-card__button mb-5 w-25"
            >Añadir a mis grupos</b-button
          >
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
    ...mapActions(["getGroupsFromApi", "getUserGroupsFromApi", "addGroupToUser"]),
    async handleAddToMyGroups(groupID: string) {
      await this.addGroupToUser(groupID);
    },
  },
  mounted() {
    this.getGroupsFromApi();
    this.getUserGroupsFromApi();
  },
  data() {
    return {
      isHiddenFormToCreate: true,
    };
  },
});
</script>

<style scoped>
.slide-fade-enter-active {
  transition: all 0.3s ease-out;
}

.slide-fade-leave-active {
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}
.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateX(20px);
  opacity: 0;
}
.message {
  position: absolute;
  top: 50%;
  left: 50%;
}
.container__list--try {
  position: relative;
}
.b-card__button {
  min-width: fit-content;
}
</style>
