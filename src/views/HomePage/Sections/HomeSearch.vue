<template>
	<section class="my-5 pt-5">
		<div class="container">
			<div class="row">
				<div class="col-md-6 m-auto">
					<h4>승차권 예매</h4>
					<p class="mb-4 fw-bolder">
						예매 가능한 좌석정보와 운행정보, 간펀한 결제 방식으로 온라인 승차권
						예매를 하실 수 있습니다. <br />시외버스 예매 시스템으로 안전하고
						편리하게 여행하세요.
					</p>
					<div class="row">
						<ModalStarting @stId="startingTerminal" />
						<ModalEnding @et="endingTerminal" :variable="parentVariable" />
					</div>
					<div class="row mt-3">
						<div class="col-6">
							<div class="input-group input-group-static my-3">
								<label>가는일</label>
								<input
									type="date"
									class="form-control"
									v-model="searchInfo.stDate"
								/>
							</div>
						</div>
						<div class="col-6">
							<div class="input-group input-group-static my-3">
								<label>가는시간</label>
								<input
									type="time"
									class="form-control"
									v-model="searchInfo.stTime"
								/>
							</div>
						</div>
					</div>
					<!-- <div class="row mt-3">
						<div class="col-3">
							<div class="col-9">
								<small class="font-weight-bold">어른</small>
								<select class="form-select p-2">
									<option value="0">0</option>
									<option value="1">1</option>
									<option value="2">2</option>
									<option value="3">3</option>
									<option value="4">4</option>
								</select>
							</div>
						</div>
						<div class="col-3">
							<div class="col-9">
								<small class="font-weight-bold">청소년</small>
								<select class="form-select p-2">
									<option value="0">0</option>
									<option value="1">1</option>
									<option value="2">2</option>
									<option value="3">3</option>
									<option value="4">4</option>
								</select>
							</div>
						</div>
						<div class="col-3">
							<div class="col-9">
								<small class="font-weight-bold">아동</small>
								<select class="form-select p-2">
									<option value="0">0</option>
									<option value="1">1</option>
									<option value="2">2</option>
									<option value="3">3</option>
									<option value="4">4</option>
								</select>
							</div>
						</div>
					</div> -->
					<div class="row mt-3">
						<div class="text-center">
							<MaterialButton
								class="my-4 mb-2"
								variant="contained"
								color="dark"
								fullWidth
								@click="goSchedule"
								>조회</MaterialButton
							>
						</div>
					</div>
				</div>
				<div class="col-md-5 ms-auto mt-6 md-mt-0">
					<CenteredBlogCard
						image="https://i0.wp.com/www.areyouawakening.com/wp-content/uploads/2020/02/lostitem1.jpg?fit=999%2C666&ssl=1"
						title="분실물 신고"
						description="두고 내린 물건이
					있으신가요? 분실물 신고 서비스를 이용해 빠른 접수를 하실 수 있습니다."
						:action="{ label: '접수하기', color: 'bg-dark text-white' }"
					/>
				</div>
			</div>
		</div>
	</section>
</template>

<script setup>
import { onMounted } from 'vue';
import { ref } from 'vue';
import MaterialButton from '@/components/MaterialButton.vue';
import setMaterialInput from '@/assets/js/material-input';
import CenteredBlogCard from '@/examples/cards/blogCards/CenteredBlogCard.vue';
import ModalStarting from '@/components/ModalStarting.vue';
import ModalEnding from '@/components/ModalEnding.vue';
import axios from 'axios';

onMounted(() => {
	setMaterialInput();
});

const stId = ref(); // 출발지 터미널 정보
const endId = ref(); // 도착지 터미널 정보
let parentVariable = stId; // 출발지 정보 props 전달
const searchInfo = ref({}); // 배차조회에 사용될 검색 조건

const startingTerminal = async id => {
	const result = await axios.get(`/api/terminal/findById/${id}`);
	stId.value = result.data;
};

const endingTerminal = async id => {
	const result = await axios.get(`/api/terminal/findById/${id}`);
	endId.value = result.data;
};

const goSchedule = () => {
	searchInfo.value.stId = stId.value.id;
	searchInfo.value.endId = endId.value.id;
	console.log(searchInfo.value);
};
</script>
