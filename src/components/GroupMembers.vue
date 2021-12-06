<template>
  <div class="container">
    <h2 class="mb-4">Miembros del grupo:</h2>
    <ul class="list-group-item-secondary">
      <li v-for="userFromGroup in loadedUsersFromGroup || []" :key="userFromGroup" class="container__list">
        <b-card>
          <div class="mt-3">
            <b-card-group deck>
              <b-card bg-variant="light" class="text-center">
                <router-link :to="'/online-lesson/' + userFromGroup.id">
                  <b-card-text>{{ userFromGroup.firstname }} {{ userFromGroup.lastname }}</b-card-text>
                </router-link>
              </b-card>
            </b-card-group>
          </div>
        </b-card>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { mapActions, mapState } from "vuex";
import { UserModel } from "@/types/interfaces";

export default defineComponent({
  name: "GroupMembers",

  computed: {
    ...mapState(["currentGroup", "loadedUsersFromGroup"]),
  },

  methods: {
    ...mapActions(["getGroupById", "getUserById", "deleteLoadedUsers"]),
  },

  async mounted() {
    await this.getGroupById(this.$route.params.id);
    const groupMembers = this.currentGroup.members;
    await groupMembers.forEach((member: UserModel) => this.getUserById(member));
    this.deleteLoadedUsers();
  },
});
</script>
