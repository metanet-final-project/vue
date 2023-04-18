<template>
	<Navbar light />

	<h3
		style="
			margin-top: 50px;

			text-align: center;
			font-weight: lighter;
			color: black;
		"
	>
		결제 내역
	</h3>
	<div class="table-container">
		<table class="table table-bordered">
			<thead style="border-top: 1px solid #b8becc">
				<tr>
					<th scope="col">결제일시</th>
					<th scope="col">구분</th>
					<th scope="col">노선</th>
					<th scope="col">배차정보</th>
					<th scope="col">매수</th>
					<th scope="col">결제금액</th>
				</tr>
			</thead>
			<tbody>
				<tr v-for="item in myPayList" :key="item.id">
					<td>
						<div class="value">2023.04.12</div>
						<div class="value">16:56</div>
					</td>
					<td class="value" style="color: #5691bd">편도</td>
					<td>
						<div class="route-name">{{ item.routeDTO.startTerminal.name }}</div>
						<div class="route-name bg_ico_departure">
							<span style="margin-left: 20px">{{
								item.routeDTO.endTerminal.name
							}}</span>
						</div>
					</td>
					<td>
						<span class="value">{{
							moment(item.scheduleDTO.startTime).format(
								'YYYY년 MM월 DD일 HH:mm',
							)
						}}</span>

						<span class="value">{{ item.scheduleDTO.busDTO.grade }}</span>
					</td>
					<td class="value">{{ item.ageDTO.name }} 1</td>
					<td
						class="value"
						v-bind:class="{
							bg_payment_cancel: item.state == '예매취소',
							bg_payment_com: item.state != '예매취소',
						}"
						style="font-weight: bold"
					>
						{{ item.price.toLocaleString() }}원
					</td>
				</tr>
			</tbody>
		</table>
		<ul class="desc-list">
			<li>결제 내역은 현재일 날짜기준 과거 3개월까지 조회 가능합니다.</li>
		</ul>
	</div>
	<Footer />
</template>

<script setup>
import Navbar from '@/layouts/Navbar.vue';
import Footer from '@/layouts/Footer.vue';
import axios from 'axios';
import { ref } from 'vue';
import moment from 'moment';
import 'moment/locale/ko';

moment.locale('ko');

let myPayList = ref('');

const getMyPayList = async () => {
	const res = await axios.get(
		`/api/booking/find/findByLoginId/${localStorage.getItem('loginId')}`,
	);
	myPayList.value = res.data;
	console.log(myPayList.value);
};
getMyPayList();
</script>
<style scoped>
.table-container {
	margin-top: 100px;
	display: block;
	padding-top: 50px;
	height: 100%;
	width: 60%;
	margin: 0px auto;

	font-size: 18px;
}

.table-bordered {
	border: 1px solid #f0f2f5;
}

.desc-list {
	padding-left: 16px;
	margin-left: 0px;
	margin-top: 50px;
}
.value {
	padding-left: 10px;
}

.route-name {
	padding-left: 10px;
	font-size: 18px;
	font-weight: bold;
}

.bg_payment_com {
	background: url(/src/assets/img/bg_payment_com_s.png) 100% 100% no-repeat;
}

.bg_payment_cancel {
	background: url(/src/assets/img/bg_payment_cancel_s.png) 100% 100% no-repeat;
}

.bg_ico_departure {
	background: url(/src/assets/img/bg_ico_departure.png) 10px 8px no-repeat;
	background-size: 14px auto;
}
</style>
