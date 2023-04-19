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
						<p class="lead mb-4 text-white">결제내역 조회</p>
					</div>
				</div>
			</div>
			<span class="mask bg-gradient-dark opacity-8"></span>
		</div>
	</Header>
	<!--	Modal	-->
	<div
		v-if="showModal"
		class="modal"
		style="display: flex; justify-content: center; align-items: center"
	>
		<div class="modal-dialog justify-content-center align-items-center">
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
				<div
					v-for="bookingDeatil in getDetailBookingList"
					:key="bookingDeatil.id"
				>
					<div class="modal-body">
						<table class="tickettb">
							<tr>
								<th colspan="2">
									{{
										moment(bookingDeatil.scheduleDTO.startTime).format(
											'YYYY년 MM월 DD일 HH:mm',
										)
									}}
									출발
								</th>
							</tr>
							<tr>
								<td class="start" rowspan="2">
									<img class="startimg" src="@/assets/img/출발.png" alt="" />
									{{ bookingDeatil.routeDTO.startTerminal.name }}
								</td>
								<td>
									<span class="ssub1">회사</span>
									<span class="ssub2">{{
										bookingDeatil.scheduleDTO.busDTO.companyDTO.name
									}}</span>
								</td>
							</tr>
							<tr>
								<td>
									<span class="ssub1">등급</span>
									<span class="ssub2">{{
										bookingDeatil.scheduleDTO.busDTO.grade
									}}</span>
								</td>
							</tr>
							<tr>
								<td class="end" rowspan="2">
									<img class="endimg" src="@/assets/img/도착.png" alt="" />
									{{ bookingDeatil.routeDTO.endTerminal.name }}
								</td>
								<td>
									<span class="ssub1">매수</span>
									<span class="ssub2">{{ bookingDeatil.ageDTO.name }} 1명</span>
								</td>
							</tr>
							<tr>
								<td>
									<span class="ssub1">좌석</span>
									<span class="ssub2">{{ bookingDeatil.seatNum }}</span>
								</td>
							</tr>
						</table>
					</div>
					<div class="modal-footer justify-content-between">
						<MaterialButton
							variant="contained"
							color="dark"
							class="mb-0"
							@click="CancelBooking(bookingDeatil.id)"
							:id="bookingDeatil.id"
						>
							예매 취소
						</MaterialButton>
						<MaterialButton
							variant="contained"
							color="dark"
							class="mb-0"
							@click="openReceiptPage"
						>
							홈 티켓 출력
						</MaterialButton>
					</div>
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
								<thead>
									<tr>
										<th>번호</th>
										<th>구분</th>
										<th>노선</th>
										<th>배차정보</th>
										<th>총 매수</th>
										<th>총 금액</th>
										<th>상세조회</th>
									</tr>
								</thead>
								<tbody>
									<tr
										v-for="(booking, index) in myBookingList"
										:key="booking.id"
									>
										<td>{{ index + 1 }}</td>

										<td>편도</td>
										<td>
											<div class="d-flex">
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
										<td>총{{ totalNum }}명</td>
										<td>{{ totalPrice }}원</td>
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
import BookingOk from './Sections/BookingOkView.vue';
import image from '@/assets/img/busimage.png';
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

const route = useRoute();
const router = useRouter();
const showModal = ref(false);
const totalPrice = ref('');
const totalNum = ref('');
const myBookingList = ref('');
const getDetailBookingList = ref('');
const NonMember = ref('');

const nonMemberParam = ref({
	nonMemberId: route.query.id,
});

const openReceiptPage = async () => {
	const receiptPage = window.open('영수증 페이지 URL', '_blank');
	// 영수증 페이지 로딩 완료 이벤트 처리
	receiptPage.onload = () => {
		// 영수증 페이지에서 프린트 이벤트 발생 시 처리할 함수 등록
		receiptPage.window.addEventListener('beforeprint', () => {
			// 프린트 처리할 코드 작성
			receiptPage.window.print();
		});
	};
};

const getNonMem = async () => {
	const resp = await axios.get(
		`/api/non-member/findByPhone/${nonMember.value.phone}`,
	);
	//비회원 전화번호
	NonMember.value = resp.data;
	console.log(nonMember.value.phone);
};
getNonMem();

const getMyBookingList = async () => {
	const res = await axios.get(`/api/booking/find/findByNonMemId/21`);
	//비회원전화번호로 찾은 id
	myBookingList.value = res.data;
	console.log(myBookingList.value);
};
getMyBookingList();

const getNonDetailBookingList = async () => {
	const response = await axios.get(
		`/api/booking/find/findByNonMemPayId/21/21`,
		//비회원전화번호로 찾은 id와 해당 payid
	);
	getDetailBookingList.value = response.data;
	const prices = response.data.map(booking => booking.price);
	const sum = prices.reduce((acc, curr) => acc + curr, 0);
	totalPrice.value = sum;
	totalNum.value = getDetailBookingList.value.length;
	console.log('결제확인' + totalPrice.value);
	console.log(getDetailBookingList.value.length);
};
getNonDetailBookingList();

//예매삭제
const CancelBooking = async id => {
	try {
		const res = await axios.put(`/api/booking/changeBookingState`, {
			id: id,
			state: '예매취소',
		});

		if (res != null) {
			alert(' 취소 완료');
			router.go(0);
		}
	} catch (error) {
		console.log(error);
		console.log(id);
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
</style>
