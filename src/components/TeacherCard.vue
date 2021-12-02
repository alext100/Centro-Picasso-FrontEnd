<template>
  <b-card>
    <b-card no-body class="overflow-hidden" style="max-width: 450px">
      <b-row no-gutters>
        <b-col md="5">
          <b-card-img :src="image" alt="Teacher image" class="rounded-0"></b-card-img>
        </b-col>
        <b-col md="6">
          <b-card-body :title="firstname">
            <b-card-text>{{ firstname }} {{ lastname }}</b-card-text>
            <b-button pill class="b-card__button">Cambiar</b-button>
          </b-card-body>
        </b-col>
      </b-row>
    </b-card>
  </b-card>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "TeacherCard",
  props: ["firstname", "lastname", "image"],
});
</script>

<style>
.b-card__button {
  background-color: #ffc107 !important;
}
.list-group-item-success {
  background-color: #ffc107 !important;
}
@media (min-width: 576px) {
  .container-sm,
  .container {
    max-width: 440px !important;
  }
}
@media (min-width: 768px) {
  .container-md,
  .container-sm,
  .container {
    max-width: 720px !important;
  }
}
@media (min-width: 992px) {
  .container-md,
  .container-sm,
  .container {
    max-width: 820px !important;
  }
}
</style>
