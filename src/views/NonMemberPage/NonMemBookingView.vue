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
						<h1 class="text-white">결제내역 조회</h1>
					</div>
				</div>
			</div>
			<span class="mask bg-gradient-dark opacity-8"></span>
		</div>
	</Header>
	<!--   Modal   -->
	<div
		v-if="showModal"
		class="modal"
		style="display: flex; justify-content: center; align-items: center"
	>
		<div
			class="modal-dialog justify-content-center align-items-center"
			style="width: 80%; max-width: 850px"
		>
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
				<div v-if="bookingList">
					<div class="modal-body">
						<table class="tickettb">
							<tr>
								<th colspan="2">
									{{
										moment(bookingList[0].scheduleDTO.scheduleDTO).format(
											'YYYY년 MM월 DD일 HH:mm',
										)
									}}
									출발
								</th>
							</tr>
							<tr>
								<td class="start" rowspan="2">
									<img class="startimg" src="@/assets/img/출발.png" alt="" />
									{{ bookingList[0].routeDTO.startTerminal.name }}
								</td>
								<td>
									<span class="ssub1">회사</span>
									<span class="ssub2">{{
										bookingList[0].scheduleDTO.busDTO.companyDTO.name
									}}</span>
								</td>
							</tr>
							<tr>
								<td>
									<span class="ssub1">등급</span>
									<span class="ssub2">{{
										bookingList[0].scheduleDTO.busDTO.grade
									}}</span>
								</td>
							</tr>
							<tr>
								<td class="end" rowspan="2">
									<img class="endimg" src="@/assets/img/도착.png" alt="" />
									{{ bookingList[0].routeDTO.endTerminal.name }}
								</td>
								<td>
									<span class="ssub1">구분</span>
									<span
										class="ssub2"
										v-for="booking in bookingList"
										:key="booking.id"
										>{{ booking.ageDTO.name }}
									</span>
								</td>
							</tr>
							<tr>
								<td>
									<span class="ssub1">좌석</span>
									<span
										class="ssub2"
										v-for="booking in bookingList"
										:key="booking.id"
										>{{ booking.seatNum }}</span
									>
								</td>
							</tr>
						</table>
						<div class="seat_detail">
							<span class="detailTicket">승차권</span>
							<table class="table detailtable">
								<thead class="table-light">
									<tr>
										<th>좌석번호</th>
										<th>상태</th>
										<th>구분</th>
										<th>출발지</th>
										<th>도착지</th>
										<th>취소</th>
										<th>발권</th>
									</tr>
								</thead>
								<tbody v-for="booking in bookingList" :key="booking.id">
									<tr
										:class="{
											'table-danger': booking.state == '예매취소',
											'table-warning': booking.state == '기간만료',
										}"
									>
										<td>{{ booking.seatNum }}</td>
										<td>
											<b>{{ booking.state }}</b>
										</td>
										<td>{{ booking.ageDTO.name }}</td>
										<td>{{ booking.routeDTO.startTerminal.name }}</td>
										<td>{{ booking.routeDTO.endTerminal.name }}</td>
										<td>
											<MaterialButton
												variant="contained"
												color="dark"
												class="cancelBut mb-0"
												@click="CancelBooking(booking)"
												:disabled="booking.state != '결제완료'"
												:id="booking.id"
											>
												예매취소
											</MaterialButton>
										</td>
										<td>
											<MaterialButton
												variant="contained"
												color="dark"
												class="mb-0"
												:disabled="booking.state != '결제완료'"
												@click="openTicketWindow(booking.id)"
											>
												티켓 출력
											</MaterialButton>
										</td>
									</tr>
								</tbody>
							</table>
						</div>
					</div>
					<div class="modal-footer d-flex justify-content-center"></div>
				</div>
			</div>
		</div>
	</div>
	<div class="content1 card card-body blur shadow-blur mx-3 mx-md-4 mt-n6 mb-4">
		<section class="py-sm-7 py-5 position-relative">
			<div class="container">
				<div class="row">
					<div class="col-12 mx-auto">
						<div class="mt-n8 mt-md-n9 text-center">
							<div class="blur-shadow-avatar"></div>
						</div>
						<div class="row py-12 pt-8">
							<div class="col-6">
								<h3 class="mb-0"></h3>
							</div>
							<table class="table">
								<thead class="table-light">
									<tr>
										<th>결제일시</th>
										<th>구분</th>
										<th>노선</th>
										<th>배차정보</th>
										<th>총 매수</th>
										<th>총 금액</th>
										<th>상세조회</th>
									</tr>
								</thead>
								<tbody>
									<tr v-for="(pay, index) in payList" :key="pay.id">
										<td>
											{{
												moment(pay.bookingDTOList[0].bookingDate).format(
													'YYYY년 MM월 DD일',
												)
											}}<br />{{
												moment(pay.bookingDTOList[0].bookingDate).format(
													'HH:mm',
												)
											}}
										</td>
										<td class="go">편도</td>
										<td class="routeInfo">
											<div class="d-flex">
												{{ pay.bookingDTOList[0].routeDTO.startTerminal.name
												}}<br />
												→ {{ pay.bookingDTOList[0].routeDTO.endTerminal.name }}
											</div>
										</td>
										<td class="scheduleInfo">
											{{
												moment(
													pay.bookingDTOList[0].scheduleDTO.startTime,
												).format('YYYY년 MM월 DD일 HH:mm')
											}}
										</td>
										<td>총 {{ pay.bookingDTOList.length }}명</td>
										<td class="totalPrice">
											{{ pay.totalPrice.toLocaleString() }}원
										</td>
										<td>
											<MaterialButton
												class="m-auto"
												variant="contained"
												color="dark"
												@click="showDetail(index)"
											>
												예매정보
											</MaterialButton>
										</td>
									</tr>
								</tbody>
							</table>
						</div>
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
import Swal from 'sweetalert2';
import MaterialButton from '@/components/MaterialButton.vue';
import { ref } from 'vue';
import axios from 'axios';
import MaterialBadge from '@/components/MaterialBadge.vue';
import moment from 'moment';
import { useRoute, useRouter } from 'vue-router';
const nonMember = ref({
	id: 123,
	phone: 2323,
});

