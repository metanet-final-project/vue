<template>
	<section class="py-3">
		<div class="container">
			<div class="row">
				<div class="col-lg-6">
					<h3 class="mb-5">분실물 게시판</h3>
				</div>
			</div>
			<div class="row">
				<template v-for="lost in getLostItem" :key="lost.id">
					<div class="col-lg-3 col-sm-6">
						<TransparentBlogCard
							:image="post4"
							:title="lost.title"
							:description="lost.contents"
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
import post4 from '@/assets/img/분실물.webp';
import axios from 'axios';
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const getLostItem = ref([]);
const router = useRouter();
const getlost = async () => {
	try {
		const res = await axios.get(`/api/lost/findAll`);
		if (res.data) getLostItem.value = res.data;
		//console.log(res.data[0].title);
		console.log(getLostItem.value[0].title);
	} catch (error) {
		console.error(error);
	}
};
getlost();

const LostItemMem = lost => {
	router.push({ path: '/board/LostItemMem', query: { id: lost.id } });
};
</script>
