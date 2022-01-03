import Vue from "vue";
import router from "./router"

// 导入App组件
import App from "./App.vue"







// 创建vue根实例
new Vue({
  router,
  render: (h) => h(App),
}).$mount('#app')


    