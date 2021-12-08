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
        <td v-if="isHiddenA1Price">{{ a1Price }} rub</td>
        <b-form-input
          v-if="!isHiddenA1Price"
          placeholder="price"
          type="number"
          class="form-input-price"
          max="20000"
          v-model="a1NewPrice"
          step="100"
        ></b-form-input>
        <b-button
          v-if="!isHiddenA1Price"
          v-on:click="updatePriceInDB({ priceId: a1ID, newPrice: a1NewPrice, priceObject: a2Object })"
          pill
          class="b-card__button"
          >Guardar</b-button
        >
        <td>{{ a1Duration }}</td>
        <td>
          <b-button v-on:click="isHiddenA1Price = !isHiddenA1Price" pill class="b-card__button price-table__button-cambiar">{{
            isHiddenA1Price ? "Cambiar" : " Hide "
          }}</b-button>
        </td>
      </tr>

      <tr>
        <th scope="row">A2</th>
        <td v-if="isHiddenA2Price">{{ a2Price }} rub</td>
        <b-form-input
          v-if="!isHiddenA2Price"
          placeholder="price"
          type="number"
          class="form-input-price"
          max="20000"
          v-model="a2NewPrice"
          step="100"
        ></b-form-input>
        <b-button
          v-if="!isHiddenA2Price"
          v-on:click="updatePriceInDB({ priceId: a2ID, newPrice: a2NewPrice, priceObject: a2Object })"
          pill
          class="b-card__button"
          >Guardar</b-button
        >

        <td>{{ a2Duration }}</td>
        <td>
          <b-button v-on:click="isHiddenA2Price = !isHiddenA2Price" pill class="b-card__button price-table__button-cambiar">{{
            isHiddenA2Price ? "Cambiar" : " Hide "
          }}</b-button>
        </td>
      </tr>

      <tr>
        <th scope="row">B1</th>
        <td v-if="isHiddenB1Price">{{ b1Price }} rub</td>
        <b-form-input
          v-if="!isHiddenB1Price"
          placeholder="price"
          type="number"
          class="form-input-price"
          max="20000"
          v-model="b1NewPrice"
          step="100"
        ></b-form-input>
        <b-button
          v-if="!isHiddenB1Price"
          v-on:click="updatePriceInDB({ priceId: b1ID, newPrice: b1NewPrice, priceObject: b1Object })"
          pill
          class="b-card__button"
          >Guardar</b-button
        >
        <td>{{ b1Duration }}</td>
        <td>
          <b-button v-on:click="isHiddenB1Price = !isHiddenB1Price" pill class="b-card__button price-table__button-cambiar">{{
            isHiddenB1Price ? "Cambiar" : " Hide "
          }}</b-button>
        </td>
      </tr>

      <tr>
        <th scope="row">B2</th>
        <td v-if="isHiddenB2Price">{{ b2Price }} rub</td>
        <b-form-input
          v-if="!isHiddenB2Price"
          placeholder="price"
          type="number"
          class="form-input-price"
          max="20000"
          v-model="b2NewPrice"
          step="100"
        ></b-form-input>
        <b-button
          v-if="!isHiddenB2Price"
          v-on:click="updatePriceInDB({ priceId: b2ID, newPrice: b2NewPrice, priceObject: b2Object })"
          pill
          class="b-card__button"
          >Guardar</b-button
        >
        <td>{{ b2Duration }}</td>
        <td>
          <b-button v-on:click="isHiddenB2Price = !isHiddenB2Price" pill class="b-card__button price-table__button-cambiar">{{
            isHiddenB2Price ? "Cambiar" : " Hide "
          }}</b-button>
        </td>
      </tr>

      <tr>
        <th scope="row">C1</th>
        <td v-if="isHiddenC1Price">{{ c1Price }} rub</td>
        <b-form-input
          v-if="!isHiddenC1Price"
          placeholder="price"
          type="number"
          class="form-input-price"
          max="20000"
          v-model="c1NewPrice"
          step="100"
        ></b-form-input>
        <b-button
          v-if="!isHiddenC1Price"
          v-on:click="updatePriceInDB({ priceId: c1ID, newPrice: c1NewPrice, priceObject: c1Object })"
          pill
          class="b-card__button"
          >Guardar</b-button
        >
        <td>{{ c1Duration }}</td>
        <td>
          <b-button v-on:click="isHiddenC1Price = !isHiddenC1Price" pill class="b-card__button price-table__button-cambiar">{{
            isHiddenC1Price ? "Cambiar" : " Hide "
          }}</b-button>
        </td>
      </tr>

      <h2>Curso individual</h2>
      <tr>
        <th scope="row">Para una persona</th>
        <td v-if="isHiddenP1Price">{{ personalPrice1 }} rub</td>
        <b-form-input
          v-if="!isHiddenP1Price"
          placeholder="price"
          type="number"
          class="form-input-price"
          max="20000"
          v-model="p1NewPrice"
          step="100"
        ></b-form-input>
        <b-button
          v-if="!isHiddenP1Price"
          v-on:click="updatePriceInDB({ priceId: personalId1, newPrice: p1NewPrice, priceObject: personalObject1 })"
          pill
          class="b-card__button"
          >Guardar</b-button
        >
        <td>{{ personalDuration1 }}</td>
        <td>
          <b-button v-on:click="isHiddenP1Price = !isHiddenP1Price" pill class="b-card__button price-table__button-cambiar">{{
            isHiddenP1Price ? "Cambiar" : " Hide "
          }}</b-button>
        </td>
      </tr>

      <tr>
        <th scope="row">Para dos personas</th>
        <td v-if="isHiddenP2Price">{{ personalPrice2 }} rub</td>
        <b-form-input
          v-if="!isHiddenP2Price"
          placeholder="price"
          type="number"
          class="form-input-price"
          max="20000"
          v-model="p2NewPrice"
          step="100"
        ></b-form-input>
        <b-button
          v-if="!isHiddenP2Price"
          v-on:click="updatePriceInDB({ priceId: personalId2, newPrice: p2NewPrice, priceObject: personalObject2 })"
          pill
          class="b-card__button"
          >Guardar</b-button
        >
        <td>{{ personalDuration2 }}</td>
        <td>
          <b-button v-on:click="isHiddenP2Price = !isHiddenP2Price" pill class="b-card__button price-table__button-cambiar">{{
            isHiddenP2Price ? "Cambiar" : " Hide "
          }}</b-button>
        </td>
      </tr>

      <tr>
        <th scope="row">Para tres personas</th>
        <td v-if="isHiddenP3Price">{{ personalPrice3 }} rub</td>
        <b-form-input
          v-if="!isHiddenP3Price"
          placeholder="price"
          type="number"
          class="form-input-price"
          max="20000"
          v-model="p3NewPrice"
          step="100"
        ></b-form-input>
        <b-button
          v-if="!isHiddenP3Price"
          v-on:click="updatePriceInDB({ priceId: personalId3, newPrice: p3NewPrice, priceObject: personalObject3 })"
          pill
          class="b-card__button"
          >Guardar</b-button
        >

        <td>{{ personalDuration3 }}</td>
        <td>
          <b-button v-on:click="isHiddenP3Price = !isHiddenP3Price" pill class="b-card__button price-table__button-cambiar">{{
            isHiddenP3Price ? "Cambiar" : " Hide "
          }}</b-button>
        </td>
      </tr>

      <tr>
        <th scope="row">Para cuatro personas</th>
        <td v-if="isHiddenP4Price">{{ personalPrice4 }} rub</td>
        <b-form-input
          v-if="!isHiddenP4Price"
          placeholder="price"
          type="number"
          class="form-input-price"
          max="20000"
          v-model="p4NewPrice"
          step="100"
        ></b-form-input>
        <b-button
          v-if="!isHiddenP4Price"
          v-on:click="updatePriceInDB({ priceId: personalId4, newPrice: p4NewPrice, priceObject: personalObject4 })"
          pill
          class="b-card__button"
          >Guardar</b-button
        >
        <td>{{ personalDuration4 }}</td>
        <td>
          <b-button v-on:click="isHiddenP4Price = !isHiddenP4Price" pill class="b-card__button price-table__button-cambiar">{{
            isHiddenP4Price ? "Cambiar" : " Hide "
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
    "personalPrice1",
    "personalPrice2",
    "personalPrice3",
    "personalPrice4",
    "personalDuration1",
    "personalDuration2",
    "personalDuration3",
    "personalDuration4",
    "a1ID",
    "a2ID",
    "b1ID",
    "b2ID",
    "c1ID",
    "personalId1",
    "personalId2",
    "personalId3",
    "personalId4",
    "a1Object",
    "a2Object",
    "b1Object",
    "b2Object",
    "c1Object",
    "personalObject1",
    "personalObject2",
    "personalObject3",
    "personalObject4",
  ],
  data() {
    return {
      isHiddenA1Price: true,
      isHiddenA2Price: true,
      isHiddenB1Price: true,
      isHiddenB2Price: true,
      isHiddenC1Price: true,
      isHiddenP1Price: true,
      isHiddenP2Price: true,
      isHiddenP3Price: true,
      isHiddenP4Price: true,
      a1NewPrice: "",
      a2NewPrice: "",
      b1NewPrice: "",
      b2NewPrice: "",
      c1NewPrice: "",
      p1NewPrice: "",
      p2NewPrice: "",
      p3NewPrice: "",
      p4NewPrice: "",
    };
  },

  computed: {
    ...mapState(["prices"]),
  },
  methods: {
    ...mapActions(["getPricesFromApi", "updatePriceInDB"]),
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

.price-table__button-cambiar {
  width: 90px;
}
</style>
