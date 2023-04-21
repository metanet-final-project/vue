<template>
	<Navbar transparent />
	<Header>
		<div
			class="page-header min-height-400"
			:style="{ backgroundImage: `url(${image})` }"
			loading="lazy"
		>
			<span class="mask bg-gradient-dark opacity-8"></span>
		</div>
	</Header>
	<div class="page" id="seatChcPage">
		<h3>매수 및 좌석 선택</h3>

		<div class="selectSeat_wrap">
			<!-- compareBox -->
			<div class="compare_wrap">
				<!-- 좌측 infoBox -->
				<div class="infoBox">
					<p class="date" id="satsDeprDtm">
						{{
							scheduleInfo.startTime != null
								? moment(scheduleInfo.startTime)
										.locale('ko')
										.format('YYYY년 MM월 DD일')
								: ''
						}}
					</p>

					<div class="route_wrap" id="satsRotInfo">
						<div class="inner">
							<p class="roundBox departure" id="satsDeprTmlNm">
								{{ scheduleInfo.routeDTO.startTerminal.name }}
							</p>
							<!-- 출발지 -->

							<p class="roundBox arrive" id="satsArvlTmlNm">
								{{ scheduleInfo.routeDTO.endTerminal.name }}
							</p>
							<!-- 도착지 -->
						</div>
						<div class="detail_info">
							<span id="satsTakeDrtm"
								>{{ scheduleInfo.routeDTO.travelTime }}분 예정</span
							>
						</div>
					</div>

					<div class="route_wrap">
						<div class="tbl_type2">
							<table>
								<tbody>
									<tr>
										<th scope="row">고속사</th>
										<td>{{ scheduleInfo.busDTO.companyDTO.name }}</td>
									</tr>
									<tr>
										<th scope="row">등급</th>
										<td>{{ scheduleInfo.busDTO.grade }}</td>
									</tr>
									<tr>
										<th scope="row">출발</th>
										<td>
											{{
												scheduleInfo.startTime != null
													? moment(scheduleInfo.startTime)
															.locale('ko')
															.format('HH:MM')
													: ''
											}}
										</td>
									</tr>
								</tbody>
							</table>
						</div>
					</div>
				</div>
			</div>
			<!-- //좌측 infoBox -->

			<!-- 우측 detailBox -->
			<div class="main_box">
				<div class="seat">
					<span class="count_num">잔여 {{ seatTotal }}석 / 전체 22석</span>
				</div>
				<div class="box">
					<div class="detailBox">
						<div class="detailBox_info">
							<ul class="sel_list" id="mobileSelCnt">
								<li>
									<div class="countBox">
										<p class="division">
											<em>일반</em>

											<span class="text_num count" id="adltCntMob">{{
												seat.adlt.count
											}}</span>
										</p>
										<div class="btn_wrap">
											<ul>
												<li>
													<button
														type="button"
														class="btn btn_add"
														@click="add(1)"
													>
														<span class="ico_plus">+</span>
													</button>
												</li>
												<li>
													<button
														type="button"
														class="btn btn_minus"
														@click="minus(1)"
													>
														<span class="ico_minus">-</span>
													</button>
												</li>
											</ul>
										</div>
									</div>
								</li>

								<li>
									<div class="countBox">
										<p class="division">
											<em>청소년</em>

											<span class="text_num count" id="teenCntMob">{{
												seat.teen.count
											}}</span>
										</p>
										<div class="btn_wrap">
											<ul>
												<li>
													<button
														type="button"
														class="btn btn_add"
														@click="add(2)"
													>
														<span class="ico_plus">+</span>
													</button>
												</li>
												<li>
													<button
														type="button"
														class="btn btn_minus"
														@click="minus(2)"
													>
														<span class="ico_minus">-</span>
													</button>
												</li>
											</ul>
										</div>
									</div>
								</li>

								<li>
									<div class="countBox">
										<p class="division">
											<em>아동</em>

											<span class="text_num count" id="childCntMob">{{
												seat.child.count
											}}</span>
										</p>
										<div class="btn_wrap">
											<ul>
												<li>
													<button
														type="button"
														class="btn btn_add"
														@click="add(3)"
													>
														<span class="ico_plus">+</span>
													</button>
												</li>
												<li>
													<button
														type="button"
														class="btn btn_minus"
														@click="minus(3)"
													>
														<span class="ico_minus">-</span>
													</button>
												</li>
											</ul>
										</div>
									</div>
								</li>
							</ul>
						</div>
						<!-- //mobile 매수 선택 -->
						<!-- // 좌석 선택 -->
						<div class="detailBox_body">
							<div class="selectSeat_box">
								<div class="bg_seatBox" style="display: block">
									<div class="seatList">
										<span
											class="seatBox"
											v-for="seat in seatNum"
											:key="seat.idx"
											:class="{ last_seat: seat.idx >= 19 }"
										>
											<input
												type="checkbox"
												name="seatBoxDtl"
												:id="'seatNum_22_' + seat.idx"
												:value="seat.idx"
												@click="seatSelected(seat.idx)"
												v-if="seat.state === 'Y'"
											/>
											<label
												:class="{
													disabled: seat.state === 'N',
													selected: seat.select && seat.state === 'Y',
												}"
												:for="'seatNum_22_' + seat.idx"
												>{{ seat.idx }}</label
											>
										</span>
									</div>
								</div>
							</div>
						</div>
					</div>
					<!-- //우측 detailBox -->

					<!-- //compareBox -->
					<!-- 선택좌석 상세보기 -->
					<div class="selectSeat_detail">
						<div class="box_tbl">
							<!-- 탑승인원 및 요금 -->
							<section class="box_detail">
								<div class="box_title">
									<strong class="txt_tit">선택좌석</strong>
								</div>
								<div class="sel_seatNum">
									<span class="txt_selSeat" v-if="seatSelectInfo.length == 0">
										좌석을 선택해 주세요.
									</span>
									<span
										v-else
										class="txt_selSeat"
										v-for="seatNum in seatSelectInfo"
										:key="seatNum.idx"
									>
										{{ seatNum.idx + '번 ' }}
									</span>
								</div>
								<div class="tbl_type3">
									<table class="taR">
										<tbody>
											<tr>
												<th scope="row">
													일반
													<span id="adltSeatCnt"
														>{{ seat.adlt.selectCount }}명</span
													>
												</th>
												<td id="adltTotAmt">{{ adltPrice }}원</td>
											</tr>

											<tr>
												<th scope="row">
													청소년
													<span id="chldSeatCnt"
														>{{ seat.teen.selectCount }}명</span
													>
												</th>
												<td id="chldTotAmt">{{ teenPrice }}원</td>
											</tr>

											<tr>
												<th scope="row">
													아동
													<span id="bohnSeatCnt"
														>{{ seat.child.selectCount }}명</span
													>
												</th>
												<td id="bohnTotAmt">{{ childPrice }}원</td>
											</tr>
										</tbody>
									</table>
								</div>
							</section>
							<!-- //탑승인원 및 요금 -->
						</div>
						<!-- 할인선택 -->
						<div class="box_tbl">
							<!-- //할인선택 -->
							<!-- 총 결제금액 -->
							<section class="box_detail total_price">
								<!-- 총 결재금액일 시 class="total_price" 추가 -->
								<div class="box_title">
									<strong class="txt_tit">총 결제금액</strong>
									<span class="sel_price" id="allTotAmtLocD"
										>{{ totalPrice }}원</span
									>
								</div>
							</section>
							<!-- //총 결제금액 -->
						</div>
						<div class="btns btn_selectSeat" @click="bookgingPage">
							선택완료
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
	<Footer />
