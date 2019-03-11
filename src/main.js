import Vue from 'vue'
import App from './App.vue'
export const eventBus = new Vue();
// import Contact from './contact.vue'
// Vue.component('contact-component',Contact);

new Vue({
  el: '#app',
  render: h => h(App)
})
