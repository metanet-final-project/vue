<template>
	<DefaultNavbar transparent />
	<header class="bg-gradient-dark">
		<div
			class="page-header min-vh-75"
			style="background: ; background-size: cover"
			:style="{ background: `url(${headimage})` }"
		>
			<span class="mask bg-gradient-dark opacity-6"></span>
			<div class="container">
				<div class="row justify-content-center">
					<div class="col-lg-8 text-center mx-auto my-auto">
						<h1 class="text-white">
							<span class="text-white" id="typed"></span>
						</h1>
						<div id="typed-strings">
							<h1>조회하고</h1>
							<h1>예매하고</h1>
							<h1>버스타요</h1>
						</div>
						<p class="lead mb-4 text-white">
							쉽고 빠른 시외버스 예매는 언제나 버스타요
						</p>
					</div>
				</div>
			</div>
		</div>
	</header>
	<div class="card card-body blur shadow-blur mx-3 mx-md-4 mt-n6">
		<Search />
		<LostSection />
	</div>
	<DefaultFooter />
</template>

<script setup>
import { onMounted, onUnmounted } from 'vue';
import DefaultNavbar from '@/layouts/Navbar.vue';
import DefaultFooter from '@/layouts/Footer.vue';

//image
import headimage from '@/assets/img/busimage.png';

//typed
import Typed from 'typed.js';

//sections
import Search from './Sections/HomeSearch.vue';
import LostSection from './Sections/LostSection.vue';

let typed;
function initTyped() {
	typed = new Typed('#typed', {
		stringsElement: '#typed-strings',
		typeSpeed: 90,
		backSpeed: 90,
		backDelay: 200,
		startDelay: 500,
		loop: true,
	});
}

//hooks
const body = document.getElementsByTagName('body')[0];
onMounted(() => {
	body.classList.add('bg-gray-200');

	if (document.getElementById('typed')) {
		initTyped();
	}
});

onUnmounted(() => {
	body.classList.remove('bg-gray-200');
	if (typed) {
		typed.destroy();
	}
});
</script>
