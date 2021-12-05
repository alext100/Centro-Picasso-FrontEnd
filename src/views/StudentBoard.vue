<template>
  <h1 class="m-3">¡Hola {{ currentUser.firstname }}! Estás en grupo {{ currentGroup.groupname }}</h1>

  <GroupMessagesVue />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { mapActions, mapState } from "vuex";
import GroupMessagesVue from "@/components/GroupMessages.vue";

export default defineComponent({
  components: {
    GroupMessagesVue,
  },
  name: "StudentBoard",
  computed: {
    ...mapState(["currentUser", "currentGroup"]),
  },
  methods: {
    ...mapActions(["getGroupById"]),
  },
  mounted() {
    this.getGroupById(this.currentUser.groups[0]);
  },
});
</script>
