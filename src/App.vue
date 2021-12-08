<template>
  <Header />
  <router-view v-slot="{ Component }">
    <component :is="Component" />
  </router-view>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Header from "@/components/Header.vue";

export default defineComponent({
  name: "app",
  components: {
    Header,
  },
});
</script>

<style lang="scss">
* {
  margin: 0;
}
</style>
