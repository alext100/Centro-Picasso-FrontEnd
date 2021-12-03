<template>
  <div class="container">
    <h1>¡Hola, {{ currentUser.username }}!</h1>
    <p>
      Aquí puedes cambiar la información sobre los profesores, sus derechos de acceso. También los precios de los cursos que serán
      visibles para los visitantes del sitio en la página de Precios. Y también puedes crear un horario de lecciones que solo los
      profesores verán.
    </p>
    <h2>Profesores</h2>
    <ul class="list-group-item-success">
      <li v-for="teacher in teachers || []" :key="teacher" class="container__list">
        <teacher-card :lastname="teacher.lastname" :image="teacher.image" :firstname="teacher.firstname" />
      </li>
    </ul>
    <h2>Precios</h2>
    <prices-table
      :a1-price="prices[0]?.price"
      :a1-duration="prices[0]?.duration"
      :a2-price="prices[1]?.price"
      :a2-duration="prices[1]?.duration"
      :b1-price="prices[2]?.price"
      :b1-duration="prices[2]?.duration"
      :b2-price="prices[3]?.price"
      :b2-duration="prices[3]?.duration"
      :c1-price="prices[4]?.price"
      :c1-duration="prices[4]?.duration"
      :personal-price1="prices[5]?.price"
      :personal-price2="prices[6]?.price"
      :personal-price3="prices[7]?.price"
      :personal-price4="prices[8]?.price"
      :personal-duration1="prices[5]?.duration"
      :personal-duration2="prices[6]?.duration"
      :personal-duration3="prices[7]?.duration"
      :personal-duration4="prices[8]?.duration"
      :a1-i-d="prices[0]?.id"
      :a2-i-d="prices[1]?.id"
      :b1-i-d="prices[2]?.id"
      :b2-i-d="prices[3]?.id"
      :c1-i-d="prices[4]?.id"
      :personal-id1="prices[5]?.id"
      :personal-id2="prices[6]?.id"
      :personal-id3="prices[7]?.id"
      :personal-id4="prices[8]?.id"
      :a1-object="prices[0]"
      :a2-object="prices[1]"
      :b1-object="prices[2]"
      :b2-object="prices[3]"
      :c1-object="prices[4]"
      :personal-object1="prices[5]"
      :personal-object2="prices[6]"
      :personal-object3="prices[7]"
      :personal-object4="prices[8]"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { mapActions, mapState } from "vuex";
import TeacherCard from "@/components/TeacherCard.vue";
import PricesTable from "@/components/PricesTable.vue";

export default defineComponent({
  name: "Admin",
  components: { TeacherCard, PricesTable },

  computed: {
    ...mapState(["teachers", "currentUser", "prices"]),
  },
  methods: {
    ...mapActions(["getTeachersFromApi", "getPricesFromApi"]),
  },
  mounted() {
    this.getTeachersFromApi();
    this.getPricesFromApi();
  },
  data() {
    return {
      user: "",
    };
  },
});
</script>

<style>
.container__list {
  list-style: none;
}
</style>
