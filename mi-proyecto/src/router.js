import { createRouter, createWebHistory } from 'vue-router'; // Importaciones correctas para Vue 3
import AgregarTarea from '@/components/AgregarTarea.vue';
import ExtraerTareas from '@/components/ExtraerTareas.vue';
import VistaCombinada from '@/components/VistaCombinada.vue';

// Definimos las rutas
const routes = [
  {
    path: '/add-task',
    name: 'AgregarTarea',
    component: AgregarTarea
  },
  {
    path: '/api-tasks',
    name: 'ExtraerTarea',
    component: ExtraerTareas
  },
  {
    path: '/combined-view',
    name: 'VistaCombinada',
    component: VistaCombinada
  },
  {
    path: '*',
    redirect: '/add-task'
  }
];

// Creamos el router usando `createRouter` y `createWebHistory`
const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
