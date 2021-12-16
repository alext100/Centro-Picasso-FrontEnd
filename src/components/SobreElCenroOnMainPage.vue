<template>
  <div class="container d-flex flex-column shadow">
    <h2 class="align-self-center">Sobre el centro</h2>
    <b-card tag="article" style="max-width: 35rem" class="mb-2 sobre__card-body" border-variant="white" align="center">
      <b-card-text>
        Centro de Lengua y Cultura Española Centro Picasso fue fundado en 2012. Desde sus inicios, uno de nuestros objetivos no solo ha sido
        enseñar español, sino también generar el interés de los estudiantes por el idioma a través de la inmersión total en la cultura española,
        lo que hace que las clases sean increíblemente emocionantes e interesantes y les ayuda a conocer todas las peculiaridades de la sociedad
        española. y Cultura.
      </b-card-text>
      <b-button class="sobre-button m-3" pill>Más info</b-button>
    </b-card>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "SobreElCentroOnMainPage",
});
</script>

<style scoped>
.sobre__card-body {
  min-width: 350px;
  font-size: 20px;
  font-family: "Tenor-sans", sans-serif;
  text-align: justify !important;
  background-color: transparent;
}
.sobre-button {
  background-color: #cc1810;
  font-size: 20px;
}
</style>
