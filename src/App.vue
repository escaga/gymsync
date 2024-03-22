<template>
  <div id="appContainer">
    <UserWelcome />
    <StudentCalendar test="" @callback="callback" />
    <StudentHomepage />
  </div>
</template>

<script setup>
import StudentCalendar from "./components/StudentCalendar";
import UserWelcome from "./components/UserWelcome";
import StudentHomepage from "./components/Student/StudentHomepage";
import "./styles/common.css";

const callback = () => {
  console.log("welele");
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Open+Sans&display=swap");

body {
  font-family: "Open Sans", sans-serif !important;
  background-color: #161616;
  height: 100vh;
  width: 100vw;
}
span,
strong,
div {
  color: white;
}
.vc-container > * {
  font-family: "Open Sans", sans-serif !important; /* Inherit from parent or your global font family */
}
#appContainer {
  display: flex;
  width: 100%;
  padding: 24px;
  flex-direction: column;
  align-items: center;
  gap: 24px;
}
</style>
