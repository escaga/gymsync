<template>
  <div>
    <TodoList :todoList="todoList" @removeElement="removeTodo" />
    <div class="search">
      <v-form :onSubmit="addTodo">
        <v-text-field
          v-model="todoName"
          label="Todo name"
          :rules="nameRules"
          hide-details
          required
        ></v-text-field>
      </v-form>
      <v-btn @click="addTodo">Add TODO</v-btn>
    </div>
    <h2>There are {{ todoList.length }} todos</h2>
  </div>
</template>

<script>
import TodoList from "./components/TodoList";
import { ref } from "vue";
import { v4 as uuidv4 } from "uuid";

export default {
  components: {
    TodoList,
  },
  setup() {
    const todoList = ref([]);
    const todoName = ref("");

    const addTodo = (e) => {
      e.preventDefault();
      if (todoName.value.length > 0) {
        const newTodo = {
          title: todoName.value,
          // description: "Descrição",
          id: uuidv4(),
        };
        todoName.value = "";
        todoList.value.push(newTodo); // Vue will now react to this change
      }
    };

    const removeTodo = (todoToRemove) => {
      todoList.value = todoList.value.filter(
        (todo) => todo.id !== todoToRemove.id
      );
    };

    return {
      todoList,
      addTodo,
      removeTodo,
      todoName,
    };
  },
};
</script>

<style>
.search {
  display: flex;
  width: 500px;
  justify-content: center;
  align-items: center;
  gap: 12px;
}
</style>
