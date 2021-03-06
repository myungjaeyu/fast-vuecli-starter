import Vue from 'vue'
import App from './App.vue'
import router from './providers/router'
import store from './providers/store'

Vue.config.productionTip = false
Vue.config.devtools = true

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')
