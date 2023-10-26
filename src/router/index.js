import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
	history: createWebHistory(),
	routes: [
		{
			path: '/',
			redirect: '/coaches',
		},
		{
			path: '/coaches',
			name: 'coaches',
			component: null,
		},
		{
			path: '/coaches/:id',
			component: null,
			children: [
				{
					path: '/contact',
					name: 'contact',
					component: null,
				},
			],
		},
		{
			path: '/register',
			name: 'register',
			component: null,
		},
		{
			path: '/:notFound(.*)',
			name: 'NotFound',
			component: null,
		},
	],
})

export default router
