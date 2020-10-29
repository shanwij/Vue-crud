import Vue from 'vue'
import App from './App.vue'
import Vuelidate from 'vuelidate'

Vue.use(Vuelidate)
import vuetify from './plugins/vuetify';

Vue.config.productionTip = false

new Vue({
  vuetify,
  render: h => h(App)
}).$mount('#app')
