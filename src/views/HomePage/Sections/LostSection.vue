<template>
	<section class="py-3">
		<div class="container">
			<div class="row">
				<div class="col-lg-6">
					<h3 class="mb-5">분실물 게시판</h3>
				</div>
			</div>
			<div class="row">
				<template v-for="(lost, index) in lostList" :key="lost.id">
					<div class="col-lg-3 col-sm-6" v-if="index < 4">
						<TransparentBlogCard
							:image="`http://localhost:8084/api/getImage/${lost.fileName}`"
							:title="`${lost.title}`"
							:description="`${moment(lost.findDate).format(
								'YYYY년 MM월 DD일 HH:mm',
							)} / ${lost.contents}`"
							@click="LostItemMem(lost)"
						/>
					</div>
				</template>
			</div>
		</div>
	</section>
</template>
<script setup>
import TransparentBlogCard from '@/examples/cards/blogCards/TransparentBlogCard.vue';
//import post4 from '@/assets/img/분실물.webp';
import { ref, onMounted } from 'vue';
import axios from 'axios';
import moment from 'moment';
import { useRouter } from 'vue-router';
// const filename = '2111560_547394_1907.jpg';
const lostList = ref();
const router = useRouter();
const imageUrl = ref('');
onMounted(() => {
	getImage();
});

const getImage = async () => {
	try {
		const response = await axios.get('/api/lost/findAll');
		if (response.data != null) {
			lostList.value = response.data;
			console.log(lostList.value);
		}

		for (let i = 0; i < lostList.value.length; i++) {
			const result = await axios.get(
				`/api/getImage/${lostList.value[i].fileName}`,
				{
					responseType: 'arraybuffer',
				},
			);
			const blob = new Blob([result.data], { type: 'image/jpeg' });
			imageUrl.value = URL.createObjectURL(blob);
			console.log(imageUrl);
		}
	} catch (error) {
		console.error(error);
	}
};

const LostItemMem = lost => {
	router.push({ path: '/board/LostItemMem', query: { id: lost.id } });
};
</script>
