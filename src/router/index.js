import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomePage/HomeView.vue';
import LoginView from '../views/LoginPage/LoginView.vue';
import RegisterView from '../views/LoginPage/RegisterView.vue';
import MyPageView from '../views/MyPage/MyPageView.vue';
import AdminView from '../views/AdminPage/AdminView.vue';
import MypageModifyView from '../views/MyPage/MypageModifyView.vue';
import MypageBookingView from '../views/MyPage/MypageBookingView.vue';
import MypageBookingModifyView from '../views/MyPage/MypageBookingModifyView.vue';

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
			path: '/mypage/modify',
			name: 'MypageModify',
			component: MypageModifyView,
		},
		{
			path: '/mypage/booking',
			name: 'MypageBooking',
			component: MypageBookingView,
		},
		{
			path: '/mypage/booking/modify',
			name: 'MypageBookingModify',
			component: MypageBookingModifyView,
		},
		{
			path: '/admin',
			name: 'Admin',
			component: AdminView,
		},
	],
});

export default router;
