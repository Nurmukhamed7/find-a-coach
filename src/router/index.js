import { createRouter, createWebHistory } from 'vue-router'

import NotFound from '@/pages/NotFound.vue'
import CoachDetail from '@/pages/coaches/CoachDetail.vue'
import CoachList from '@/pages/coaches/CoachList.vue'
import CoachRegistration from '@/pages/coaches/CoachRegistration.vue'
import ContactCoach from '@/pages/requests/ContactCoach.vue'
import RequestReceived from '@/pages/requests/RequestReceived.vue'

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
			component: CoachList,
		},
		{
			path: '/coaches/:id',
			component: CoachDetail,
			children: [
				{
					path: 'contact',
					name: 'contact',
					component: ContactCoach,
				},
			],
		},
		{
			path: '/register',
			name: 'register',
			component: CoachRegistration,
		},
		{
			path: '/requests',
			name: 'requests',
			component: RequestReceived,
		},
		{
			path: '/:notFound(.*)',
			name: 'NotFound',
			component: NotFound,
		},
	],
})

export default router
