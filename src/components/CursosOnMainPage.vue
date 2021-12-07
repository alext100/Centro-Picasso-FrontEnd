<template>
  <div class="align-items-center container d-flex flex-column">
    <h2>Cursos</h2>
    <b-card-group>
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
          alt="Image"
          class="card-body--image"
          src="http://centropicasso.ru/wp-content/uploads/2019/07/%D0%B3%D1%80%D1%83%D0%BF%D0%BF.png"
        ></b-card-img>
      </b-card>
      <b-card title="Curso individual" tag="article" style="max-width: 20rem" class="mb-2 card-body" border-variant="white" align="center">
        <b-card-img
          alt="Image"
          class="card-body--image"
          src="http://centropicasso.ru/wp-content/uploads/2019/07/%D0%B8%D0%BD%D0%B4.png"
        ></b-card-img>
      </b-card>
    </b-card-group>
    <b-card-group>
      <b-card title="Clubs" img-top tag="article" style="max-width: 20rem" class="mb-2 card-body" border-variant="white" align="center">
        <b-card-img alt="Image" class="card-body--image" src="http://centropicasso.ru/wp-content/uploads/2019/07/%D1%80%D0%B0%D0%B7%D0%B3.png">
        </b-card-img>
      </b-card>
    </b-card-group>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { mapActions, mapState } from "vuex";

export default defineComponent({
  name: "CursosOnMainPage",
  computed: {
    ...mapState([]),
  },
  methods: {
    ...mapActions([]),
  },
});
</script>

<style scoped>
.card-body {
  min-width: 300px;
  transition: all 0.3s ease-in-out 0s;
  background-color: transparent;
  color: #cc1810;
}
/* .card-body:hover {
  cursor: default;
  transform: scale(1.2);
  transition: all 0.3s ease-in-out 0s;
} */

.card-body--image {
}
.card-body--image:hover {
  transform: scale(1.3);
  transition: all 0.3s ease-in-out 0s;
}
</style>
