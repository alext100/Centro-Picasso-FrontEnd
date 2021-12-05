<template>
  <div class="container">
    <h2 class="mb-4">Mensajes del grupo:</h2>
    <ul class="list-group-item-secondary reverseorder">
      <li v-for="message in currentGroup.messages || []" :key="message" class="container__list">
        <b-card>
          <div class="mt-3">
            <b-card-group deck>
              <b-card bg-variant="light" :header="new Date(message.time).toLocaleString()" class="text-center">
                <b-card-text>{{ message.message }}</b-card-text>
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
import { mapState } from "vuex";

export default defineComponent({
  name: "Messages",
  computed: {
    ...mapState(["currentGroup"]),
  },
});
</script>

<style scoped>
.reverseorder {
  display: flex;
  flex-direction: column-reverse;
}
</style>
