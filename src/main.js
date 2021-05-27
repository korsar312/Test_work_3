import { createApp } from 'vue'
import store from "./vuex/store";
import App from './App.vue'
import router from './router/router'




createApp(App).use(store).use(router).mount('#app')