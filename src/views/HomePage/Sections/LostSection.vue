<template>
	<section class="py-3">
		<div class="container">
			<div class="row">
				<div class="col-lg-6">
					<h3 class="mb-5">분실물 게시판</h3>
				</div>
			</div>
			<div class="row">
				<div class="col-lg-3 col-sm-6">
					<TransparentBlogCard
						:image="imageUrl" alt="image"
						title="(동서울) 지갑"
						description="2023-04-19(수) 동서울 터미널에서 분실물이 발생하였습니다. 분실물이 있으신 고객께서는 해당 터미널로 연락주시기 바랍니다."
					/>
				</div>
				<div class="col-lg-3 col-sm-6">
					<TransparentBlogCard
						:image="post4"
						title="(서울고속버스) 에어팟, 화장품"
						description="2023-04-01 서울고속버스터미널에서 에어팟, 화장품 등의 분실물이 발생하였습니다. "
					/>
				</div>
				<div class="col-lg-3 col-sm-6">
					<TransparentBlogCard
						:image="post4"
						title="(서울고속버스) 에어팟, 화장품"
						description="2023-04-01 서울고속버스터미널에서 에어팟, 화장품 등의 분실물이 발생하였습니다. "
					/>
				</div>
				<div class="col-lg-3 col-sm-6">
					<TransparentBlogCard
						:image="post4"
						title="(서울고속버스) 에어팟, 화장품"
						description="2023-04-01 서울고속버스터미널에서 에어팟, 화장품 등의 분실물이 발생하였습니다. "
					/>
				</div>
			</div>
		</div>
	</section>
</template>
<script setup>
import TransparentBlogCard from '@/examples/cards/blogCards/TransparentBlogCard.vue';
import post4 from '@/assets/img/분실물.webp';
import {ref, onMounted} from 'vue';

const filename = '111.png';
const imageUrl = `http://localhost:8084/api/getImage/${filename}`;

onMounted(()=>{
	getImage();
})

const getImage = async()=>{
	try{
		const result = await axios.get(`/api/getImage/${filename}`,{
			responseType: 'arraybuffer'
		})
		const blob = new Blob([result.data],{type: 'image/png'})
		imageUrl.value = URL.createObjectURL(blob)
	}catch(error){
			console.error(error);
	}
}


</script>
