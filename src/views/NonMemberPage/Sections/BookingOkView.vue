<template>
	<section class="py-sm-7 py-5 position-relative">
		<div class="container">
			<div class="row">
				<div class="col-12 mx-auto">
					<div class="mt-n8 mt-md-n9 text-center">
						<div class="blur-shadow-avatar"></div>
					</div>
					<div class="row py-4 pt-8">
						<div class="col-6">
							<h3 class="mb-0"></h3>
						</div>
						<table class="table">
							<thead>
								<tr>
									<th>번호</th>
									<th>구분</th>
									<th>노선</th>
									<th>배차정보</th>
									<th>매수</th>
									<th>결제금액</th>
									<th>상세조회</th>
								</tr>
							</thead>
							<tbody>
								<tr v-for="(booking, index) in myBookingList" :key="booking.id">
									<td>{{ index + 1 }}</td>
									<td>편도</td>
									<td>
										<div class="d-flex">
											<img class="small" src="@/assets/img/small.png" alt="" />
											<div>
												<p class="m-0">
													{{ booking.routeDTO.startTerminal.name }}
												</p>
												<p class="m-0 mt-2">
													{{ booking.routeDTO.endTerminal.name }}
												</p>
											</div>
										</div>
									</td>
									<td>
										{{
											moment(booking.scheduleDTO.startTime).format(
												'YYYY년 MM월 DD일 HH:mm',
											)
										}}
									</td>
									<td>{{ booking.ageDTO.name }} 1명</td>
									<td>{{ booking.price.toLocaleString() }}원</td>
									<td>
										<MaterialButton
											class="mb-2 col-12"
											variant="contained"
											color="dark"
											fullWidth
											@click="showModal = true"
										>
											조회
										</MaterialButton>
										<!--	Modal	-->
										<div v-if="showModal" class="modal" style="display: flex">
											<div class="modal-dialog">
												<div
													class="modal-content"
													style="
														box-shadow: 0 2px 2px rgba(0, 0, 0, 0.25),
															0 1px 1px rgba(0, 0, 0, 0.22);
													"
												>
													<div class="modal-header">
														<h5 class="modal-title">결제내역 상세조회</h5>
														<MaterialBadge
															color="light"
															rounded
															class="text-dark"
															@click.prevent="showModal = false"
															style="cursor: pointer"
														>
															닫기
														</MaterialBadge>
													</div>
													<div class="modal-body">
														<table class="tickettb">
															<tr>
																<th colspan="2">2023. 4. 29. 토 06:00</th>
															</tr>
															<tr>
																<td class="start" rowspan="2">
																	<img
																		class="startimg"
																		src="@/assets/img/출발.png"
																		alt=""
																	/>
																	{{ booking.routeDTO.startTerminal.name }}
																</td>
																<td>
																	<span class="ssub1">회사</span>
																	<span class="ssub2">{{
																		booking.scheduleDTO.busDTO.companyDTO.name
																	}}</span>
																</td>
															</tr>
															<tr>
																<td>
																	<span class="ssub1">등급</span>
																	<span class="ssub2">{{
																		booking.scheduleDTO.busDTO.grade
																	}}</span>
																</td>
															</tr>
															<tr>
																<td class="end" rowspan="2">
																	<img
																		class="endimg"
																		src="@/assets/img/도착.png"
																		alt=""
																	/>
																	{{ booking.routeDTO.endTerminal.name }}
																</td>
																<td>
																	<span class="ssub1">매수</span>
																	<span class="ssub2"
																		>{{ booking.ageDTO.name }} 1명</span
																	>
																</td>
															</tr>
															<tr>
																<td>
																	<span class="ssub1">좌석</span>
																	<span class="ssub2">{{
																		booking.seatNum
																	}}</span>
																</td>
															</tr>
														</table>
													</div>
													<div class="modal-footer justify-content-between">
														<MaterialButton
															variant="contained"
															color="dark"
															class="mb-0"
														>
															삭제하기
														</MaterialButton>
													</div>
												</div>
											</div>
										</div>
									</td>
								</tr>
							</tbody>
						</table>
					</div>
				</div>
			</div>
		</div>
	</section>
</template>
<script setup>
import MaterialButton from '@/components/MaterialButton.vue';
import { ref } from 'vue';
import axios from 'axios';
import MaterialBadge from '@/components/MaterialBadge.vue';
import moment from 'moment';
const showModal = ref(false);

let myBookingList = ref('');

const getMyBookingList = async () => {
	const res = await axios.get(`/api/booking/find/findByNonMemId/123`);
	myBookingList.value = res.data;
	console.log(myBookingList.value);
};
getMyBookingList();
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
.small {
	width: 7%;
}
.d-flex {
	display: flex;
	align-items: center;
	justify-content: center;
}
.table {
	width: 100%;
	text-align: center;
	border-top: 3px solid #344767;
	border-bottom: 0.5px solid #c0c0c0;
	border-right: 0.5px solid #c0c0c0;
	border-left: 0.5px solid #c0c0c0;
	border-collapse: collapse;
}
thead {
	border-bottom: 3px solid #b1b2b5;
}
body {
	border-bottom: 3px solid #b1b2b5;
}
.modal-dialog {
	width: 100%;
}
</style>
