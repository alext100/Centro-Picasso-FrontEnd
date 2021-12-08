<template>
  <div class="align-items-center container d-flex flex-column">
    <h2 class="m-4">Contactos</h2>

    <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1999.2862811147872!2d30.342809316210914!3d59.927391669967776!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x43933d4cf79bdce1%3A0xd4a24c121240d17a!2z0KbQtdC90YLRgCDQuNGB0L_QsNC90YHQutC-0LPQviDRj9C30YvQutCwIENlbnRybyBQaWNhc3Nv!5e0!3m2!1sru!2ses!4v1638910699219!5m2!1sru!2ses"
      width="600"
      height="450"
      style="border: 0"
      allowfullscreen="false"
      loading="lazy"
    ></iframe>

    <div class="container mt-5">
      <b-card>
        <b-form-group label-cols-lg="3" label="Nombre" label-for="input-default">
          <b-form-input placeholder="Nombre" id="input-default"></b-form-input>
        </b-form-group>
        <b-form-group label-cols-lg="3" label="Teléfono" label-for="input-default">
          <b-form-input placeholder="Teléfono" id="input-default"></b-form-input>
        </b-form-group>
        <b-form-group label-cols-lg="3" label="Email" label-for="input-default">
          <b-form-input placeholder="Email" id="input-default"></b-form-input>
        </b-form-group>
        <b-form-group label-cols-lg="3" label="Tema" label-for="input-default">
          <b-form-input placeholder="Tema" id="input-default"></b-form-input>
        </b-form-group>
        <b-form-textarea size="lg" id="input-message" type="textarea" trim placeholder="Mensaje" rows="6" no-resize></b-form-textarea>
        <b-button class="send-button m-3" pill>Enviar</b-button>
      </b-card>
      <div class="container font-weight-bold m-3 text-center">
        <div><em class="fas fa-map-marker m-3"></em><span>Zagorodnyi prosp., 5</span></div>
        <div><em class="fas fa-phone-alt m-3"></em><span>+7 (911) 844 26 28</span></div>
        <div><em class="fas fa-envelope m-3"></em><span>info@centropicasso.ru</span></div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "ContactosOnMainPage",
});
</script>

<style scoped>
.send-button {
  background-color: #cc1810;
  font-size: 25px;
  width: 140px;
}
</style>
