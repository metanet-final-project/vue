<template>
	<Navbar transparent />
	<Header>
		<div
			class="page-header min-height-400"
			:style="{ backgroundImage: `url(${image})` }"
			loading="lazy"
		>
			<div class="container">
				<div class="row justify-content-center">
					<div class="col-lg-8 text-center mx-auto my-auto">
						<h1 class="text-white">
							<span class="text-white" id="typed"></span>
						</h1>
						<p class="lead mb-4 text-white">분실물 상세보기</p>
					</div>
				</div>
			</div>
			<span class="mask bg-gradient-dark opacity-8"></span>
		</div>
	</Header>
	<div class="card card-body blur shadow-blur mx-3 mx-md-4 mt-n6 mb-4">
		<section class="py-sm-7 py-5 position-relative">
			<div class="container">
				<div class="row justify-content-center">
					<div class="col-lg-4">
						<img
							:src="`http://localhost:8084/api/getImage/${getLostItem.fileName}`"
							alt=""
							style="width: 100%"
						/>
					</div>
					<div class="col-lg-4">
						<h3 class="m-1 p-2">{{ getLostItem.title }}</h3>
						<ul class="m-1 p-2">
							<li>
								<p class="p1">관리번호:</p>
								<p class="p2">{{ getLostItem.id }}</p>
							</li>
							<li>
								<p class="p1">습득날짜:</p>
								<p class="p2">
									{{
										moment(getLostItem.findDate).format('YYYY년 MM월 DD일 HH시')
									}}
								</p>
							</li>
							<li>
								<p class="p1">습득장소:</p>
								<p class="p2">{{ getLostItem.findPlace }}</p>
							</li>
							<li>
								<p class="p1">보관장소:</p>
								<p class="p2">{{ getLostItem.findPlace }}</p>
							</li>
							<li>
								<p class="p1">유실물상태:</p>
								<p class="p2 state">보관중</p>
							</li>
						</ul>
					</div>
				</div>
				<div class="row justify-content-center">
					<div class="col-lg-8 pt-5">
						<p class="p1">내용</p>
						<p class="p2 content">
							{{ getLostItem.contents }}
						</p>
						<MaterialButton
							variant="contained"
							color="dark"
							class="mb-0"
							@click.prevent="$router.push('/')"
							>돌아가기</MaterialButton
						>
					</div>
				</div>
			</div>
		</section>
	</div>

	<Footer />
</template>

<script setup>
import Navbar from '@/layouts/Navbar.vue';
import Header from '@/examples/Header.vue';
import Footer from '@/layouts/Footer.vue';
import image from '@/assets/img/busimage.png';
import MaterialButton from '@/components/MaterialButton.vue';
import { ref } from 'vue';
import moment from 'moment';
import axios from 'axios';
import { useRoute } from 'vue-router';
const getLostItem = ref({
	title: null,
	findPlace: null,
	contents: null,
	findDate: null,
	fileName: null,
});

const LostItemMem = () => {
	const route = useRoute();
	const id = route.query.id;

	const getLostById = async () => {
		try {
			const res = await axios.get(`/api/lost/findById/${id}`);
			getLostItem.value = res.data;
		} catch (error) {
			console.error(error);
		}
	};
	getLostById();
	const getImageUrl = async () => {
		return getLostItem.value
			? `@/assets/img/${getLostItem.value.fileName}`
			: '';
	};
	getImageUrl();
};
LostItemMem();
</script>

<style scoped>
img {
	float: right;
}
.lead {
	font-size: 50px;
	font-weight: bold;
}
ul {
	list-style-type: none;
}
.p1 {
	display: inline-block;
	width: 160px;
	color: #000;
	font-size: 20px;
	font-weight: bold;
}
.p2 {
	display: inline-block;
	color: #344767;
	font-size: 20px;
	font-weight: 550;
}
.state {
	display: inline-block;
	color: #d23532;
	font-size: 20px;
	font-weight: 550;
}
.content {
	display: block;
}
</style>
