const routers = [
	{
		path: '/',
		component: require('./App.vue'),
		children: [
			{
				path: '',
				name: 'login',
				component: require('./src/views/login.vue')
			},
			{
				path: '/index',
				component: require('./src/views/index.vue'),
				beforeEnter: (to, from, next) => {
					if(localStorage.getItem("userinfo")) {
						next();
					}else {
						next("/");
					}
				},
				children: [
					{
						path: '',
						name: 'tongji',
						component: require('./src/views/tongji.vue')
					},
					{
						path: '/order',
						name: 'order',
						component: require('./src/views/order.vue')
					},
					{
						path: '/address',
						name: 'address',
						component: require('./src/views/address.vue')
					},
					{
						path: '/marketing',
						name: 'marketing',
						component: require('./src/views/marketing.vue')
					},
					{
						path: '/userlist',
						name: 'userlist',
						component: require('./src/views/userlist.vue')
					},
					{
						path: '/merchantlist',
						name: 'merchantlist',
						component: require('./src/views/merchantlist.vue')
					},
					{
						path: '/special',
						name: 'special',
						component: require('./src/views/special.vue')
					},
					{
						path: '/version',
						name: 'version',
						component: require('./src/views/version.vue')
					},
					{
						path: '/partner',
						name: 'partner',
						component: require('./src/views/partner.vue')
					},
					{
						path: '/cusservice',
						name: 'cusservice',
						component: require('./src/views/cusservice.vue')
					}
				]
			}
		]
	}
]

export default routers