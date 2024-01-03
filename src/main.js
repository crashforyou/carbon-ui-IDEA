import { createApp } from 'vue'
import App from './App.vue'
import antd from 'ant-design-vue'
import router from './router'
import store from './store'

createApp(App).use(store).use(router).use(antd).mount('#app')
