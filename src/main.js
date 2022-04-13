import { createApp } from 'vue';
import App from './App.vue';
import '@/assets/styles/tailwind.css'
import '@/assets/styles/base.postcss'
import './assets/scripts/neutralino.js';

const app = createApp(App);

app.mount('#app');

Neutralino.init();
