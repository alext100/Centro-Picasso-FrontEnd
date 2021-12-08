<template>
  <div class="align-items-center container d-flex flex-column">
    <h2>Cursos</h2>
    <b-card-group class="ml-5">
      <b-card
        title="Cursos grupales"
        img-top
        tag="article"
        style="max-width: 20rem"
        class="mb-2 card-body"
        border-variant="white"
        align="center"
        title-tag="h3"
      >
        <b-card-img
          alt="Imagen cursos grupales"
          class="card-body--image"
          src="https://firebasestorage.googleapis.com/v0/b/qqqqqqqqqqqq-f57b0.appspot.com/o/grupo.webp?alt=media&token=fe25304f-effa-4d28-9ae4-57eba0b3b214"
        ></b-card-img>
      </b-card>
      <b-card
        title="Curso individual"
        tag="article"
        style="max-width: 20rem"
        class="mb-2 card-body"
        border-variant="white"
        align="center"
        title-tag="h3"
      >
        <b-card-img
          alt="Imagen curso individual"
          class="card-body--image"
          src="https://firebasestorage.googleapis.com/v0/b/qqqqqqqqqqqq-f57b0.appspot.com/o/indiv.webp?alt=media&token=3b37f3a3-9e93-4d1c-9ca0-0d3f77bfcad6"
        ></b-card-img>
      </b-card>
    </b-card-group>
    <b-card-group class="mr-5">
      <b-card
        title="Clubs"
        img-top
        tag="article"
        style="max-width: 20rem"
        class="mb-2 card-body"
        border-variant="white"
        align="center"
        title-tag="h3"
      >
        <b-card-img
          alt="Imagen clubs"
          class="card-body--image"
          src="https://firebasestorage.googleapis.com/v0/b/qqqqqqqqqqqq-f57b0.appspot.com/o/convers.webp?alt=media&token=4a0be0fd-1d8e-4800-9795-608fbd638b70"
        >
        </b-card-img>
      </b-card>
    </b-card-group>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "CursosOnMainPage",
});
</script>

<style scoped>
.card-body {
  min-width: 300px;
  transition: all 0.3s ease-in-out 0s;
  background-color: transparent;
  color: #cc1810;
}

.card-body--image:hover {
  transform: scale(1.3);
  transition: all 0.3s ease-in-out 0s;
}
</style>
