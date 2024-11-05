import { createApp } from 'vue'; // Usa `createApp` en lugar de `Vue`
import App from './App.vue';
import router from './router';

createApp(App)
  .use(router) // Usa el router aquí
  .mount('#app');



