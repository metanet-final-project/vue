<template>
	<DefaultNavbar transparent />
	<Header>
		<div
			class="page-header align-items-start min-vh-100"
			style="background: ; background-size: cover"
			:style="{
				background: `url(${headimage})`,
			}"
			loading="lazy"
		>
			<span class="mask bg-gradient-dark opacity-6"></span>
			<div class="container my-auto">
				<div class="row">
					<div class="col-lg-4 col-md-8 col-12 mx-auto">
						<div class="card z-index-0 fadIn3 fadeInBottom">
							<div
								class="card-header p-0 position-relative mt-n4 mx-3 z-index-2"
							>
								<div class="bg-dark shadow-dark border-radius-lg py-3 pe-1">
									<h4
										class="text-white font-weight-bolder text-center mt-2 mb-0"
									>
										로그인
									</h4>
								</div>
							</div>
							<div class="card-body">
								<form role="form" class="text-start">
									<div class="input-group input-group-outline my-3">
										<label class="form-label">아이디</label>
										<input
											type="text"
											class="form-control"
											id="loginId"
											v-model="loginRequest.loginId"
										/>
									</div>
									<div class="input-group input-group-outline my-3">
										<label class="form-label">비밀번호</label>
										<input
											type="password"
											class="form-control"
											id="password"
											v-model="loginRequest.password"
										/>
									</div>
									<div class="text-center">
										<MaterialButton
											class="my-4 mb-2"
											variant="contained"
											color="dark"
											fullWidth
											@click.prevent="tryLogin"
											>로그인</MaterialButton
										>
									</div>
									<p class="mt-4 text-sm text-center">
										<a href="" @click.prevent="goRegisterView"
											>회원이 아니신가요?</a
										>
									</p>
								</form>
							</div>
						</div>
					</div>
				</div>
			</div>
			<!--  footer start -->
			<footer class="footer position-absolute bottom-2 py-2 w-100">
				<div class="container">
					<p class="text-white my-4 text-center text-sm font-weight-normal">
						Metenet internship with Kosa
						{{ new Date().getFullYear() }}. 버스타요
					</p>
				</div>
			</footer>
			<!--  footer end  -->
		</div>
	</Header>
</template>

<script setup>
import { onMounted } from 'vue';
import { useRouter } from 'vue-router';
import { ref } from 'vue';
import axios from 'axios';
import DefaultNavbar from '@/layouts/Navbar.vue';
import Header from '@/examples/Header.vue';
import MaterialButton from '@/components/MaterialButton.vue';
import setMaterialInput from '@/assets/js/material-input';
import Swal from 'sweetalert2';

//images
import headimage from '@/assets/img/busimage.png';

const router = useRouter();
const loginRequest = ref({});
const goRegisterView = () => router.push({ name: 'Register' });
const saveToken = token => localStorage.setItem('token', token);
const saveLoginId = loginId => localStorage.setItem('loginId', loginId);

const tryLogin = async () => {
	try {
		const result = await axios.post('/api/login', loginRequest.value);
		if (result.data.loginId != null) {
			saveToken(result.data.token);
			saveLoginId(result.data.loginId);

			showToast('success', '로그인 성공');
			router.push({ name: 'Home' });
		}
	} catch (error) {
		showToast('error', '올바른 정보를 입력해주세요');

		console.error(error);
	}
};

const Toast = Swal.mixin({
	toast: true,
	position: 'bottom-end',
	showConfirmButton: false,
	timer: 3000,
	timerProgressBar: true,
	didOpen: toast => {
		toast.addEventListener('mouseenter', Swal.stopTimer);
		toast.addEventListener('mouseleave', Swal.resumeTimer);
	},
});

const showToast = (icon, title) => {
	Toast.fire({
		icon: icon,
		title: title,
	});
};

onMounted(() => {
	setMaterialInput();
});
</script>
