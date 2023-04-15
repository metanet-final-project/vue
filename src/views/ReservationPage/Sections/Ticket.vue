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

						<table>
							<tr>
								<th colspan="2">2023. 4. 29. 토 06:00</th>
							</tr>
							<tr>
								<td class="start" rowspan="2">
									<img src="@/assets/img/출발.png" alt="" />
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
									<img src="@/assets/img/도착.png" alt="" />
									{{ scheduleInfo.routeDTO.endTerminal.name }}
								</td>
								<td>
									<span class="ssub1">매수</span>
									<span class="ssub2">일반 1명</span>
								</td>
							</tr>
							<tr>
								<td>
									<span class="ssub1">좌석</span>
									<span class="ssub2">8</span>
								</td>
							</tr>
						</table>
					</div>
				</div>
			</div>
		</div>
	</section>
</template>

<script setup>
import axios from 'axios';
import { ref } from 'vue';
const schedule = ref({
	id: 1,
	routeId: 1,
});

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
	const result = await axios.get(
		`/api/schedule/find/${schedule.value.id}/${schedule.value.routeId}`,
	);
	console.log(result.data);
	scheduleInfo.value = result.data;
	//console.log(result.data);
}; // 배차 정보
ticket();
</script>
<style scoped>
table {
	font-family: arial, sans-serif;
	border-collapse: collapse;
	width: 100%;
}

td,
th {
	border-left: 1px solid #dddddd;
	border-right: 1px solid #dddddd;
	text-align: left;
	padding: 8px;
}
td {
	width: 50%;
}

tr:nth-child(1) {
	color: white;
	background-color: #344767;
}

tr:last-child {
	border-bottom: 2px solid #dddddd;
}
.start {
	font-size: 30px;
	padding: 0 20px;
}
.end {
	font-size: 30px;
	padding: 0 20px;
}
.ssub1 {
	padding: 0 20px;
}
.ssub2 {
	display: inline-block;
	font-size: 20px;
	font-weight: bold;
	padding: 0 10px; /* 좌우 여백 값으로 설정 */
	vertical-align: middle; /* 세로 위치 설정 */
}
img {
	width: 50px;
}
</style>
