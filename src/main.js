import Vue from 'vue';
import VueRouter from 'vue-router';
import Vuex from 'vuex';
import { APP_STORE } from './store';
import App from './App.vue';
import HelloWorld from './components/HelloWorld.vue';
import Test from './components/Test.vue';
import './global.css';

Vue.config.productionTip = false;
Vue.use(VueRouter);
Vue.use(Vuex);

const routes = [
	{ path: '/', component: HelloWorld },
	{ path: '/test', component: Test },
];

const router = new VueRouter({
	mode: 'history',
	routes, // сокращённая запись для `routes: routes`
});

const store = new Vuex.Store(APP_STORE);

new Vue({
	router,
	store,
	render: (h) => h(App),
}).$mount('#app');
