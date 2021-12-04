<template>
  <h1>En esta página habrá formularios de google para inscribirse en cursos.</h1>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { mapState } from "vuex";

export default defineComponent({
  name: "Inscribirse",
  computed: {
    ...mapState(["currentUser"]),
  },
});
</script>
