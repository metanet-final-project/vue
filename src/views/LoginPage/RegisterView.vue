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
								<div class="bg-dark shadow-success border-radius-lg py-3 pe-1">
									<h4
										class="text-white font-weight-bolder text-center mt-2 mb-0"
									>
										회원가입
									</h4>
								</div>
							</div>
							<div class="card-body">
								<form role="form" class="text-start">
									<MaterialInput
										id="email"
										class="input-group-outline my-3"
										:label="{ text: '이메일', class: 'form-label' }"
										type="email"
									/>
									<MaterialInput
										id="password"
										class="input-group-outline my-3"
										:label="{ text: '비밀번호', class: 'form-label' }"
										type="password"
									/>
									<MaterialInput
										id="password"
										class="input-group-outline my-3"
										:label="{ text: '비밀번호 확인', class: 'form-label' }"
										type="password"
									/>
									<MaterialInput
										id="username"
										class="input-group-outline my-3"
										:label="{ text: '사용자 이름', class: 'form-label' }"
										type="text"
									/>
									<div class="text-center">
										<MaterialButton
											class="my-4 mb-2"
											variant="contained"
											color="dark"
											fullWidth
											>회원가입</MaterialButton
										>
									</div>
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
//components
import DefaultNavbar from '@/layouts/Navbar.vue';
import Header from '@/examples/Header.vue';
//material
import MaterialInput from '@/components/MaterialInput.vue';
import MaterialButton from '@/components/MaterialButton.vue';
import setMaterialInput from '@/assets/js/material-input';

import headimage from '@/assets/img/busimage.png';

onMounted(() => {
	setMaterialInput();
});
</script>
