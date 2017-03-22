import Vue from 'vue'
import Router from 'vue-router'
import ElementUI from 'element-ui'
import axios from 'axios'
import App from './App.vue'
import routers from './router.config.js'
import store from './src/vuex/store.js'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import MuseUI from 'muse-ui'
import 'muse-ui/dist/muse-ui.css'
import 'muse-ui/dist/theme-carbon.css' // 使用 carbon 主题
// require('./src/styles/common.less')
import 'normalize.css'

Vue.use(ElementUI)
Vue.use(Router)
Vue.use(VueAwesomeSwiper)
Vue.use(MuseUI)


import 'element-ui/lib/theme-default/index.css'

Vue.prototype.$http = axios

const router = new Router({
	routes: routers
})

// router.beforeEach((to, from, next) => {
// 	if(to.path != '/login') {
// 		if(localStorage.getItem("userinfo")) {
// 			next();
// 		}else {
// 			// router.replace("/login");
// 			next("/");
// 		}
// 	}else {
// 		next();
// 	}
// });

new Vue({
	router,
	store,
	render: h => h(App)
}).$mount('#app')
