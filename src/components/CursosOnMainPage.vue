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
      >
        <b-card-img
          alt="Imagen cursos grupales"
          class="card-body--image"
          src="https://firebasestorage.googleapis.com/v0/b/qqqqqqqqqqqq-f57b0.appspot.com/o/grupo.png?alt=media&token=4d7bc27c-6514-44a0-b77d-16ed8ec01fce"
        ></b-card-img>
      </b-card>
      <b-card title="Curso individual" tag="article" style="max-width: 20rem" class="mb-2 card-body" border-variant="white" align="center">
        <b-card-img
          alt="Imagen curso individual"
          class="card-body--image"
          src="https://firebasestorage.googleapis.com/v0/b/qqqqqqqqqqqq-f57b0.appspot.com/o/indiv.png?alt=media&token=2ae71dc5-8b09-4622-9b5e-283e05ebd61d"
        ></b-card-img>
      </b-card>
    </b-card-group>
    <b-card-group class="mr-5">
      <b-card title="Clubs" img-top tag="article" style="max-width: 20rem" class="mb-2 card-body" border-variant="white" align="center">
        <b-card-img
          alt="Imagen clubs"
          class="card-body--image"
          src="https://firebasestorage.googleapis.com/v0/b/qqqqqqqqqqqq-f57b0.appspot.com/o/convers.png?alt=media&token=d0964c17-ea95-4cb8-9ed5-2187d326cc5f"
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
