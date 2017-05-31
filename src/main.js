import Vue from 'vue'
import App from './App.vue'
import VueBeauty from 'vue-beauty';
import 'vue-beauty/package/style/vue-beauty.css'
import VueRouter from 'vue-router'
import {routers} from './routers'
/**
 * vue beauty web components
 */
Vue.use(VueBeauty);

/**
 * vue router plugin
 */
Vue.use(VueRouter);
const router = new VueRouter({
    mode: 'history',
    base: CONTEXT_TPATH_FOR_ROUTE,
    routes: routers()
});
router.beforeEach((to, from, next) => {
    to.path === '/' && to.hash ? next(to.fullPath.replace('#', 'home')) : next()
});

new Vue({
  el: '#app',
    router,
  render: h => h(App)
});
