<template>
  <div class="container">
    <h2>Extraer Tareas de la API</h2>
    <button class="btn btn-secondary mb-3" @click="fetchTasks">
      Extraer Tareas <i class="bi bi-cloud-download"></i>
    </button>
    <ul class="list-group">
      <li v-for="(task, index) in apiTasks" :key="index" class="list-group-item">
        {{ task }}
      </li>
    </ul>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      apiTasks: []
    };
  },
  methods: {
    fetchTasks() {
      axios.get('https://dummyjson.com/todos')
        .then(response => {
          this.apiTasks = response.data.todos.map(todo => todo.task);
        })
        .catch(error => console.error('Error al obtener las tareas:', error));
    }
  }
};
</script>

  