import Vue from 'vue'
import App from './App.vue'
import {alert} from 'vue-beauty';
import 'vue-beauty/package/style/vue-beauty.css'

console.log('debug:',alert);
Vue.use(alert);

new Vue({
  el: '#app',
  render: h => h(App)
});
