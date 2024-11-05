import { createRouter, createWebHistory } from 'vue-router'; // Usa `createRouter` y `createWebHistory`
import AgregarTarea from '@/components/AgregarTarea.vue';
import ExtraerTareas from '@/components/ExtraerTareas.vue';
import VistaCombinada from '@/components/VistaCombinada.vue';

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

// Usa `createRouter` y `createWebHistory` para crear el router
const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;


