<template>
  <div class="align-items-center container d-flex flex-column">
    <h2 class="d-flex justify-content-around m-3">Porque nosotros?</h2>
    <p class="d-flex justify-content-around">
      "Creer que por ser nativo puedes dar clase es como pensar que puedes ser cocinero porque comes cada día"
    </p>

    <b-card-group>
      <b-card border-variant="light" class="m-4 porque-nosotros-card">
        <b-card-header class="text-center" header-class="porque-nosotros-card-header" border-variant="light" header-bg-variant="transparent"
          >Profesores</b-card-header
        >
        <b-card-text
          >Abordamos con cuidado el tema de la elección de profesores para nuestro centro, por lo que nuestros profesores no son solo hablantes
          nativos, sino especialistas certificados en el campo de la enseñanza del español como lengua extranjera.</b-card-text
        >
      </b-card>
      <b-card border-variant="light" class="m-4 porque-nosotros-card">
        <b-card-header class="text-center" header-class="porque-nosotros-card-header" border-variant="light" header-bg-variant="transparent"
          >Castellano</b-card-header
        >
        <b-card-text
          >Nuestro principal objetivo es preservar la pureza de la lengua que se habla en la propia España, por ello todos nuestros profesores
          vinieron a Rusia para enseñarte la lengua castellana de referencia.</b-card-text
        >
      </b-card>
    </b-card-group>

    <b-card-group>
      <b-card border-variant="light" class="m-4 porque-nosotros-card porque-nosotros-card--groups">
        <b-card-header class="text-center" header-class="porque-nosotros-card-header" border-variant="light" header-bg-variant="transparent"
          >Grupos pequeños</b-card-header
        >
        <b-card-text
          >No abrimos grupos grandes, por lo que los profesores tienen la oportunidad de prestar atención a cada uno de los alumnos.</b-card-text
        >
      </b-card>
    </b-card-group>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { mapActions, mapState } from "vuex";

export default defineComponent({
  name: "PorqueNosotros",
  computed: {
    ...mapState([]),
  },
  methods: {
    ...mapActions([]),
  },
});
</script>

<style lang="scss">
.porque-nosotros-card {
  font-size: 20px;
  background-color: transparent;
  font-family: "Tenor-sans", sans-serif;
  text-align: justify;
}
.porque-nosotros-card-header {
  color: #cc1810;
}
.porque-nosotros-card--groups {
  max-width: 400px;
}
</style>
