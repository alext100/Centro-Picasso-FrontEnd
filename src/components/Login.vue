/*
<template>
  <div class="container-sm login-form d-flex flex-column mt-5">
    <b-card class="mb-1">
      <b-form action @submit.prevent="login">
        <div>
          <b-form-group
            id="username"
            description="Tu username aquí, por favor"
            label="Username"
            label-for="input-username"
            valid-feedback="¡Gracias!"
            :invalid-feedback="floatingInvalidFeedbackUsername"
            :state="floatingStateUsername"
            floating
          >
            <b-form-input
              id="input-username"
              v-model="floatingUsername"
              :state="floatingStateUsername"
              trim
              placeholder="Entra tu username, por favor!"
            ></b-form-input>
          </b-form-group>
        </div>
        <div>
          <b-form-group
            id="password"
            description="Tu contraseña aquí, por favor"
            label="Contraseña"
            label-for="input-password"
            valid-feedback="Thank you!"
            :invalid-feedback="floatingInvalidFeedbackPassword"
            :state="floatingStatePassword"
            floating
          >
            <b-form-input
              id="input-password"
              type="password"
              v-model="floatingPassword"
              :state="floatingStatePassword"
              trim
              placeholder="Entra tu contraseña, por favor!"
            ></b-form-input>
          </b-form-group>
        </div>
      </b-form>
    </b-card>
    <b-button class="login-form--submit-button" pill>Entrar</b-button>
  </div>
</template>

<script lang="ts" setup>
import { computed, ref } from "vue";

const floatingUsername = ref("");
const floatingStateUsername = computed(() => floatingUsername.value.length >= 4);
const floatingInvalidFeedbackUsername = computed(() =>
  floatingUsername.value.length > 0 ? "Ingrese al menos 4 caracteres" : "Por favor ingrese algo"
);

const floatingPassword = ref("");
const floatingStatePassword = computed(() => floatingPassword.value.length >= 4);
const floatingInvalidFeedbackPassword = computed(() =>
  floatingPassword.value.length > 0 ? "Ingrese al menos 4 caracteres" : "Por favor ingrese algo"
);
</script>

<style>
.login-form {
  max-width: 600px !important;
}
button.login-form--submit-button {
  width: 100px;
  background-color: #cc1810;
  color: white;
}
</style>
*/
