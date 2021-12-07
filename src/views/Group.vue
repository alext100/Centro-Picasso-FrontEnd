<template>
  <div class="container">
    <h1>Grupo {{ currentGroup.groupname }}</h1>

    <b-card>
      <b-tabs active-nav-item-class="m-2 h-3 list-group-item-success" content-class="mt-3" justified>
        <b-tab title="Mensajes del grupo" active><GroupInputMessageVue /> <MessagesVue /></b-tab>
        <b-tab title="Miembros del grupo"><GroupMembersVue /></b-tab>
        <b-tab title="Añadir un usuario al grupo"><AddUserVue /></b-tab>
      </b-tabs>
    </b-card>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { mapState } from "vuex";
import MessagesVue from "@/components/GroupMessages.vue";
import GroupMembersVue from "@/components/GroupMembers.vue";
import GroupInputMessageVue from "@/components/GroupInputMessage.vue";
import AddUserVue from "@/components/AddUser.vue";

export default defineComponent({
  name: "GroupPage",
  components: {
    MessagesVue,
    GroupMembersVue,
    GroupInputMessageVue,
    AddUserVue,
  },
  computed: {
    ...mapState(["currentGroup", "loadedUsersFromGroup"]),
  },
});
</script>
