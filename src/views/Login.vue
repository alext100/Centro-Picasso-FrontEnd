<template>
  <div class="container-sm login-form d-flex flex-column mt-5">
    <b-card class="mb-1">
      <b-form @change="checkForm" autoComplete="off" action v-on:keydown.enter.prevent="handleLogin" data-test="loginBForm">
        <div>
          <b-form-group
            id="username"
            description="Tu username aquí, por favor"
            label="alex1"
            label-for="input-username"
            valid-feedback="¡Gracias!"
            :invalid-feedback="floatingInvalidFeedbackUsername"
            :state="floatingStateUsername"
            floating
          >
            <b-form-input
              id="input-username"
              v-model="username"
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
            label="alex"
            label-for="input-password"
            valid-feedback="Thank you!"
            :invalid-feedback="floatingInvalidFeedbackPassword"
            :state="floatingStatePassword"
            floating
          >
            <b-form-input
              id="input-password"
              type="password"
              v-model="password"
              :state="floatingStatePassword"
              trim
              placeholder="Entra tu contraseña, por favor!"
            ></b-form-input>
          </b-form-group>
        </div>
      </b-form>
    </b-card>
    <b-button
      :disabled="isDisabled"
      :class="isDisabled ? 'disabled login-form--submit-button' : 'login-form--submit-button'"
      @click="handleLogin"
      type="submit"
      pill
      >{{ isWrong ? "Incorrecto" : "Ingresar" }}</b-button
    >
  </div>
</template>

<script lang="ts">
import { defineComponent, computed, ref } from "vue";
import { mapActions, mapState } from "vuex";
import { UserLoginData } from "@/types/interfaces";
import state from "@/store/state";

export default defineComponent({
  setup() {
    const username = ref("");
    const floatingStateUsername = computed(() => username.value.length >= 5);
    const floatingInvalidFeedbackUsername = computed(() =>
      username.value.length > 0 ? "Ingrese al menos 5 caracteres" : "Por favor ingrese algo"
    );

    const password = ref("");
    const floatingStatePassword = computed(() => password.value.length >= 4);
    const floatingInvalidFeedbackPassword = computed(() =>
      password.value.length > 0 ? "Ingrese al menos 4 caracteres" : "Por favor ingrese algo"
    );
    return {
      username,
      floatingInvalidFeedbackUsername,
      floatingStateUsername,
      floatingStatePassword,
      floatingInvalidFeedbackPassword,
      password,
    };
  },

  data() {
    return {
      userData: { username: null, password: null },
      isDisabled: true,
      isWrong: false,
    };
  },
  name: "Login",
  methods: {
    ...mapActions(["login"]),
    ...mapState(["isProfessor", "isAdmin", "isStudent"]),
    checkForm() {
      if (this.username.length > 4 && this.password.length >= 4) {
        this.isDisabled = false;
      } else {
        this.isDisabled = true;
      }
    },
    async handleLogin() {
      if (this.username !== "" && this.password !== "") {
        const userData: UserLoginData = {
          username: this.username,
          password: this.password,
        };
        try {
          await this.login(userData);
          this.isWrong = false;
          if (state.isStudent === true) {
            this.$router.push("/courses");
          } else if (state.isProfessor === true) {
            this.$router.push("/blog");
          } else if (state.isAdmin === true) {
            this.$router.push("/admin");
          }
        } catch (error) {
          this.isWrong = true;
        }
      }
    },
  },
});
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
