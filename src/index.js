import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './App.vue';
import Foo from './components/Foo.vue';
import Bar from './components/Bar.vue';

Vue.use(VueRouter);

const router = new VueRouter({
  routes: [
    { path: '/foo', component: Foo },
    { path: '/bar', component: Bar }
  ]
});

new Vue({
  el: '#vueapp',
  router: router,
  render: h => h(App)
});