</template>

<script setup>
import Navbar from '@/layouts/Navbar.vue';
import Header from '@/examples/Header.vue';
import Footer from '@/layouts/Footer.vue';
import image from '@/assets/img/busimage.png';

import { computed, ref } from 'vue';
import axios from 'axios';
import { useRoute, useRouter } from 'vue-router';
import Swal from 'sweetalert2';
import moment from 'moment';
import 'moment/locale/ko';
moment.locale('ko');

const route = useRoute();
const router = useRouter();
const schedule = ref({
	id: route.query.id,
	routeId: route.query.routeId,
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
	countSeat: null,
	date: null,
});
const seatInfo = ref();
const seatNum = ref(
	[...Array(22)].map((_, idx) => {
		return { idx: idx + 1, state: 'Y', select: false };
	}),
); // 좌석 정보
const seatTotal = ref(22);
const getSchedule = async () => {
	console.log(schedule.value);
	const result = await axios.get(
		`/api/schedule/find/${schedule.value.id}/${schedule.value.routeId}`,
	);
	scheduleInfo.value = result.data;
	console.log(result.data);
}; // 배차 정보

const getSeatInfo = async () => {
	const result = await axios.get('/api/booking/find/seat/' + schedule.value.id);
	seatInfo.value = result.data;
	result.data.forEach(seat => {
		seatNum.value[seat.seatNum - 1].state = 'N';
		seatTotal.value--;
	});
	console.log(result.data);
}; // 예매된 좌석 정보

