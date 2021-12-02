<template>
  <table class="table">
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
        <td>{{ a1Price }}</td>
        <td>{{ a1Duration }}</td>
        <td><b-button pill class="b-card__button">Cambiar</b-button></td>
      </tr>
      <tr>
        <th scope="row">A2</th>
        <td>{{ a2Price }}</td>
        <td>{{ a2Duration }}</td>
        <td><b-button pill class="b-card__button">Cambiar</b-button></td>
      </tr>
      <tr>
        <th scope="row">B1</th>
        <td>{{ b1Price }}</td>
        <td>{{ b1Duration }}</td>
        <td><b-button pill class="b-card__button">Cambiar</b-button></td>
      </tr>
      <tr>
        <th scope="row">B2</th>
        <td>{{ b2Price }}</td>
        <td>{{ b2Duration }}</td>
        <td><b-button pill class="b-card__button">Cambiar</b-button></td>
      </tr>
      <tr>
        <th scope="row">C1</th>
        <td>{{ c1Price }}</td>
        <td>{{ c1Duration }}</td>
        <td><b-button pill class="b-card__button">Cambiar</b-button></td>
      </tr>
    </tbody>
  </table>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "PricesTable",
  props: [
    "a1Price",
    "a2Price",
    "b1Price",
    "b2Price",
    "c1Price",
    "a1Duration",
    "a2Duration",
    "b1Duration",
    "b2Duration",
    "c1Duration",
  ],
});
</script>
