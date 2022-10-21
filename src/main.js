import { createApp } from 'vue';
import App from './App.vue';
import router from './router';

import Dexios from './plugin.js';

import '@mdi/font/css/materialdesignicons.css';

const app = createApp(App);
app.use(router);
app.use(Dexios);
app.mount('#app');
