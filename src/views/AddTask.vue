<template>
    <div>
      <h1>Добавить Дело</h1>
      <input v-model="newTodo" placeholder="Введите дело" />
      <button @click="addTodo">Добавить</button><br>
      <router-link to="/">Назад к списку дел</router-link>
    </div>
  </template>
  
  <script>
  import { ref } from 'vue';
  import { useRouter } from 'vue-router';
  
  export default {
    setup() {
      const newTodo = ref('');
      const router = useRouter();
  
      const addTodo = () => {
        if (newTodo.value.trim()) {
          // Здесь вы можете добавить логику для передачи нового дела
          const todo = {
            id: Date.now(), // Уникальный ID на основе времени
            text: newTodo.value
          };
          // Сохраняем новое дело в локальном хранилище или глобальном состоянии
          const storedTodos = JSON.parse(localStorage.getItem('todos')) || [];
          storedTodos.push(todo);
          localStorage.setItem('todos', JSON.stringify(storedTodos));
  
          // Очистка поля ввода и перенаправление на главную страницу
          newTodo.value = '';
          router.push('/');
        }
      };
  
      return { newTodo, addTodo };
    }
  };
  </script>