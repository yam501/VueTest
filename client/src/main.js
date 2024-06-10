import { createApp } from 'vue'
import App from './App.vue'
import 'goodt-framework-css';
import './assets/less/style.less';
import store from "../store";


const app = createApp(App)
app
    .use(store)
    .mount('#app')
