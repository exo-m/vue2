import Vue from 'vue'
import Router from 'vue-router'
import ElementUI from 'element-ui'
import axios from 'axios'
import App from './App.vue'
import routers from './router.config.js'

// require('./src/styles/common.less')
import 'normalize.css'

Vue.use(ElementUI)
Vue.use(Router)

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
	render: h => h(App)
}).$mount('#app')
