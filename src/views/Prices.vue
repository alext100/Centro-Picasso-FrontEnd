<template>
  <div class="prices container table__text">
    <h1>Precios</h1>
    <h2 class="mt-3">Cursos grupales</h2>
    <table class="table" aria-label="precios de cursos grupales">
      <thead>
        <tr>
          <th scope="col">Nivel</th>
          <th scope="col">Precio</th>
          <th scope="col">Duración</th>
          <th scope="col"></th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row">A1</th>
          <td>{{ prices[0]?.price }} rub/mes</td>
          <td>{{ prices[0]?.duration }}</td>
          <td></td>
        </tr>

        <tr>
          <th scope="row">A2</th>
          <td>{{ prices[1]?.price }} rub/mes</td>
          <td>{{ prices[1]?.duration }}</td>
          <td></td>
        </tr>

        <tr>
          <th scope="row">B1</th>
          <td>{{ prices[2]?.price }} rub/mes</td>
          <td>{{ prices[2]?.duration }}</td>
          <td></td>
        </tr>

        <tr>
          <th scope="row">B2</th>
          <td>{{ prices[3]?.price }} rub/mes</td>
          <td>{{ prices[3]?.duration }}</td>
          <td></td>
        </tr>

        <tr>
          <th scope="row">C1</th>
          <td>{{ prices[4]?.price }} rub/mes</td>
          <td>{{ prices[4]?.duration }}</td>
          <td></td>
        </tr>
        <h2 class="mt-5">Curso individual</h2>
        <tr>
          <th scope="row">Para una persona</th>
          <td>{{ prices[5]?.price }} rub</td>
          <td>{{ prices[5]?.duration }}</td>
          <td></td>
        </tr>

        <tr>
          <th scope="row">Para dos personas</th>
          <td>{{ prices[6]?.price }} rub</td>
          <td>{{ prices[6]?.duration }}</td>
          <td></td>
        </tr>

        <tr>
          <th scope="row">Para tres personas</th>
          <td>{{ prices[7]?.price }} rub</td>
          <td>{{ prices[7]?.duration }}</td>
          <td></td>
        </tr>

        <tr>
          <th scope="row">Para cuatro personas</th>
          <td>{{ prices[8]?.price }} rub</td>
          <td>{{ prices[8]?.duration }}</td>
          <td></td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { mapActions, mapState } from "vuex";

export default defineComponent({
  name: "PricesTable",

  computed: {
    ...mapState(["prices"]),
  },
  methods: {
    ...mapActions(["getPricesFromApi"]),
  },
  mounted() {
    this.getPricesFromApi();
  },
});
</script>

<style>
.table__text {
  font-family: "Montserrat", sans-serif;
}
</style>
