<template>
	<Navbar light />
	<div>
		<div class="container">
			<!-- <div class="button-area">
				<div class="btn btn-dark" style="width: 150px; font-size: 16px">
					조회
				</div>
			</div> -->

			<div class="table-container">
				<div
					style="
						border: 1px solid #b8becc;
						text-align: center;
						margin-top: 30px;
						margin-bottom: 30px;
						width: 100%;
					"
				>
					<ul class="nav" style="padding: 15px; font-size: 20px">
						<li style="width: 50%"><a href="#" class="active">예매내역</a></li>
						<li style="width: 50%"><a href="#">취소내역</a></li>
					</ul>
				</div>
				<h3
					style="
						margin-bottom: 30px;
						text-align: center;
						font-weight: lighter;
						color: black;
					"
				>
					예매 내역
				</h3>
				<div id="myBooking" v-for="item in myBookingList" :key="item.id">
					<table class="table table-bordered">
						<thead style="background-color: #f3f4f6">
							<tr>
								<th style="width: 50%">
									<span class="arrival_time"
										>{{ item.scheduleDTO.startTime }} 출발</span
									>
								</th>
								<th style="width: 50%">
									<div class="price">
										<span style="font-weight: lighter">총 결제금액</span>
										<span
											style="
												font-weight: bold;
												font-size: large;
												margin-left: 10px;
												color: black;
											"
											>{{ item.price.toLocaleString() }}원</span
										>
									</div>
								</th>
							</tr>
						</thead>
						<tbody>
							<tr>
								<td>
									<div id="route_info" class="route_info">
										<span style="font-size: 15px">출발지</span>
										<div
											class="start_point"
											style="font-size: 25px; color: black; margin-bottom: 20px"
										>
											{{ item.routeDTO.startTerminal.name }}
										</div>
										<span style="font-size: 15px; margin-top: 20px"
											>도착지</span
										>
										<div
											class="end_point"
											style="font-size: 25px; color: black"
										>
											{{ item.routeDTO.endTerminal.name }}
										</div>
										<div
											style="font-size: 15px; color: #5691bd; margin-top: 8px"
										>
											{{
												parseInt(item.routeDTO.travelTime / 60) == 0
													? ' '
													: parseInt(item.routeDTO.travelTime / 60) + '시간 '
											}}
											{{ item.routeDTO.travelTime % 60 }}분 소요
										</div>
									</div>
								</td>
								<td>
									<div class="booking_info">
										<div class="booking-info-detail">
											<div class="id">예매번호</div>
											<div class="value">
												{{ item.id }}
											</div>
										</div>
										<div class="booking-info-detail">
											<span class="id">고속사</span>
											<span class="value">{{
												item.scheduleDTO.busDTO.companyDTO.name
											}}</span>
										</div>
										<div class="booking-info-detail">
											<span class="id">등급</span>
											<span class="value">{{
												item.scheduleDTO.busDTO.grade
											}}</span>
										</div>

										<div class="booking-info-detail">
											<span class="id">매수</span>
											<span class="value">{{ item.ageDTO.name }}1명</span>
										</div>
									</div>
								</td>
							</tr>
							<tr scope="col-2">
								<td>
									<div class="seat-info">
										<span style="margin-left: 20px">좌석</span>
										<span
											style="
												margin-left: 20px;
												font-size: 20px;
												font-weight: bold;
												color: black;
											"
											>{{ item.seatNum }}</span
										>
										<span style="margin-left: 20px; color: #5691bd">{{
											item.ageDTO.name
										}}</span>
									</div>
								</td>
								<td style="vertical-align: middle">
									<button type="button" class="btnS btn_print">
										홈티켓 출력
									</button>
								</td>
							</tr>
						</tbody>
					</table>
					<div class="btn-area">
						<button type="button" class="btn-booking-list">
							예매내역 변경
						</button>
						<button
							type="button"
							class="btn-booking-list"
							@click="CancelBooking(item.id)"
							:id="item.id"
						>
							예매 취소
						</button>
						<button type="button" class="btn-print2">홈티켓 출력</button>
					</div>
				</div>
				<ul class="desc-list">
					<li>과거 예매 내역은 출발일 날짜 기준 당일까지 조회 가능합니다.</li>
				</ul>
			</div>
		</div>
	</div>

	<Footer />
</template>

<script setup>
import Navbar from '@/layouts/Navbar.vue';
import Footer from '@/layouts/Footer.vue';
import axios from 'axios';
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();

let myBookingList = ref('');

const getMyBookingList = async () => {
	const res = await axios.get(
		`/api/booking/find/findByLoginId/${localStorage.getItem('loginId')}`,
	);
	myBookingList.value = res.data;
	console.log(myBookingList.value);
};
getMyBookingList();

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
.table-container {
	margin-top: 100px;
	display: block;
	padding-top: 50px;
	height: 100%;
	width: 80%;
	margin: 0px auto;

	font-size: 18px;
}

.search-container {
	margin-top: 100px;
	display: block;
	padding: 20px;
	height: 100%;
	width: 80%;
	margin: 0px auto;
	text-align: center;
	font-size: 18px;
}

.booking-history {
	display: none;
}
.arrival_time {
	font-size: 18px;
	color: #5691bd;
}

.button-area {
	padding-top: 50px;
	display: block;
	margin: 0px auto;
	text-align: center;
}

.btn-area {
	margin: 30px;
	text-align: center;
}

.seat-info {
	display: inline-block;
	padding: 10px;
}

.booking_info {
	padding: 20px;
}

.route-name {
	font-size: 18px;
	font-weight: bold;
}

.table-bordered {
	border: 1px solid #b8becc;
}

.desc-list {
	padding-left: 0px;
	margin-left: 0px;
	margin-top: 50px;
}

.btn_print {
	background-color: #5691bd;
	padding: 8px;
	margin-right: 20px;
	min-width: 110px;
	font-size: 15px;
	text-align: center;
	border: none;
	vertical-align: middle;
	color: #fff;
	display: inline;
	float: right;
}

button {
	cursor: pointer;
}

.btn-booking-list {
	background: #b8becc;
	color: #fff;
	display: inline-block;
	min-width: 180px;
	height: 60px;
	padding: 0 20px;
	font-size: 18px;
	text-align: center;
	line-height: 50px;
	border: none;
	vertical-align: middle;
	-moz-box-sizing: border-box;
	box-sizing: border-box;
	margin-right: 10px;
}

.btn-print2 {
	background: #344767;
	color: #fff;
	display: inline-block;
	min-width: 180px;
	height: 60px;
	padding: 0 20px;
	font-size: 18px;
	text-align: center;
	line-height: 50px;
	border: none;
	vertical-align: middle;
	-moz-box-sizing: border-box;
	box-sizing: border-box;
}

.price {
	display: inline;
	float: right;
}

.route_info {
	padding: 20px;
}

.id {
	font-size: 16px;
	width: 70px;
	display: inline-block;
}
.value {
	font-size: 20px;
	padding-left: 20px;
	color: #000;
	display: inline-block;
}

.booking-info-detail {
	padding: 5px;
}
</style>
