<template>
  <div class="home align-items-center d-flex flex-column justify-content-center">
    <p class="home_text">Nuevos grupos</p>
    <button class="home_button-more-info btn mt-2">Más info</button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Home",
  components: {},
});
</script>

<style>
button.home_button-more-info {
  background-color: #cc1810;
  color: white;
  border-radius: 20px;
  width: 150px;
}
.home {
  height: 300px;
  background-color: #ffad00;
}
.home_text {
  font-family: "Montserrat", sans-serif;
  text-transform: uppercase;
  font-size: 30px;
}
@media screen and (max-width: 991px) {
  .home {
    max-height: 220px;
  }
}
@media screen and (max-width: 768px) {
  .home {
    max-height: 150px;
  }
}
</style>
