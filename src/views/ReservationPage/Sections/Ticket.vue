<template>
	<section class="py-sm-7 py-5 position-relative">
		<div class="container">
			<div class="row">
				<div class="col-12 mx-auto">
					<div class="mt-n8 mt-md-n9 text-center">
						<div class="blur-shadow-avatar"></div>
					</div>
					<div class="row pt-4">
						<h3 class="mb-0">승차권 정보</h3>
						<template v-for="seat in seatInfo" :key="seat.id">
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
										<span class="ssub2">{{ seat.ageName }}</span>
									</td>
								</tr>
								<tr>
									<td>
										<span class="ssub1">좌석</span>
										<span class="ssub2">{{ seat.seatNum }} 번</span>
									</td>
								</tr>
							</table>
						</template>
					</div>
					<div class="row pt-7">
						<h3 class="mb-0">카드정보 입력</h3>
						<div class="col-12">
							<img class="cardimg" src="@/assets/img/card1.png" alt="" />
						</div>

						<div class="bundle col-12">
							<div class="row">
								<div class="col-12">
									<small class="font-weight-bold">카드선택</small>
									<div class="form-check form-check-inline">
										<input
											class="form-check-input"
											type="radio"
											name="inlineRadioOptions"
										/>
										<label class="form-check-label" for="inlineRadio1"
											>개인</label
										>
									</div>
									<div class="form-check form-check-inline">
										<input
											class="form-check-input"
											type="radio"
											name="inlineRadioOptions"
										/>
										<label class="form-check-label" for="inlineRadio2"
											>법인</label
										>
									</div>
								</div>
							</div>
							<div class="row">
								<div class="col-12">
									<small class="font-weight-bold">카드번호</small>
									<div class="input-group input-group-outline my-1">
										<label class="form-label">카드번호</label>
										<input
											type="number"
											class="form-control"
											id="carnumber"
											v-model="cardNumber"
										/>
									</div>
								</div>
							</div>
							<div class="row">
								<div class="col-6">
									<small class="font-weight-bold">유효기간</small>
									<div class="input-group input-group-outline my-1">
										<label class="form-label">월</label>
										<input
											type="number"
											class="form-control"
											id="expirationMonth"
											v-model="cardExpiration"
										/>
									</div>
								</div>
								<div class="col-6">
									<small class="font-weight-bold">&nbsp;</small>
									<div class="input-group input-group-outline my-1">
										<label class="form-label">년</label>
										<input
											type="number"
											class="form-control"
											id="expirationMonth"
										/>
									</div>
								</div>
							</div>
							<div class="row">
								<div class="col-6">
									<small class="font-weight-bold">카드비밀번호</small>
									<div class="input-group input-group-outline my-1">
										<label class="form-label">비밀번호</label>
										<input
											type="number"
											class="form-control"
											id="cardPassword"
											v-model="cardPassword"
										/>
									</div>
								</div>
								<div class="col-6">
									<small class="font-weight-bold">&nbsp;</small>
									<div class="input-group-outline my-1">
										<input
											id="cardPassword1"
											type="password1"
											class="form-control"
											value="**"
											readonly
										/>
									</div>
								</div>
							</div>
							<div class="row">
								<div class="col-12">
									<small class="font-weight-bold">생년월일</small>
									<div class="input-group input-group-outline my-1">
										<label class="form-label"></label>
										<input
											type="date"
											class="form-control"
											id="cardBirth"
											v-model="cardBirth"
										/>
									</div>
								</div>
							</div>
						</div>
						<section v-if="!login" class="pt-4 position-relative">
							<div class="row pt-7">
								<h3 class="mb-0">예매 조회정보 입력</h3>
								<div class="col-12">
									<img class="cardimg" src="@/assets/img/nonmem.png" alt="" />
								</div>

								<div class="bundle">
									<div class="row">
										<div class="col-6">
											<small class="font-weight-bold">핸드폰번호</small>
											<div class="input-group input-group-outline my-1">
												<label class="form-label">번호</label>
												<input
													type="number"
													class="form-control"
													id="nonMemPhone"
													v-model="nonMemPhone"
												/>
											</div>
										</div>
										<div class="col-6">
											<small class="font-weight-bold">생년월일</small>
											<div class="input-group input-group-outline my-1">
												<label class="form-label"></label>
												<input
													type="date"
													class="form-control"
													id="nonbinonMemBirthrth"
													v-model="nonMemBirth"
												/>
											</div>
										</div>
									</div>
								</div>
							</div>
						</section>
						<section class="pt-4 position-relative">
							<div class="row pt-6">
								<h3 class="mb-0">결제금액</h3>
								<table class="pay">
									<tr class="paytr">
										<th class="payth">총결제금액</th>
										<td class="paytd">{{ scheduleInfo.price }}</td>
									</tr>
								</table>
								<MaterialButton
									class="my-4 mb-2 col-12"
									variant="contained"
									color="dark"
									fullWidth
									@click.prevent="savePay"
								>
									결제하기
								</MaterialButton>
							</div>
						</section>
					</div>
				</div>
			</div>
		</div>
	</section>
