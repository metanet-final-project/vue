<template>
	<div class="icon-bar">
		<!-- <router-link to="/"><i class="fa fa-home"></i></router-link> -->
		<router-link
			to="/admin/member"
			:class="{ active: currentPath === '/admin/member' }"
			>회원관리</router-link
		>
		<router-link
			to="/admin/route"
			:class="{ active: currentPath === '/admin/route' }"
			>노선관리</router-link
		>
		<router-link
			to="/admin/schedule"
			:class="{ active: currentPath === '/admin/schedule' }"
			>배차관리</router-link
		>
		<router-link
			to="/admin/reservation"
			:class="{ active: currentPath === '/admin/reservation' }"
			>예약관리</router-link
		>
		<router-link
			to="/admin/help"
			:class="{ active: currentPath === '/admin/help' }"
			>분실물</router-link
		>
	</div>
</template>

<script setup>
import { useRoute } from 'vue-router';

const route = useRoute();
const currentPath = route.path;
</script>

<style scoped>
.icon-bar {
	height: 100%;
	width: 120px;
	background-color: #555;
	position: fixed; /* Fixed Sidebar (stay in place on scroll) */
	/*z-index: 1;*/ /* Stay on top */
	/* top: 0; Stay at the top */
	left: 0;
	overflow-x: hidden; /* Disable horizontal scroll */
	padding-top: 0;
}

.icon-bar a {
	display: block;
	text-align: center;
	padding: 18px;
	transition: all 0.3s ease;
	color: white;
	font-size: 18px;
}

.icon-bar a:hover {
	background-color: #858585;
}

.active {
	background-color: #5eaf13;
}
</style>
