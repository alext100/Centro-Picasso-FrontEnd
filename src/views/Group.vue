<template>
  <div class="container">
    <h1>Grupo {{ currentGroup.groupname }}</h1>

    <GroupMembersVue />

    <GroupInputMessageVue />

    <MessagesVue />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { mapState } from "vuex";
import MessagesVue from "@/components/GroupMessages.vue";
import GroupMembersVue from "@/components/GroupMembers.vue";
import GroupInputMessageVue from "@/components/GroupInputMessage.vue";

export default defineComponent({
  name: "GroupPage",
  components: {
    MessagesVue,
    GroupMembersVue,
    GroupInputMessageVue,
  },
  computed: {
    ...mapState(["currentGroup", "loadedUsersFromGroup"]),
  },
});
</script>