getSchedule();
getSeatInfo();

// 좌석에 대한 코드
const seat = ref({
	adlt: {
		count: 0,
		selectCount: 0,
		price: 1,
	},
	teen: {
		count: 0,
		selectCount: 0,
		price: 1,
	},
	child: {
		count: 0,
		selectCount: 0,
		price: 1,
	},
}); // 좌석 선택 및 가격 선언

const seatSelectInfo = ref([]);
const add = age => {
	if (
		seat.value.adlt.count == seat.value.adlt.selectCount &&
		seat.value.teen.count == seat.value.teen.selectCount &&
		seat.value.child.count == seat.value.child.selectCount
	) {
		if (age === 1) {
			console.log(age);
			seat.value.adlt.count++;
		} else if (age === 2) {
			console.log(age);
			seat.value.teen.count++;
		} else if (age === 3) {
			console.log(age);
			seat.value.child.count++;
		}
	} else {
		Swal.fire({
			title: '좌석을 먼저 선택해주세요.',
			icon: 'error',
		});
	}
};

const minus = age => {
	if (
		seat.value.adlt.count == seat.value.adlt.selectCount &&
		seat.value.teen.count == seat.value.teen.selectCount &&
		seat.value.child.count == seat.value.child.selectCount
	) {
		return;
	} else {
		if (age === 1 && seat.value.adlt.count != 0) {
			console.log(age);
			seat.value.adlt.count--;
		} else if (age === 2 && seat.value.teen.count != 0) {
			console.log(age);
			seat.value.teen.count--;
		} else if (age === 3 && seat.value.child.count != 0) {
			console.log(age);
			seat.value.child.count--;
		}
	}
};

const seatSelected = idx => {
	let on = true;
	seatSelectInfo.value.forEach((item, index) => {
		// item 객체의 속성에 접근하여 처리
		if (item.idx == idx) {
			seatSelectInfo.value.splice(index, 1);
			seatNum.value[idx - 1].select = !seatNum.value[idx - 1].select;
			if (item.age == '일반') {
				seat.value.adlt.count--;
				seat.value.adlt.selectCount--;
			} else if (item.age == '청소년') {
				seat.value.teen.count--;
				seat.value.teen.selectCount--;
			} else if (item.age == '아동') {
				seat.value.child.count--;
				seat.value.child.selectCount--;
			}
			on = false;
			return;
		}
	});
	if (
		on &&
		(seat.value.adlt.count != seat.value.adlt.selectCount ||
			seat.value.teen.count != seat.value.teen.selectCount ||
			seat.value.child.count != seat.value.child.selectCount)
	) {
		seatNum.value[idx - 1].select = !seatNum.value[idx - 1].select;
		if (seat.value.adlt.count - seat.value.adlt.selectCount != 0) {
			seat.value.adlt.selectCount++;
			seatSelectInfo.value.push({ idx: idx, age: '일반' });
		} else if (seat.value.teen.count - seat.value.teen.selectCount != 0) {
			seat.value.teen.selectCount++;
			seatSelectInfo.value.push({ idx: idx, age: '청소년' });
		} else if (seat.value.child.count - seat.value.child.selectCount != 0) {
			seat.value.child.selectCount++;
			seatSelectInfo.value.push({ idx: idx, age: '아동' });
		}
	} else if (on) {
		Swal.fire({
			title: '매수를 먼저 선택해주세요.',
			icon: 'error',
		});
	}

	console.log(seatSelectInfo.value);
};