</template>

<script setup>
import axios from 'axios';
import MaterialButton from '@/components/MaterialButton.vue';
import setMaterialInput from '@/assets/js/material-input';
import { onMounted, ref } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import moment from 'moment';
import 'moment/locale/ko';
moment.locale('ko');
const router = useRouter();
const cardNumber = ref('');
const cardExpiration = ref('');
const cardPassword = ref('');
const cardBirth = ref();
const nonMemPhone = ref(null);
const nonMemBirth = ref(null);
const totalPrice = ref();
const memlogInId = ref();
const payId = ref();
const route = useRoute();
onMounted(() => {
	setMaterialInput();
});
const schedule = ref({
	id: route.query.id,
	routeId: route.query.routeId,
});
const seatInfo = ref(JSON.parse(route.query.seat));

// const member = ref({
// 	id: null,
// 	loginId: null,
// 	name: null,
// 	password: null,
// 	phone: null,
// });
console.log(schedule.value);
console.log(seatInfo.value);
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

let login = ref();
//로그인한 회원정보 가져오기
const isLogin = async () => {
	const result = await axios.get(
		`/api/member/findByLoginId/${localStorage.getItem('loginId')}`,
	);
	if (result.data.loginId != null) {
		console.log('아이디' + result.data);
		memlogInId.value = result.data.id;
		console.log(memlogInId.value);
		login.value = true;
	} else login.value = false;
};
isLogin();

const setLoginInfo = async () => {
	if (isLogin.value) {
		memlogInId.value = (await isLogin()).id;
	}
};
setLoginInfo();

//승차권정보 가져오기
const ticket = async () => {
	const response = await axios.get(
		`/api/schedule/find/${schedule.value.id}/${schedule.value.routeId}`,
	);
	scheduleInfo.value = response.data;
	const prices = response.data.map(schedule => schedule.price);
	const sum = prices.reduce((acc, curr) => acc + curr, 0);
	totalPrice.value = sum;
	console.log('결제확인' + totalPrice.value);
};
ticket();

//예매테이블에 저장하기
const savePay = async () => {
	const bookingList = [];
	for (const seat of seatInfo.value) {
		bookingList.push({
			memberId: memlogInId.value,
			nonMemberId: null,
			scheduleId: schedule.value.id,
			routeId: schedule.value.routeId,
			ageId: seat.ageId,
			seatNum: seat.seatNum,
			state: '결제완료',
			price: seat.price,
		});
	}
	try {
		const response = await axios.post('/api/pay/save', {
			pay: {
				cardNumber: cardNumber.value,
				cardExpiration: cardExpiration.value,
				cardPassword: cardPassword.value,
				birth: cardBirth.value,
				totalPrice: totalPrice.value,
			},
			nonMember: {
				phone: nonMemPhone.value,
				birth: nonMemBirth.value,
			},
			bookingList,
		});
		console.log(response.data);
		payId.value = response.data;
	} catch (error) {
		console.error(error);
	}
	router.push({
		name: 'BookingConfirm',
		query: {
			seat: route.query.seat,
			id: schedule.value.id,
			routeId: schedule.value.routeId,
			payId: payId.value,
		},
	});
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
.cardimg {
	width: 20%;
	margin: auto;
	z-index: 2;
}
.bundle {
	border: 2px solid #344767;
	padding: 77px 15px 15px 15px;
	box-shadow: 12px 12px 2px 1px #344767;
	margin-top: -75px; /* 아랫부분과 겹치도록 조정 */
}
.paytr {
	height: 50px;
}
.payth {
	color: white;
	background-color: #344767;
	font-size: 20px;
	text-align: center;
	width: 50%;
}
.paytd {
	font-size: 20px;
	text-align: center;
	border: 1px solid #344767;
	color: #344767;
	font-weight: bold;
	width: 50%;
}
</style>
