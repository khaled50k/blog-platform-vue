import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router/index';
import { store } from './store/index';
import VueObserveVisibility from "vue-observe-visibility";

createApp(App).use(store).use(VueObserveVisibility).use(router).mount('#app')
import SocketIO from "socket.io-client";

const socket=new SocketIO(`http://localhost:5000?userId="64caa9a0dd4b41c627c31c73`, {
    withCredentials: true,
  })
socket.connect()
socket.on("notification",(data)=>{
    console.log(data);
})