import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomePage/HomeView.vue';
import LoginView from '../views/LoginPage/LoginView.vue';
import RegisterView from '../views/LoginPage/RegisterView.vue';
import MyPageView from '../views/MyPage/MyPageView.vue';
import AdminView from '../views/AdminPage/AdminView.vue';
import AdminMemberView from '../views/AdminPage/Sections/AdminMember.vue';
import AdminRouteView from '../views/AdminPage/Sections/AdminRoute.vue';
import AdminScheduleView from '../views/AdminPage/Sections/AdminSchedule.vue';
import AdminReservationView from '../views/AdminPage/Sections/AdminReservation.vue';
import AdminHelpView from '../views/AdminPage/Sections/AdminHelp.vue';

const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes: [
		{
			path: '/',
			name: 'Home',
			component: HomeView,
		},
		{
			path: '/login',
			name: 'Login',
			component: LoginView,
		},
		{
			path: '/register',
			name: 'Register',
			component: RegisterView,
		},
		{
			path: '/mypage',
			name: 'Mypage',
			component: MyPageView,
		},
		{
			path: '/admin',
			name: 'Admin',
			component: AdminView,
		},
		{
			path: '/admin/member',
			name: 'AdminMember',
			component: AdminMemberView,
		},
		{
			path: '/admin/route',
			name: 'AdminRoute',
			component: AdminRouteView,
		},
		{
			path: '/admin/schedule',
			name: 'AdminSchedule',
			component: AdminScheduleView,
		},
		{
			path: '/admin/reservation',
			name: 'AdminResvation',
			component: AdminReservationView,
		},
		{
			path: '/admin/help',
			name: 'AdminHelp',
			component: AdminHelpView,
		},
	],
});

export default router;
