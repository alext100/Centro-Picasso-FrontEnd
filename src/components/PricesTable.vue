<template>
  <table class="table" aria-label="precios de cursos">
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
        <td v-if="isHiddenA1Price">{{ a1Price }}</td>
        <b-form-input
          v-if="!isHiddenA1Price"
          placeholder="price"
          type="number"
          class="form-input-price"
          max="20000"
        ></b-form-input>
        <td>{{ a1Duration }}</td>
        <td>
          <b-button v-on:click="isHiddenA1Price = !isHiddenA1Price" pill class="b-card__button w-50">{{
            isHiddenA1Price ? "Cambiar" : "Guardar"
          }}</b-button>
        </td>
      </tr>

      <tr>
        <th scope="row">A2</th>
        <td v-if="isHiddenA2Price">{{ a2Price }}</td>
        <b-form-input
          v-if="!isHiddenA2Price"
          placeholder="price"
          type="number"
          class="form-input-price"
          max="20000"
        ></b-form-input>
        <b-button
          v-if="!isHiddenA2Price"
          v-on:click="updatePriceInDB({ priceID: a2ID, price: a2Price })"
          pill
          class="b-card__button"
          >Guardar</b-button
        >

        <td>{{ a2Duration }}</td>
        <td>
          <b-button v-on:click="isHiddenA2Price = !isHiddenA2Price" pill class="b-card__button w-50">{{
            isHiddenA2Price ? "Cambiar" : " Hide "
          }}</b-button>
        </td>
      </tr>

      <tr>
        <th scope="row">B1</th>
        <td v-if="isHiddenB1Price">{{ b1Price }}</td>
        <b-form-input
          v-if="!isHiddenB1Price"
          placeholder="price"
          type="number"
          class="form-input-price"
          max="20000"
        ></b-form-input>
        <td>{{ b1Duration }}</td>
        <td>
          <b-button v-on:click="isHiddenB1Price = !isHiddenB1Price" pill class="b-card__button w-50">{{
            isHiddenB1Price ? "Cambiar" : "Guardar"
          }}</b-button>
        </td>
      </tr>

      <tr>
        <th scope="row">B2</th>
        <td v-if="isHiddenB2Price">{{ b2Price }}</td>
        <b-form-input
          v-if="!isHiddenB2Price"
          placeholder="price"
          type="number"
          class="form-input-price"
          max="20000"
        ></b-form-input>
        <td>{{ b2Duration }}</td>
        <td>
          <b-button v-on:click="isHiddenB2Price = !isHiddenB2Price" pill class="b-card__button w-50">{{
            isHiddenB2Price ? "Cambiar" : "Guardar"
          }}</b-button>
        </td>
      </tr>

      <tr>
        <th scope="row">C1</th>
        <td v-if="isHiddenC1Price">{{ c1Price }}</td>
        <b-form-input
          v-if="!isHiddenC1Price"
          placeholder="price"
          type="number"
          class="form-input-price"
          max="20000"
        ></b-form-input>
        <td>{{ c1Duration }}</td>
        <td>
          <b-button v-on:click="isHiddenC1Price = !isHiddenC1Price" pill class="b-card__button w-50">{{
            isHiddenC1Price ? "Cambiar" : "Guardar"
          }}</b-button>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { mapActions, mapState } from "vuex";

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
    "a1ID",
    "a2ID",
  ],
  data() {
    return {
      isHiddenA1Price: true,
      isHiddenA2Price: true,
      isHiddenB1Price: true,
      isHiddenB2Price: true,
      isHiddenC1Price: true,
    };
  },

  computed: {
    ...mapState(["prices", "a1Price"]),
  },
  methods: {
    ...mapActions(["updatePriceInDB", "updatePriceInDB"]),
  },
  mounted() {
    this.updatePriceInDB({ priceID: this.a1ID, price: this.a1Price });
  },
});
</script>

<style scoped>
.form-input-price {
  width: 90px;
  display: inline-block;
}

.form-input-duration {
  margin-left: 100px;
  margin-right: 100px;
  width: 90px;
  display: inline-block;
}
</style>
