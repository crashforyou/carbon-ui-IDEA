import { createApp } from 'vue'
import App from './App.vue'
import antd from 'ant-design-vue'
import router from './router'
import store from './store'
import ECharts from 'vue-echarts'  // 引入ECharts

createApp(App).use(store).use(router).use(antd).component('ECharts',ECharts).mount('#app')
