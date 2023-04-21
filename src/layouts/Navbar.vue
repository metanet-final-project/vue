<script setup>
import { RouterLink, useRouter } from 'vue-router';
import { ref, watch } from 'vue';
import { useWindowsWidth } from '@/assets/js/useWindowsWidth';
import axios from 'axios';
import Swal from 'sweetalert2';

const props = defineProps({
	action: {
		type: Object,
		route: String,
		color: String,
		label: String,
		default: () => ({
			route: '/',
			color: 'bg-light',
		}),
	},
	transparent: {
		type: Boolean,
		default: false,
	},
	light: {
		type: Boolean,
		default: false,
	},
	dark: {
		type: Boolean,
		default: false,
	},
	sticky: {
		type: Boolean,
		default: false,
	},
	darkText: {
		type: Boolean,
		default: false,
	},
});

// set text color
const getTextColor = () => {
	let color;
	if (props.transparent && textDark.value) {
		color = 'text-dark';
	} else if (props.transparent) {
		color = 'text-white';
	} else {
		color = 'text-dark';
	}

	return color;
};

// set nav color on mobile && desktop

let textDark = ref(props.darkText);
const { type } = useWindowsWidth();

if (type.value === 'mobile') {
	textDark.value = true;
} else if (type.value === 'desktop' && textDark.value == false) {
	textDark.value = false;
}

watch(
	() => type.value,
	newValue => {
		if (newValue === 'mobile') {
			textDark.value = true;
		} else {
			textDark.value = false;
		}
	},
);

const router = useRouter();
const goToMyPage = () => router.push({ name: 'Mypage' });
const goToAdminPage = () => router.push({ name: 'AdminMember' });
const goToHome = () => router.push({ name: 'Home' });

let login = ref();
const member = ref(null);
const isLogin = async () => {
	const result = await axios.get(
		`/api/member/findByLoginId/${localStorage.getItem('loginId')}`,
		{
			headers: {
				Authorization: 'Bearer ' + localStorage.getItem('token'),
			},
		},
	);
	if (result.data.loginId != null) {
		member.value = result.data;
		login.value = true;
	} else login.value = false;
};

const signUp = () => {
	if (localStorage.getItem('loginId') != null) {
		isLogin();
	}
};
signUp();

const doLogout = () => {
	localStorage.removeItem('loginId');
	localStorage.removeItem('token');
	localStorage.removeItem('auth');
	router.replace({ name: 'Home' });
	showToast('info', '잠시 후, 로그아웃됩니다');
	setTimeout(() => router.go(0), 2000);
};

const Toast = Swal.mixin({
	toast: true,
	position: 'bottom-end',
	showConfirmButton: false,
	timer: 2000,
});

const showToast = (icon, title) => {
	Toast.fire({
		icon: icon,
		title: title,
	});
};
</script>
<template>
	<nav
		class="navbar navbar-expand-lg top-0"
		:class="{
			'z-index-3 w-100 shadow-none navbar-transparent position-absolute my-3':
				props.transparent,
			'my-3 blur border-radius-lg z-index-3 py-2 shadow py-2 start-0 end-0 mx-4 position-absolute mt-4':
				props.sticky,
			'navbar-light bg-white py-3': props.light,
			' navbar-dark bg-gradient-dark z-index-3 py-3': props.dark,
		}"
	>
		<div
			:class="
				props.transparent || props.light || props.dark
					? 'container'
					: 'container-fluid px-0'
			"
		>
			<a
				class="navbar-brand d-none d-md-block fs-5"
				:class="[
					(props.transparent && textDark.value) || !props.transparent
						? 'text-dark font-weight-bolder ms-sm-3'
						: 'text-white font-weight-bolder ms-sm-3',
				]"
				rel="tooltip"
				title="버스타요"
				data-placement="bottom"
				@click.prevent="goToHome"
				style="cursor: pointer"
			>
				<img
					v-if="props.transparent"
					src="@/assets/img/bustayo.png"
					alt=""
					style="width: 150px"
					class="rounded"
				/>
				<img
					v-if="props.light"
					src="@/assets/img/bustayo-black.png"
					alt=""
					style="width: 150px"
					class="rounded"
				/>
			</a>
			<div
				class="collapse navbar-collapse w-100 pt-3 pb-2 py-lg-0"
				id="navigation"
			>
				<ul class="navbar-nav navbar-nav-hover ms-auto">
					<li v-if="login" class="nav-item dropdown dropdown-hover mx-2">
						<a
							role="button"
							class="nav-link ps-2 d-flex cursor-pointer align-items-center"
							:class="getTextColor()"
							id="dropdownMenuBlocks"
							data-bs-toggle="dropdown"
							aria-expanded="false"
							@click.prevent="goToAdminPage"
						>
							<i
								class="material-icons opacity-6 me-2 text-md"
								:class="getTextColor()"
								>dashboard</i
							>
							관리자
						</a>
					</li>
					<li class="nav-item dropdown dropdown-hover mx-2">
						<a
							v-if="login"
							role="button"
							class="nav-link ps-2 d-flex cursor-pointer align-items-center"
							:class="getTextColor()"
							id="dropdownMenuBlocks"
							data-bs-toggle="dropdown"
							aria-expanded="false"
							@click.prevent="goToMyPage"
						>
							<i
								class="material-icons opacity-6 me-2 text-md"
								:class="getTextColor()"
								>article</i
							>
							마이페이지
						</a>
					</li>
				</ul>
				<!--	login|register button start	-->
				<ul class="navbar-nav d-lg-block d-none">
					<li class="nav-item" v-if="login">
						<RouterLink
							:to="{ name: 'Home' }"
							class="btn btn-sm mb-0"
							:class="action.color"
							@click.prevent="doLogout"
							>로그아웃
						</RouterLink>
					</li>
					<li class="nav-item" v-if="!login">
						<RouterLink
							:to="{ name: 'Login' }"
							class="btn btn-sm mb-0"
							:class="action.color"
							>로그인 | 회원가입
						</RouterLink>
					</li>
				</ul>
				<!--	login|register button end	-->
			</div>
		</div>
	</nav>
	<!-- End Navbar -->
</template>
