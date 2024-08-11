<template>
  <div>
    <h1>Список Дел</h1>
    <ul>
      <li v-for="todo in todos" :key="todo.id">
        {{ todo.text }}
        <button @click="removeTodo(todo.id)">Удалить</button>
      </li>
    </ul>
    <router-link to="/addTask">Добавить дело</router-link>
  </div>
</template>

<script>
import { ref, onMounted } from 'vue';

export default {
  setup() {
    const todos = ref([]);

    onMounted(() => {
      const storedTodos = JSON.parse(localStorage.getItem('todos')) || [];
      todos.value = storedTodos;
    });

    const removeTodo = (id) => {
      todos.value = todos.value.filter(todo => todo.id !== id);
      localStorage.setItem('todos', JSON.stringify(todos.value));
    };

    return { todos, removeTodo };
  }
};
</script>