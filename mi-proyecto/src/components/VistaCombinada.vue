<template>
  <div class="container">
    <h2>Vista Combinada</h2>
    <div class="input-group mb-3">
      <input type="text" v-model="newTask" class="form-control" placeholder="Añadir nueva tarea">
      <button class="btn btn-primary" @click="addTask">Añadir</button>
    </div>
    <button class="btn btn-secondary mb-3" @click="fetchTasks">
      Extraer Tareas <i class="bi bi-cloud-download"></i>
    </button>
    <ul class="list-group">
      <li v-for="(task, index) in combinedTasks" :key="index" class="list-group-item">
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
      newTask: '',
      localTasks: [],
      apiTasks: []
    };
  },
  computed: {
    combinedTasks() {
      return [...this.localTasks, ...this.apiTasks];
    }
  },
  methods: {
    addTask() {
      if (this.newTask.trim() !== '') {
        this.localTasks.push(this.newTask);
        this.newTask = '';
      }
    },
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

  