const adltPrice = computed(() => {
	return Math.floor(seat.value.adlt.selectCount * scheduleInfo.value.price);
});
const teenPrice = computed(() => {
	return Math.floor(
		seat.value.teen.selectCount * 0.8 * scheduleInfo.value.price,
	);
});
const childPrice = computed(() => {
	return Math.floor(
		seat.value.child.selectCount * 0.5 * scheduleInfo.value.price,
	);
});

const totalPrice = computed(() => {
	return adltPrice.value + teenPrice.value + childPrice.value;
});

// 좌석 선택완료 페이지 이동 이벤트
const bookgingPage = () => {
	if (seatSelectInfo.value.length == 0) {
		Swal.fire({
			title: '좌석을 선택해주세요.',
			icon: 'error',
		});
		return;
	}
	const seatInfo = [];
	seatSelectInfo.value.forEach(seat => {
		const ageId = ref();
		const price = ref();
		if (seat.age === '일반') {
			ageId.value = 1;
			price.value = scheduleInfo.value.price;
		} else if (seat.age === '청소년') {
			ageId.value = 2;
			price.value = 0.8 * scheduleInfo.value.price;
		} else if (seat.age === '아동') {
			ageId.value = 3;
			price.value = 0.5 * scheduleInfo.value.price;
		}
		seatInfo.push({
			ageName: seat.age, // age 테이블 name
			ageId: ageId.value, // age 테이블 id
			seatNum: seat.idx, // 좌석번호
			price: price.value, // 구분된 가격
		});
	});
	console.log(seatInfo);
	router.push({
		name: 'Booking',
		query: {
			seat: JSON.stringify(seatInfo),
			id: schedule.value.id,
			routeId: schedule.value.routeId,
		},
	});
};
</script>

<style scoped>
.page {
	width: 100%; /* 부모 요소의 100% 너비 */
	max-width: 1000px; /* 최대 너비 제한 */
	height: 700px;
	margin: 0 auto; /* 가운데 정렬 */
	padding: 40px; /* 여백 추가 */
}

.selectSeat_wrap {
	width: 100%; /* 부모 요소의 100% 너비 */
	height: 100%; /* 높이 설정 */
	display: flex;
	flex-direction: row;
}

.page h3 {
	text-align: center;
}

.compare_wrap {
	padding: 10px;
	width: 27%;
	height: 100%;
	display: flex;
	flex-direction: row;
	background-color: #68b3ce;
	color: white;
	margin-right: 10px;
}

.compare_wrap p {
	font-weight: 700;
}

.route_wrap .departure:before {
	content: '출발지';
}

.route_wrap .arrive:before {
	content: '도착지';
}

.route_wrap .roundBox:before {
	display: block;
	position: absolute;
	left: 20px;
	top: 0;
	width: 35px;
	height: 35px;
	border-radius: 50%;
	background-color: #fff;
	color: #74b3c7;
	font-size: 12px;
	text-align: center;
	line-height: 35px;
}

.route_wrap .roundBox {
	display: block;
	overflow: hidden;
	position: relative;
	min-height: 35px;
	padding-left: 67px;
	font-size: 20px;
	color: #f7f7f7;
	white-space: nowrap;
	text-overflow: ellipsis;
}

.infoBox {
	width: 100%;
}

.main_box {
	width: 73%;
	height: 100%;
}

.box {
	width: 100%;
	height: 93%;
	display: flex;
	flex-direction: row;
	border: 1px solid black;
}

.seat {
	font-size: 20px;
	font-weight: 600;
	padding: 5px;
	text-align: center;
	border: 1px solid black;
}

.count_seat {
	text-align: center;
}

.detail_info {
	margin-bottom: 10px;
}

