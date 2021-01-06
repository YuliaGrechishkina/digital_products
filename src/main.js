import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VueSlickCarousel from "vue-slick-carousel";

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')

Vue.use(VueSlickCarousel);