import Vue from 'vue'
import App from './App.vue'
import VueBeauty from 'vue-beauty';
import 'vue-beauty/package/style/vue-beauty.min.css'
import Vuex from 'vuex'
import VueResource from 'vue-resource'
import VueRouter from 'vue-router'
import {routers} from './routers'

/**
 * vue resource plugin for http client
 */
Vue.use(VueResource);

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
    to.path === '/' && to.hash ? next(to.fullPath.replace('/#', '')) : next();
});


/**
 * vuex plugin
 */
Vue.use(Vuex);
const store = new Vuex.Store({
    state: {
        show_menu: false
    }
});

new Vue({
    el: '#app',
    router,
    store,
    render: h => h(App)
});