.detail_info span {
	text-align: end;
	font-size: 12px;
	display: block;
	padding-right: 30px;
}

.detail_info span:nth-child(0) {
	margin-top: 4px;
}

.route_wrap {
	border-bottom: 1px solid #ffffff;
	margin-top: 30px;
	font-size: 15px;
}

.route_wrap th {
	font-weight: 400;
	padding-left: 20px;
	font-size: 13px;
}

.tbl_type2 {
	padding-bottom: 10px;
}

.tbl_type2 td {
	padding-left: 20px;
}
.detailBox {
	width: 70%;
	display: flex;
	flex-direction: row;
	border-right: 1px solid;
}

.detailBox_info {
	width: 30%;
	border-right: 1px solid;
}
.sel_list {
	list-style: none;
}

.countBox {
	margin: auto;
	padding: 5px;
	width: 100%;
	height: 100px;
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: space-between;
	border-bottom: 1px solid;
}

.countBox p {
	margin: 0;
	text-align: center;
	font-weight: 700;
}

.countBox em {
	display: block;
}

.detailBox_info ul {
	padding: 0;
}

.detailBox_info ul li {
	padding: 0;
}
.countBox ul {
	list-style: none;
	padding: 0px;
}

.countBox ul li {
	list-style: none;
	padding: 0px;
}

.countBox .btn {
	margin: 3px;
	padding: 0;
	width: 40px;
	height: 40px;
	font-size: 15px;
	background-color: #f3f4f6;
}
.detailBox_body {
	width: 70%;
	margin: auto;
}
.selectSeat_detail {
	width: 30%;
	padding: 10px;
	font-size: 14px;
}
.detailBox_body {
	width: 100%;
	height: 100%;
	background-image: url('@/assets/img/seat.png'); /* 배경 이미지 파일 경로 */
	background-position: center;
	background-repeat: no-repeat;
}
.selectSeat_box {
	width: 70%;
	min-width: 250px;
	height: 100%;
	margin: 160px auto;
}

.seatList {
	width: 100%;
	min-width: 250px;
	margin: auto;
}

.seatList span {
	display: inline-block;
	position: relative;
	width: 55px;
	height: 55px;
}

.seatBox label {
	display: block;
	width: 100%;
	height: 100%;
	position: relative;
	background-image: url('@/assets/img/seat_icon.png');
	/* background-size: cover; */
	background-size: contain;
	text-align: center;
	font-size: 10px;
	line-height: 60px;
	cursor: pointer;
}

.seatList span:nth-child(3n + 3) {
	margin-left: 65px;
}

span.last_seat:nth-child(3n + 3) {
	margin-left: 9px;
}

.seatBox input {
	display: block;
	position: absolute;
	left: 0;
	top: 0;
	opacity: 0;
}

.disabled::before,
.disabled::after {
	content: '';
	position: absolute;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	margin: auto;
	width: 8px;
	height: 60%;
	background-color: #f00;
}

.disabled::before {
	transform: rotate(45deg);
}

.disabled::after {
	transform: rotate(-45deg);
}

.selected {
	background-color: #0f0; /* 초록색 배경색 */
	position: relative;
	border-radius: 50%; /* 동그라미 모양을 위한 border-radius 설정 */
	width: 40px; /* 동그라미의 가로 크기 */
	height: 40px; /* 동그라미의 세로 크기 */
}

.box_detail {
	padding: 5px;
}

.box_detail div {
	margin-bottom: 10px;
}
.box_title span {
	margin-left: 30px;
}
.txt_tit {
	font-weight: 700;
	font-size: 17px;
}

.btn_selectSeat {
	padding: 5px;
	margin: 0;
	border-radius: 5px;
	border: 1px solid;
	text-align: center;
	background-color: #5754b5;
	color: #ffffff;
	margin-top: 200px;
	cursor: pointer;
}
.taR {
	width: 100%;
}
.taR tbody td {
	padding-right: 0;
	text-align: right;
}

.box_title {
	width: 100%;
}
strong {
	white-space: pre-line;
}
.tbl_type3 p {
	font-size: 12px;
}

.box_title span {
	margin: 5px;
}
</style>
