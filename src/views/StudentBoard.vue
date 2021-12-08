<template>
  <div class="container">
    <h1 class="m-3">¡Hola {{ loadedOneUserById.firstname }}! Estás en el grupo {{ currentGroup.groupname }}</h1>
    <b-card-group>
      <b-card>
        <b-tabs active-nav-item-class="m-2 h-3 list-group-item-success" content-class="mt-3" justified>
          <b-tab title="Apuntes" active><StudentErrorsVue /></b-tab>
          <b-tab title="Mensajes"><GroupMessagesVue /></b-tab>
        </b-tabs>
      </b-card>
    </b-card-group>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { mapActions, mapState } from "vuex";
import GroupMessagesVue from "@/components/GroupMessages.vue";
import StudentErrorsVue from "@/components/StudentErrors.vue";

export default defineComponent({
  components: {
    GroupMessagesVue,
    StudentErrorsVue,
  },
  name: "StudentBoard",
  computed: {
    ...mapState(["currentUser", "currentGroup", "loadedOneUserById"]),
  },
  methods: {
    ...mapActions(["getGroupById", "getOneUserById"]),
  },
  mounted() {
    this.getGroupById(this.currentUser.groups[0]);
    this.getOneUserById(this.$route.params.id);
  },
});
</script>
