<template>
  <div class="avatarContainer">
    <v-avatar size="56px">
      <v-img
        alt="Avatar"
        src="https://avatars0.githubusercontent.com/u/9064066?v=4&s=460"
      ></v-img>
    </v-avatar>
    <div class="welcomeText">
      <strong>Welcome,</strong>
      <span class="name">{{ name }}</span>
    </div>
  </div>
</template>

<script>
import { defineComponent, ref } from "vue";

export default defineComponent({
  setup() {
    const name = ref("André Almeida");

    return { name };
  },
});
</script>

<style>
.avatarContainer {
  display: flex;
  width: 100%;
  align-items: center;

}
.welcomeText {
  display: flex;
  flex-direction: column;
  margin-left: 12px;
}
.name {
  font-size: 14px;
}
</style>
