<template>
  <h1>En esta página, el alumno podrá ver mensajes de su profesor con tareas, materiales de estudio, etc.</h1>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { mapState } from "vuex";

export default defineComponent({
  name: "StudentBoard",
  computed: {
    ...mapState(["currentUser"]),
  },
});
</script>
