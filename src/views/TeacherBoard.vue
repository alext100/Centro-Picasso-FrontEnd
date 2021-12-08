<template>
  <div class="container">
    <h1>¡Hola {{ currentUser.firstName }}!</h1>
    <b-card border-variant="light" class="m-4 porque-nosotros-card" style="min-width: 300px">
      <b-card-text>En esta página puedes formar grupos de tus alumnos. Y para cada grupo, agregue tareas o materiales de estudio.</b-card-text>
    </b-card>
    <div class="container">
      <h2>Mis grupos:</h2>
      <ul class="list-group-item-success">
        <li v-for="group in userGroups || []" :key="group" class="container__list d-flex flex-column">
          <b-card>
            <div class="mt-3">
              <b-card-group deck>
                <b-card bg-variant="light" class="text-center">
                  <router-link :to="'/group/' + group.id"
                    ><b-card-text>{{ group.groupname }}</b-card-text>
                  </router-link>

                  <template #footer>
                    <b-button
                      @click="handleDeleteGroupe(group.id), $toast('Borrado de tus grupos')"
                      pill
                      class="btn-lg button-delete align-self-center"
                      ><em class="far fa-trash-alt"></em>
                    </b-button>
                  </template>
                </b-card>
              </b-card-group>
            </div>
          </b-card>
        </li>
      </ul>
    </div>

    <b-button v-on:click="isHiddenFormToCreate = !isHiddenFormToCreate" pill class="b-card__button mb-5 mt-5 w-100">{{
      isHiddenFormToCreate ? "Mostrar todos los grupos" : "Ocultar los grupos"
    }}</b-button>

    <div v-if="!isHiddenFormToCreate" class="container">
      <h2>Todos los grupos</h2>
      <ul class="list-group-item-success">
        <li v-for="group in groups || []" :key="group" class="container__list d-flex flex-column">
          <b-card>
            <div class="mt-3">
              <b-card-group deck>
                <b-card bg-variant="light" class="text-center">
                  <router-link :to="'/group/' + group.id">
                    <b-card-text>{{ group.groupname }}</b-card-text>
                  </router-link>
                  <template #footer>
                    <b-button
                      @click="handleAddToMyGroups(group.id), $toast('Añadido a tus grupos')"
                      pill
                      class="btn-lg button-delete align-self-center"
                      ><em class="bi bi-plus-circle"></em>
                    </b-button>
                  </template>
                </b-card>
              </b-card-group>
            </div>
          </b-card>
          <!--           <b-button @click="handleAddToMyGroups(group.id), $toast('Añadido a tus grupos')" pill class="b-card__button mb-5 w-25"
            >Añadir a mis grupos</b-button
          > -->

          <!-- <p>{{ group.groupname }}</p> -->
          <!--           <b-button @click="handleAddToMyGroups(group.id), $toast('Añadido a tus grupos')" pill class="b-card__button mb-5 w-25"
            >Añadir a mis grupos</b-button
          > -->
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
    ...mapActions(["getGroupsFromApi", "getUserGroupsFromApi", "addGroupToUser", "deleteUserGroup"]),
    async handleAddToMyGroups(groupID: string) {
      await this.addGroupToUser(groupID);
    },
    async handleDeleteGroupe(groupID: string) {
      await this.deleteUserGroup(groupID);
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

<style lang="scss" scoped>
.container__list--try {
  position: relative;
}
.b-card__button {
  min-width: fit-content;
}
.button-delete {
  background-color: inherit;
  background-color: transparent;
  color: currentColor;
  border: none;
  width: fit-content;
}
</style>
