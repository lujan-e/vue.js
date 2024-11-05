<template>
  <div class="container">
    <h2>Agregar Tareas Manualmente</h2>
    <div class="input-group mb-3">
      <input type="text" v-model="newTask" class="form-control" placeholder="Añadir nueva tarea">
      <button class="btn btn-primary" @click="addTask">Añadir</button>
    </div>
    <ul class="list-group">
      <li v-for="(task, index) in tasks" :key="index" class="list-group-item d-flex justify-content-between align-items-center">
        {{ task }}
        <button class="btn btn-danger btn-sm" @click="removeTask(index)">
          <i class="bi bi-trash"></i>
        </button>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      newTask: '',
      tasks: []
    };
  },
  methods: {
    addTask() {
      if (this.newTask.trim() !== '') {
        this.tasks.push(this.newTask);
        this.newTask = '';
      }
    },
    removeTask(index) {
      this.tasks.splice(index, 1);
    }
  }
};
</script>

  