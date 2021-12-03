<template>
  <div class="container-sm create-form d-flex flex-column mb-5 w-75">
    <b-card class="mb-1">
      <b-form @change="checkForm" autoComplete="off" action v-on:keydown.enter.prevent="handleCreate" data-test="createBForm">
        <div>
          <b-form-group
            id="username"
            description="Profe username aquí, por favor"
            label="Username"
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
              placeholder="Entra username de profe, por favor!"
            ></b-form-input>
          </b-form-group>
        </div>
        <div>
          <b-form-group
            id="password"
            description="Contraseña de profe aquí, por favor"
            label="Contraseña"
            label-for="input-password"
            valid-feedback="Gracias!"
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
              placeholder="Entra la contraseña de profe, por favor!"
            ></b-form-input>
          </b-form-group>
        </div>
        <div>
          <b-form-group
            id="firstname"
            description="Nombre de profe aquí, por favor"
            label="Nombre(s)"
            label-for="input-firstname"
            valid-feedback="¡Gracias!"
            :invalid-feedback="floatingInvalidFeedbackFirstname"
            :state="floatingStateFirstname"
            floating
          >
            <b-form-input
              id="input-firstname"
              v-model="firstname"
              :state="floatingStateFirstname"
              trim
              placeholder="Entra nombres(s) de profe, por favor!"
            ></b-form-input>
          </b-form-group>
        </div>
        <div>
          <b-form-group
            id="lastname"
            description="Apellido de profe aquí, por favor"
            label="Apellido(s)"
            label-for="input-lastname"
            valid-feedback="¡Gracias!"
            :invalid-feedback="floatingInvalidFeedbackLastname"
            :state="floatingStateLastname"
            floating
          >
            <b-form-input
              id="input-lastname"
              v-model="lastname"
              :state="floatingStateLastname"
              trim
              placeholder="Entra apellido(s) de profe, por favor!"
            ></b-form-input>
          </b-form-group>
        </div>
        <div>
          <b-form-group
            id="email"
            description="Email de profe aquí, por favor"
            label="Email"
            label-for="input-email"
            valid-feedback="¡Gracias!"
            :invalid-feedback="floatingInvalidFeedbackEmail"
            :state="floatingStateEmail"
            floating
          >
            <b-form-input
              id="input-email"
              v-model="email"
              :state="floatingStateEmail"
              trim
              placeholder="Entra email de profe, por favor!"
            ></b-form-input>
          </b-form-group>
        </div>
        <div>
          <b-form-group
            id="image"
            description="URL de una imagen de profe aquí, por favor"
            label="Imagen"
            label-for="input-image"
            valid-feedback="¡Gracias!"
            :invalid-feedback="floatingInvalidFeedbackImage"
            :state="floatingStateImage"
            floating
          >
            <b-form-input
              id="input-image"
              v-model="image"
              :state="floatingStateImage"
              trim
              placeholder="Entra url de una imagen de profe, por favor!"
            ></b-form-input>
          </b-form-group>
        </div>

        <b-form-checkbox v-model="switchChecked" switch>Darle acceso a la sección para profesores</b-form-checkbox>
      </b-form>
    </b-card>
    <b-button
      :disabled="isDisabled"
      :class="isDisabled ? 'disabled create-form--submit-button' : 'create-form--submit-button'"
      @click="handleCreate"
      type="submit"
      pill
      >{{ isWrong ? "Incorrecto" : "Crearlo" }}</b-button
    >
  </div>
</template>

<script lang="ts">
import { defineComponent, computed, ref } from "vue";
import { mapActions } from "vuex";
import { UserRegisterData } from "@/types/interfaces";

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

    const firstname = ref("");
    const floatingStateFirstname = computed(() => firstname.value.length >= 4);
    const floatingInvalidFeedbackFirstname = computed(() =>
      firstname.value.length > 0 ? "Ingrese al menos 4 caracteres" : "Por favor ingrese algo"
    );

    const lastname = ref("");
    const floatingStateLastname = computed(() => lastname.value.length >= 4);
    const floatingInvalidFeedbackLastname = computed(() =>
      lastname.value.length > 0 ? "Ingrese al menos 4 caracteres" : "Por favor ingrese algo"
    );

    const email = ref("");
    const floatingStateEmail = computed(() => email.value.length >= 4);
    const floatingInvalidFeedbackEmail = computed(() =>
      email.value.length > 0 ? "Ingrese al menos 4 caracteres" : "Por favor ingrese algo"
    );

    const image = ref("");
    const floatingStateImage = computed(() => image.value.length >= 1);
    const floatingInvalidFeedbackImage = computed(() =>
      image.value.length > 0 ? "Ingrese url" : "Estás seguro de que queres crear perfil de profesor sin foto?"
    );

    const switchChecked = ref(false);

    return {
      floatingInvalidFeedbackUsername,
      floatingInvalidFeedbackPassword,
      floatingInvalidFeedbackFirstname,
      floatingInvalidFeedbackLastname,
      floatingInvalidFeedbackEmail,
      floatingInvalidFeedbackImage,
      floatingStateUsername,
      floatingStatePassword,
      floatingStateFirstname,
      floatingStateLastname,
      floatingStateEmail,
      floatingStateImage,
      password,
      username,
      firstname,
      lastname,
      email,
      image,
      switchChecked,
    };
  },

  data() {
    return {
      userData: { username: null, password: null, firstname: null, lastname: null, email: null, image: null },
      isDisabled: true,
      isWrong: false,
    };
  },
  name: "FormNewTeacher",
  methods: {
    ...mapActions(["registerUser"]),
    checkForm() {
      if (this.username.length > 4 && this.password.length >= 4) {
        this.isDisabled = false;
      } else {
        this.isDisabled = true;
      }
    },
    async handleCreate() {
      if (this.username !== "" && this.password !== "") {
        const userData: UserRegisterData = {
          username: this.username,
          password: this.password,
          firstname: this.firstname,
          lastname: this.lastname,
          email: this.email,
          image:
            this.image === ""
              ? "https://t4.ftcdn.net/jpg/00/64/67/63/360_F_64676383_LdbmhiNM6Ypzb3FM4PPuFP9rHe7ri8Ju.jpg"
              : this.image,
          professorAccess: this.switchChecked,
        };
        try {
          await this.registerUser(userData);
          this.isWrong = false;
        } catch (error) {
          this.isWrong = true;
        }
      }
    },
  },
});
</script>

<style>
.create-form {
  max-width: 600px !important;
}
button.create-form--submit-button {
  width: 100px;
  background-color: #cc1810;
  color: white;
}
</style>
