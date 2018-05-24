import Vue from 'vue'
import VueShowdown from 'vue-showdown'
import App from './App.vue'
import router from './router'
import VueMarkdown from 'vue-markdown';

Vue.component('vue-markdown', VueMarkdown);
Vue.config.productionTip = false


new Vue({
  router,
  render: h => h(App)
}).$mount('#app')