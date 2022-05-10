import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Antd from 'ant-design-vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import 'ant-design-vue/dist/antd.css'
const app = createApp(App)
app.use(VueAxios, axios)
app.use(store)
app.use(router)
app.use(Antd)
app.mount('#app')
