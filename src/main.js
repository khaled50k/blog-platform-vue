import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router/index';
import { store } from './store/index';
import VueObserveVisibility from "vue-observe-visibility";

createApp(App).use(store).use(VueObserveVisibility).use(router).mount('#app')
