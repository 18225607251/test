import Vue from 'vue'
import App from './App.vue'
//完整引入
//引入ElementUI组件库
// import ElementUI from 'element-ui';
// //引入ElementUI全部样式
// import 'element-ui/lib/theme-chalk/index.css';
//按需引入
import { Button,Row,TableColumn,Table } from 'element-ui';
Vue.config.productionTip = false;

// Vue.use(ElementUI)

Vue.component('el-button',Button);
Vue.component('el-row',Row);
Vue.component(Table);

Vue.component('el-table-column',TableColumn);

new Vue({
  render: h => h(App),
}).$mount('#app')