const router = useRouter();
const route = useRoute();
const showModal = ref(false);
const NonMember = ref('');
const nonMemberId = ref();
const payList = ref([]);
const bookingList = ref([]);

const openTicketWindow = async id => {
	window.open(`/nonMember/booking/ticket/${id}`, '_blank');
};

const getPayList = async () => {
	try {
		nonMemberId.value = route.query.nonMemberId;
		const result = await axios.get(
			`/api/pay/findByNonMember/${nonMemberId.value}`,
		);
		if (result.data != null) {
			payList.value = result.data;
			console.log(result.data);
		}
	} catch (error) {
		console.error(error);
	}
};
getPayList();

const showDetail = index => {
	showModal.value = true;
	bookingList.value = payList.value[index].bookingDTOList;
};

const getNonMem = async () => {
	const resp = await axios.get(
		`/api/non-member/findById/${nonMember.value.id}`,
	);
	NonMember.value = resp.data;
	console.log(nonMember.value.id);
};
getNonMem();

//좌석삭제
const CancelBooking = async booking => {
	try {
		const res = await axios.put(`/api/booking/changeBookingState`, {
			id: booking.id,
			state: '예매취소',
		});

		if (res != null) {
			Swal.fire({
				title: '취소가 완료되었습니다',
			});
			router.go(0);
			booking.isCancelled = true;
		}
	} catch (error) {
		console.log(error);
		console.log(booking.id);
	}
};
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
	font-size: 15px;
	padding: 0 20px;
	font-weight: bold;
}
.tickettb .end {
	font-size: 15px;
	padding: 0 20px;
	font-weight: bold;
}
.tickettb .ssub1 {
	padding: 0 20px;
}
.tickettb .ssub2 {
	display: inline-block;
	font-size: 15px;
	font-weight: bold;
	padding: 0 10px; /* 좌우 여백 값으로 설정 */
	vertical-align: middle; /* 세로 위치 설정 */
}
.startimg {
	width: 40px;
}
.endimg {
	width: 40px;
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
	width: 200%;
}

.seat_info {
	list-style: none;
	margin: 0;
	padding: 0;
}
.modal-footer {
	display: flex;
}

.justify-content-center {
	justify-content: center;
}
.table th,
.table td {
	text-align: center;
	vertical-align: middle;
}
.go {
	color: #59b55c;
}
.routeInfo {
	font-size: 22px;
	font-weight: bold;
}
.totalPrice {
	color: rgba(200, 0, 0, 0.826);
}
.detailTicket {
	color: #344767;
	font-size: 20px;
}
.seat_detail {
	padding-top: 60px;
}
</style>
