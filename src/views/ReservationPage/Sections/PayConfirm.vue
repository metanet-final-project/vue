<template>
	<section class="py-sm-7 py-5 position-relative">
		<div class="container">
			<div class="row">
				<div class="col-12 mx-auto">
					<div class="mt-n8 mt-md-n9 text-center">
						<div class="blur-shadow-avatar"></div>
					</div>
					<div class="row py-4">
						<h3 class="mb-0">승차권 정보</h3>
						<template v-if="seatInfo">
							<table class="tickettb">
								<tr>
									<th colspan="2">
										{{
											moment(scheduleInfo.startTime)
												.locale('ko')
												.format('YYYY년 MM월 DD일 ddd HH:mm')
										}}
									</th>
								</tr>
								<tr>
									<td class="start" rowspan="2">
										<img class="startimg" src="@/assets/img/출발.png" alt="" />
										{{ scheduleInfo.routeDTO.startTerminal.name }}
									</td>
									<td>
										<span class="ssub1">회사</span>
										<span class="ssub2">{{
											scheduleInfo.busDTO.companyDTO.name
										}}</span>
									</td>
								</tr>
								<tr>
									<td>
										<span class="ssub1">등급</span>
										<span class="ssub2">{{ scheduleInfo.busDTO.grade }}</span>
									</td>
								</tr>
								<tr>
									<td class="end" rowspan="2">
										<img class="endimg" src="@/assets/img/도착.png" alt="" />
										{{ scheduleInfo.routeDTO.endTerminal.name }}
									</td>
									<td>
										<span class="ssub1">구분</span>
										<span
											class="ssub2"
											v-for="seat in seatInfo"
											:key="seat.id"
											>{{ seat.ageName }}</span
										>
									</td>
								</tr>
								<tr>
									<td>
										<span class="ssub1">좌석</span>
										<span class="ssub2" v-for="seat in seatInfo" :key="seat.id"
											>{{ seat.seatNum }} 번</span
										>
									</td>
								</tr>
							</table>
						</template>
					</div>
					<div class="row py-4">
						<h3 class="mb-0">결제완료</h3>

						<table class="pay">
							<tr>
								<th>결제수단</th>
								<td>신용카드</td>
								<th>결제금액</th>
								<td>{{ totalSeatPrice.toLocaleString() }}원</td>
							</tr>
						</table>
					</div>
				</div>
			</div>
		</div>
	</section>
</template>

<script setup>
import { ref } from 'vue';
import axios from 'axios';
import moment from 'moment';
import { useRoute } from 'vue-router';
const route = useRoute();
const schedule = ref({
	id: route.query.id,
	routeId: route.query.routeId,
});
const booking = ref({
	payId: route.query.payId,
});
const seatInfo = ref(JSON.parse(route.query.seat));
let totalSeatPrice = 0;
seatInfo.value.forEach(seat => {
	totalSeatPrice += seat.price;
});
console.log('좌석 가격: ' + totalSeatPrice);
const scheduleInfo = ref({
	id: null,
	routeDTO: {
		id: null,
		startTerminal: {
			id: null,
			name: null,
			location: null,
		},
		endTerminal: {
			id: null,
			name: null,
			location: null,
		},
		travelTime: null,
	},
	startTime: null,
	endTime: null,
	busDTO: {
		id: null,
		busNum: null,
		companyDTO: {
			id: null,
			name: null,
			phone: null,
		},
		grade: null,
	},
	price: null,
});
const ticket = async () => {
	const response = await axios.get(
		`/api/schedule/find/${schedule.value.id}/${schedule.value.routeId}`,
	);
	scheduleInfo.value = response.data;
};
ticket();

const payConfirm = async () => {
	const response = await axios.get(
		`/api/booking/find/bypayid/${booking.value.payId}`,
	);
	console.log(response.data);
};
payConfirm();
</script>
<style scoped>
.tickettb {
	font-family: arial, sans-serif;
	border-collapse: collapse;
	width: 100%;
}
.tickettb td,
.tickettb th {
	border-left: 1px solid #dddddd;
	border-right: 1px solid #dddddd;
	text-align: left;
	padding: 8px;
}
.tickettb td {
	width: 50%;
}

.tickettb tr:nth-child(1) {
	color: white;
	background-color: #344767;
}

.tickettb tr:last-child {
	border-bottom: 2px solid #dddddd;
}
.tickettb .start {
	font-size: 30px;
	padding: 0 20px;
}
.tickettb .end {
	font-size: 30px;
	padding: 0 20px;
}
.tickettb .ssub1 {
	padding: 0 20px;
}
.tickettb .ssub2 {
	display: inline-block;
	font-size: 20px;
	font-weight: bold;
	padding: 0 10px; /* 좌우 여백 값으로 설정 */
	vertical-align: middle; /* 세로 위치 설정 */
}
.startimg {
	width: 50px;
}
.endimg {
	width: 50px;
}
.pay {
	width: 100%;
	color: white;
	background-color: #344767;
	height: 50px;
	font-size: 20px;
}
.pay th,
.pay td {
	width: 25%;
}
.pay th {
	color: #59b55c;
	text-align: center;
}
.pay td {
	border-right: 1px solid white;
	text-align: left;
}
</style>
