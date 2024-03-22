<template lang="">
  <div class="quick-exercises-container">
    <div class="session-selector">
      <span>Most popular sessions</span>
      <div class="chevron-container">
        <font-awesome-icon
          :icon="faCircleChevronLeft"
          size="2x"
          @click="carousel.prev()"
        />
        <font-awesome-icon
          :icon="faCircleChevronRight"
          size="2x"
          @click="carousel.next()"
        />
      </div>
    </div>
  </div>

  <Carousel ref="carousel">
    <Slide v-for="slide in slideShows" :key="slide.id">
      <div class="carousel__item">
        <div class="width-100 p-relative">
          <img
            src="https://www.regymenfitness.com/wp-content/uploads/2021/12/Sportive-serious-people-liftin-1080x675.jpg"
            width="180"
            class="exerciseImage"
          />
          <div class="image-footer">
            <strong>{{ slide.title }}</strong>
            <span>{{ slide.author }}</span>
          </div>
        </div>
      </div>
    </Slide>
  </Carousel>
</template>

<script setup>
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { faCircleChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { faCircleChevronRight } from "@fortawesome/free-solid-svg-icons";
import { Carousel, Slide } from "vue3-carousel";
import "vue3-carousel/dist/carousel.css";
import { ref } from "vue";

const carousel = ref(null);
const slideShows = [
  {
    title: "ABC dos exericios",
    author: "André Almeida",
    id: "1",
  },
  {
    title: "Workout for fating",
    author: "Melanie Almeida",
    id: "2",
  },
];
</script>

<style>
.session-selector {
  display: flex;
  flex-direction: row;
  align-items: center;
  text-align: center;
  width: 100%;
  justify-content: space-between;
  margin-bottom: 1rem;
}

.image-footer {
  position: absolute;
  padding: 12px 16px;
  display: flex;
  flex-direction: column;
  bottom: 0;
  width: 100%;
  height: 70px;
  border-radius: 1rem;
  background: #323232;
}
/* .image-footer::after {
  content: "";
  width: 100%;
  height: 20px;
  display: block;
  position: absolute;
  background: #191919;
  background: -webkit-linear-gradient(top, rgba(150, 123, 19, 0), #191919);
  bottom: 0;
  left: 0;
  z-index: 10;
} */

.session-selector > span {
  font-size: 18px;
  font-weight: 600;
}
.quick-exercises-container {
  display: flex;
  width: 100%;
  flex-direction: column;
}
.exerciseImage {
  width: 100%;
  border-radius: 1rem;
}

.chevron-container {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 1rem;
}
</style>
