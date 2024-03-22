<template>
  <div>
    <div class="card-container" v-for="item in itemList" :key="item.id">
      <div class="card">Title: {{ item.title }}</div>
      <div @click="handleButtonClick(item)">
        <font-awesome-icon :icon="faTrash" />
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent, toRef } from "vue";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

export default defineComponent({
  props: {
    todoList: {
      type: Array,
      required: true,
    },
    removeElement: {
      type: Function,
      required: true,
    },
  },
  components: {
    FontAwesomeIcon,
  },
  setup(props) {
    const handleButtonClick = (item) => {
      props.removeElement(item); // Pass the todo item to the removeElement function
    };
    const todoListLocal = toRef(props,'todoList')

    return {
      itemList: todoListLocal,
      handleButtonClick,
      faTrash,
    };
  },
});
</script>

<style>
.card {
  height: 100px;
  width: 200px;
  border: 1px solid grey;
  border-radius: 16px;
}
.card-container {
  width: fit-content;
  display: flex;
  align-items: center;
  gap: 16px;
}
</style>
