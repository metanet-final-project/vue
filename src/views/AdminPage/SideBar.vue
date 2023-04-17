<template>
	<div class="col-md-2" style="display: flex; height: 90vh">
		<div class="sidebar">
			<ul class="nav flex-column">
				<li class="nav-item">
					<router-link
						to="/admin/member"
						class="nav-link text-center"
						:class="{ active: currentPath == '/admin/member' }"
						>회원관리</router-link
					>
				</li>
				<li class="nav-item">
					<router-link
						to="/admin/route"
						class="nav-link text-center"
						:class="{ active: currentPath == '/admin/route' }"
						>노선관리</router-link
					>
				</li>
				<li class="nav-item">
					<router-link
						to="/admin/schedule"
						class="nav-link text-center"
						:class="{ active: currentPath == '/admin/schedule' }"
						>예약관리</router-link
					>
				</li>
				<li class="nav-item">
					<router-link
						to="/admin/reservation"
						class="nav-link text-center"
						:class="{ active: currentPath == '/admin/reservation' }"
						>배차관리</router-link
					>
				</li>
				<li class="nav-item">
					<router-link
						to="/admin/help"
						class="nav-link text-center"
						:class="{ active: currentPath == '/admin/help' }"
						>분실물</router-link
					>
				</li>
			</ul>
		</div>
	</div>
</template>

<script setup>
import { useRoute } from 'vue-router';

const route = useRoute();
const currentPath = route.path;
</script>

<style scoped>
.sidebar {
	background-color: #ffffff; /* 사이드바의 배경색 */
	/* padding: 20px; 사이드바의 내부 패딩(margin) */
	padding-top: 20px;
	width: 130px;
	/* box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.16); */
	box-shadow: 1px -10px 12px 0px rgba(0, 0, 0, 0.16);
}

.sidebar h2 {
	margin-top: 0; /* 사이드바 제목의 위쪽 마진을 제거 */
}

.sidebar ul {
	list-style-type: none; /* 목록의 기본 스타일을 제거 */
	padding-left: 0; /* 목록의 왼쪽 패딩(margin)을 제거 */
}

.sidebar li :not(color) {
	margin-bottom: 10px; /* 목록 항목 간의 아래쪽 마진을 추가 */
	text-decoration: none; /* 링크의 밑줄 제거 */
	color: #344767;
}

.sidebar li :hover {
	color: #4caf50;
	text-shadow: 0px 0px 5px rgba(0, 0, 0, 0.1);
}

.active {
	color: #4caf50 !important;
}
</style>
