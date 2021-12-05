<template>
  <div class="container">
    <h2>Mensajes del grupo:</h2>
    <ul class="list-group-item-secondary">
      <li v-for="message in currentGroup.messages || []" :key="message" class="container__list">
        <p>{{ message }}</p>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { mapState } from "vuex";

export default defineComponent({
  name: "Messages",
  computed: {
    ...mapState(["currentGroup"]),
  },
});
</script>
