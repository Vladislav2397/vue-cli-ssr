<template lang="pug">
  div.login
    h1 Login page
    div
      input(
        v-model='form.login'
      )
    div
      input(
        v-model='form.password'
      )
    div
      button(
        v-on:click='onClick'
      ) Send
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";

@Component
export default class Login extends Vue {
  form = {
    login: "",
    password: "",
  };

  onClick(): void {
    //
  }
}
</script>
