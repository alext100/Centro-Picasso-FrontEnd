<template>
  <div class="align-items-center container d-flex flex-column">
    <h1>Sobre el centro</h1>

    <transition name="slide-fade" appear>
      <b-card border-variant="white" class="m-4 porque-nosotros-card" style="min-width: 300px">
        <b-card-header
          style="font-size: 30px"
          class="text-center"
          header-class="porque-nosotros-card-header"
          border-variant="light"
          header-bg-variant="transparent"
          >Historia</b-card-header
        >
        <b-card-text>
          Desde sus inicios, uno de nuestros objetivos ha sido no solo enseñar español, sino también generar el interés de los estudiantes por el
          idioma a través de la inmersión total en la cultura española, lo que hace que las clases sean increíblemente emocionantes e
          interesantes y les ayuda a conocer todas las peculiaridades de la sociedad española. y Cultura.</b-card-text
        >
      </b-card>
    </transition>
    <transition name="slide-fade-right" appear>
      <b-card border-variant="white" class="m-4 porque-nosotros-card" style="min-width: 300px">
        <b-card-header
          style="font-size: 30px"
          class="text-center"
          header-class="porque-nosotros-card-header"
          border-variant="light"
          header-bg-variant="transparent"
          >Objetivo</b-card-header
        >
        <b-card-text
          >Nuestro principal objetivo es preservar la pureza de la lengua que se habla en la propia España, por ello todos nuestros profesores
          vinieron a Rusia para enseñarte la lengua castellana de referencia.</b-card-text
        >
      </b-card>
    </transition>

    <transition name="slide-fade" appear>
      <b-card border-variant="white" class="m-4 porque-nosotros-card" style="min-width: 300px">
        <b-card-header
          style="font-size: 30px"
          class="text-center"
          header-class="porque-nosotros-card-header"
          border-variant="light"
          header-bg-variant="transparent"
          >Motivación</b-card-header
        >
        <b-card-text>
          Centro Picasso cree que la mejor manera de aprender un idioma es aprender en paralelo la cultura, la historia y la forma de pensar de
          la gente del país del idioma de destino. Realizamos periódicamente eventos culturales donde los alumnos de nuestro centro pueden poner
          en práctica sus conocimientos y conocer a los españoles, su cultura y forma de vida.</b-card-text
        >
      </b-card>
    </transition>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "About",
});
</script>

<style scoped>
.slide-fade-enter-active {
  transition: all 1.3s ease-in-out;
}

.slide-fade-leave-active {
  transition: all 1.8s cubic-bezier(4, 1.5, 1.8, 4);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateX(-100px);
  opacity: 0;
}
</style>
