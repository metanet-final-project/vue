import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomePage/HomeView.vue';
import LoginView from '../views/LoginPage/LoginView.vue';
import RegisterView from '../views/LoginPage/RegisterView.vue';
import MyPageView from '../views/MyPage/MyPageView.vue';
import AdminView from '../views/AdminPage/AdminView.vue';
import BookingView from '../views/ReservationPage/BookingView.vue';
import BookingConfirmView from '../views/ReservationPage/BookingConfirmView.vue';
import AdminMemberView from '../views/AdminPage/Sections/AdminMember.vue';
import AdminRouteView from '../views/AdminPage/Sections/AdminRoute.vue';
import AdminScheduleView from '../views/AdminPage/Sections/AdminSchedule.vue';
import AdminReservationView from '../views/AdminPage/Sections/AdminReservation.vue';
import AdminHelpView from '../views/AdminPage/Sections/AdminHelp.vue';
import ScheduleSearchView from '../views/BookingPage/ScheduleSearch.vue';
import ScheduleSeatView from '../views/BookingPage/ScheduleSeat.vue';
import MypageModifyView from '../views/MyPage/MypageModifyView.vue';
import MypageBookingView from '../views/MyPage/MypageBookingView.vue';
import MypageBookingModifyView from '../views/MyPage/MypageBookingModifyView.vue';
import NonMemBookingView from '../views/NonMemberPage/NonMemBookingView.vue';

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
		{
			path: '/schedule/search',
			name: 'ScheduleSearch',
			component: ScheduleSearchView,
		},
		{
			path: '/schedule/seat',
			name: 'ScheduleSeat',
			component: ScheduleSeatView,
		},
		{
			path: '/nonmember/booking',
			name: 'NonMemBooking',
			component: NonMemBookingView,
		},
	],
});

export default router;
