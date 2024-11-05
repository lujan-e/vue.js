<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <AgregarTarea msg="Welcome to Your Vue.js App" />
    <ExtraerTareas />
    <VistaCombinada />
  </div>
</template>

<script>
// @ is an alias to /src
import AgregarTarea from '@/components/AgregarTarea.vue';
import ExtraerTareas from '@/components/ExtraerTareas.vue';
import VistaCombinada from '@/components/VistaCombinada.vue';

export default {
  name: 'HomeView',
  components: {
    AgregarTarea,
    ExtraerTareas,
    VistaCombinada
  }
}
</script>

