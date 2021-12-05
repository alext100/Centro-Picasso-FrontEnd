<template>
  <div class="container">
    <h1>Group {{ currentGroup.groupname }}</h1>

    <div class="container">
      <h2>Miembros del grupo:</h2>
      <ul class="list-group-item-secondary">
        <li v-for="userFromGroup in loadedUsersFromGroup || []" :key="userFromGroup" class="container__list">
          <p>{{ userFromGroup.firstname }} {{ userFromGroup.lastname }}</p>
        </li>
      </ul>
    </div>

    <div class="container">
      <h2>Mensajes del grupo:</h2>
      <ul class="list-group-item-secondary">
        <li v-for="message in currentGroup.messages || []" :key="message" class="container__list">
          <p>{{ message }}</p>
        </li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { mapActions, mapState } from "vuex";
import { UserModel } from "@/types/interfaces";

export default defineComponent({
  name: "GroupPage",
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
