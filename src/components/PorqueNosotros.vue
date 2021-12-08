<template>
  <div class="align-items-center container d-flex flex-column">
    <transition name="slide-fade-header" appear>
      <h2 class="d-flex justify-content-around m-3">¿Por qué nosotros?</h2>
    </transition>
    <transition name="slide-fade-header" appear>
      <p class="d-flex justify-content-around">
        "Creer que por ser nativo puedes dar clase es como pensar que puedes ser cocinero porque comes cada día"
      </p>
    </transition>
    <b-card-group>
      <transition name="slide-fade" appear>
        <b-card border-variant="light" class="m-4 porque-nosotros-card" style="min-width: 300px">
          <b-card-header class="text-center" header-class="porque-nosotros-card-header" border-variant="light" header-bg-variant="transparent"
            >Profesores</b-card-header
          >
          <b-card-text
            >Abordamos con cuidado el tema de la elección de profesores para nuestro centro, por lo que nuestros profesores no son solo hablantes
            nativos, sino especialistas certificados en el campo de la enseñanza del español como lengua extranjera.</b-card-text
          >
        </b-card>
      </transition>
      <transition name="slide-fade-right" appear>
        <b-card border-variant="light" class="m-4 porque-nosotros-card" style="min-width: 300px">
          <b-card-header class="text-center" header-class="porque-nosotros-card-header" border-variant="light" header-bg-variant="transparent"
            >Castellano</b-card-header
          >
          <b-card-text
            >Nuestro principal objetivo es preservar la pureza de la lengua que se habla en la propia España, por ello todos nuestros profesores
            vinieron a Rusia para enseñarte la lengua castellana de referencia.</b-card-text
          >
        </b-card>
      </transition>
    </b-card-group>

    <transition name="slide-fade-header" appear>
      <b-card-group>
        <b-card border-variant="light" class="m-4 porque-nosotros-card porque-nosotros-card--groups" style="min-width: 300px">
          <b-card-header class="text-center" header-class="porque-nosotros-card-header" border-variant="light" header-bg-variant="transparent"
            >Grupos pequeños</b-card-header
          >
          <b-card-text
            >No abrimos grupos grandes, por lo que los profesores tienen la oportunidad de prestar atención a cada uno de los
            alumnos.</b-card-text
          >
        </b-card>
      </b-card-group>
    </transition>
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

.slide-fade-enter-active {
  transition: all 1.3s ease-in-out;
}

.slide-fade-leave-active {
  transition: all 1.8s cubic-bezier(4, 1.5, 1.8, 4);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateX(-90px);
  opacity: 0;
}
.slide-fade-right-enter-active {
  transition: all 1.3s ease-in-out;
}
.slide-fade-right-enter-from,
.slide-fade-right-leave-to {
  transform: translateX(90px);
  opacity: 0;
}

.slide-fade-header-enter-active {
  transition: all 1.3s ease-in-out;
}
.slide-fade-header-enter-from,
.slide-fade-header-leave-to {
  transform: translateY(90px);
  opacity: 0;
}
</style>
