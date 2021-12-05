<template>
  <div class="container-sm d-flex flex-column mt-5">
    <b-card class="mb-1">
      <b-form autoComplete="off" action v-on:keydown.enter.prevent="handleAddMessage" data-test="loginBForm">
        <div>
          <b-form-group
            id="message"
            description="Tu mensaje aquí, por favor"
            label="mensaje:"
            label-for="input-message"
            valid-feedback="¡Gracias!"
            :invalid-feedback="floatingInvalidFeedbackMessage"
            :state="floatingStateMessage"
          >
            <b-form-textarea
              size="lg"
              id="input-message"
              type="textarea"
              v-model="message"
              :state="floatingStateMessage"
              trim
              placeholder="Mensaje"
              rows="6"
              no-resize
            ></b-form-textarea>
          </b-form-group>
        </div>
      </b-form>
    </b-card>
    <b-button class="input-form--submit-button mb-3 mt-1" @click="handleAddMessage" type="submit" pill>Enviar</b-button>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed, ref } from "vue";
import { mapActions, mapState } from "vuex";
import state from "@/store/state";

export default defineComponent({
  setup() {
    const message = ref("");
    const floatingStateMessage = computed(() => message.value.length >= 5);
    const floatingInvalidFeedbackMessage = computed(() =>
      message.value.length > 0 ? "Ingrese al menos 5 caracteres" : "Por favor ingrese algo"
    );

    return {
      message,
      floatingStateMessage,
      floatingInvalidFeedbackMessage,
    };
  },

  name: "GroupInputMessage",
  methods: {
    ...mapActions(["updateGroup"]),
    ...mapState(["currentGroup"]),
    async handleAddMessage() {
      const groupToUpdate = {
        groupname: state.currentGroup.groupname,
        members: state.currentGroup.members,
        messages: [...state.currentGroup.messages, { message: this.message, time: new Date() }],
        id: state.currentGroup.id,
      };
      await this.updateGroup(groupToUpdate);
    },
  },
});
</script>

<style scoped>
button.input-form--submit-button {
  width: 100px;
  background-color: #fd8904;
  color: white;
}
</style>
