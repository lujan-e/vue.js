<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
      <a class="navbar-brand" href="#">Gestor de Tareas</a>
      <div class="collapse navbar-collapse">
        <ul class="navbar-nav">
          <li class="nav-item">
            <router-link to="/add-task" class="nav-link">Agregar Tareas</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/api-tasks" class="nav-link">Extraer Tareas de la API</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/combined-view" class="nav-link">Vista Combinada</router-link>
          </li>
        </ul>
      </div>
    </nav>
    <router-view></router-view>
  </div>
</template>

