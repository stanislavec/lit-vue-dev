import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './App.vue';
import HelloWorld from './components/HelloWorld.vue';
import Test from './components/Test.vue';
import ClockComponent from './components/Clock';
import './global.css';

Vue.config.productionTip = false;
Vue.use(VueRouter);

const routes = [
  { path: '/', component: HelloWorld },
  { path: '/test', component: Test },
  { path: '/time', component: ClockComponent },
];

const router = new VueRouter({
  mode: 'history',
  routes, // сокращённая запись для `routes: routes`
});

new Vue({
  router,
  render: (h) => h(App),
}).$mount('#app');
