import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomePage/HomeView.vue';
import LoginView from '../views/LoginPage/LoginView.vue';
import RegisterView from '../views/LoginPage/RegisterView.vue';
import MyPageView from '../views/MyPage/MyPageView.vue';
import AdminView from '../views/AdminPage/AdminView.vue';
import BookingView from '../views/ReservationPage/BookingView.vue';
import BookingConfirmView from '../views/ReservationPage/BookingConfirmView.vue';

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
			path: '/booking',
			name: 'Booking',
			component: BookingView,
		},
		{
			path: '/bookingconfirm',
			name: 'BookingConfirm',
			component: BookingConfirmView,
		},
	],
});

export default router;
