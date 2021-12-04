<template>
  <h1>¡Hola, {{ currentUser.username }}!</h1>

  <p>En esta página puedes formar grupos de tus alumnos. Y para cada grupo, agregue tareas o materiales de estudio.</p>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { mapState } from "vuex";

export default defineComponent({
  name: "TeacherBoard",
  computed: {
    ...mapState(["currentUser"]),
  },
  methods: {},
});
</script>
