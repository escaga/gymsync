<template>
  <div class="container">
    <span class="title">Track your progress here!</span>
    <span>You're on track to sucess.</span>
    <v-progress-linear
      v-model="value"
      model-value="35"
      color="purple"
      class="progress-bar"
    ></v-progress-linear>
  </div>
</template>

<script setup></script>

<style>
.title {
  font-weight: 600;
  font-size: 16px;
}
.container {
  display: flex;
  flex-direction: column;
  border: 1px solid grey;
  width: 100%;

  border-radius: 1rem;
  padding: 1rem;
}
.progress-bar {
  margin-top: 1rem;
}
</style>
