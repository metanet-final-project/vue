<template>
	<section class="py-sm-7 py-5 position-relative">
		<div class="container">
			<div class="row">
				<div class="col-9 mx-auto">
					<div class="mt-n8 mt-md-n9 text-center">
						<div class="blur-shadow-avatar"></div>
					</div>
					<div class="row pt-4">
						<h3 class="mb-0">승차권 정보</h3>
						<template v-if="seatInfo">
							<table class="tickettb">
								<tr>
									<th colspan="2">
										{{
											moment(scheduleInfo.startTime)
												.locale('ko')
												.format('YYYY년 MM월 DD일 HH:mm')
										}}
										출발
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
					<div class="row pt-7">
						<h3 class="mb-0">카드정보 입력</h3>
						<div class="col-12 card4">
							<img class="cardimg" src="@/assets/img/card1.png" alt="" />
						</div>

						<div class="bundle col-12">
							<div class="col-12">
								<small class="font-weight-bold">카드종류</small>
								<div class="form-check">
									<input
										class="form-check-input"
										type="checkbox"
										value=""
										id="check4"
									/>
									<label class="form-check-label"> 개인 </label>
									<input
										class="form-check-input"
										type="checkbox"
										value=""
										id="check5"
									/>
									<label class="form-check-label pl-5"> 법인 </label>
								</div>
							</div>
							<div class="row">
								<div class="col-12">
									<small class="font-weight-bold">카드번호</small>
									<div class="input-group input-group-outline my-1">
										<label class="form-label">카드번호</label>
										<input
											type="text"
											class="form-control"
											id="card-number-input"
											v-model="cardNumber"
											@input="handleInput"
											maxlength="19"
											:placeholder="isFocused ? 'XXX-XXXX-XXXX-XXXX' : ''"
											@focus="isFocused = true"
											@blur="isFocused = false"
										/>
									</div>
								</div>
							</div>
							<div class="row">
								<div class="col-6">
									<small class="font-weight-bold">유효기간</small>
									<div class="input-group input-group-outline my-1">
										<label class="form-label">2자리 입력(MM)</label>
										<input
											type="number"
											class="form-control"
											id="cardExpirationMonth"
											v-model="cardExpirationMonth"
											min="1"
											max="12"
										/>
									</div>
								</div>
								<div class="col-6">
									<small class="font-weight-bold">&nbsp;</small>
									<div class="input-group input-group-outline my-1">
										<label class="form-label">2자리 입력(YY)</label>
										<input
											type="number"
											class="form-control"
											id="cardExpirationYear"
											v-model="cardExpirationYear"
											min="23"
											max="99"
										/>
									</div>
								</div>
							</div>
							<div class="row">
								<div class="col-6">
									<small class="font-weight-bold">카드비밀번호</small>
									<div class="input-group input-group-outline my-1">
										<label class="form-label">비밀번호 앞2자리</label>
										<input
											type="number"
											class="form-control"
											id="cardPassword"
											v-model="cardPassword"
											min="10"
											max="99"
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
								<div class="col-12 card4">
									<img class="card2img" src="@/assets/img/nonmem.png" alt="" />
								</div>

								<div class="bundle">
									<div class="row">
										<div class="col-6">
											<small class="font-weight-bold">핸드폰번호</small>
											<div class="input-group input-group-outline my-1">
												<label class="form-label">번호</label>
												<input
													type="tel"
													class="form-control"
													id="nonMemPhone"
													v-model="nonMemPhone"
													@input="formatPhone"
													maxlength="13"
													:placeholder="isFocused ? 'XXX-XXXX-XXXX' : ''"
													@focus="isFocused = true"
													@blur="isFocused = false"
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
										<td class="paytd">
											{{ totalSeatPrice.toLocaleString() }}원
										</td>
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
import { watch } from 'vue';
import MaterialButton from '@/components/MaterialButton.vue';
import setMaterialInput from '@/assets/js/material-input';
import Swal from 'sweetalert2';
import { onMounted, ref } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import moment from 'moment';
const router = useRouter();
const cardNumber = ref('');
const cardPassword = ref('');
const cardBirth = ref();
const nonMemPhone = ref(null);
const nonMemBirth = ref(null);
const memlogInId = ref();
const payId = ref();
const route = useRoute();
const isFocused = ref(false);
const seatInfo = ref(JSON.parse(route.query.seat));
const cardExpirationMonth = ref('');
const cardExpirationYear = ref('');
const schedule = ref({
	id: route.query.id,
	routeId: route.query.routeId,
});

onMounted(() => {
	setMaterialInput();
});

//카드만료기간->두개의 폼을 하나의 cardExpiration으로 저장
const updateCardExpiration = () => {
	const month = String(cardExpirationMonth.value).padStart(2, '0');
	const year = String(cardExpirationYear.value).padStart(2, '0');
	return month + year;
};
const cardExpiration = ref(updateCardExpiration());
watch([cardExpirationMonth, cardExpirationYear], () => {
	cardExpiration.value = updateCardExpiration();
});
watch(cardExpirationMonth, value => {
	if (value < 1 || value > 12) cardExpirationMonth.value = '';
});
watch(cardExpirationYear, value => {
	if (value < 1 || value > 99) cardExpirationYear.value = '';
});
watch(cardPassword, value => {
	if (value < 1 || value > 99) cardPassword.value = '';
});

//카드번호 4자리 입력하면 다음으로 넘어가도록
const handleInput = event => {
	let input = event.target.value.replace(/-/g, '').replace(/\D/g, '');
	let formattedInput = '';
	for (let i = 0; i < input.length; i += 4) {
		formattedInput += input.slice(i, i + 4) + '-';
	}
	formattedInput = formattedInput.slice(0, -1);
	event.target.value = formattedInput;
	cardNumber.value = formattedInput;
};

//비회원 핸드폰번호 3-4-4형식
const formatPhone = event => {
	let input = event.target.value.replace(/-/g, '').replace(/\D/g, '');
	let formattedInput = '';
	if (input.length > 3) {
		formattedInput += input.slice(0, 3) + '-';
		if (input.length > 7) {
			formattedInput += input.slice(3, 7) + '-';
			formattedInput += input.slice(7, 11);
		} else {
			formattedInput += input.slice(3, 7);
		}
	} else {
		formattedInput += input;
	}
	event.target.value = formattedInput;
};

//총결제금액 계산
let totalSeatPrice = 0;
seatInfo.value.forEach(seat => {
	totalSeatPrice += seat.price;
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

//로그인한 회원정보 가져오기
let login = ref();
const isLogin = async () => {
	const result = await axios.get(
		`/api/member/findByLoginId/${localStorage.getItem('loginId')}`,
	);
	if (result.data.loginId != null) {
		memlogInId.value = result.data.id;
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
};
ticket();

//예매테이블에 저장하기
const savePay = async () => {
	//체크되지 않았으면 경고창뜨기
	const check1 = document.getElementById('check1');
	const check2 = document.getElementById('check2');
	const check3 = document.getElementById('check3');
	if (!check1.checked || !check2.checked || !check3.checked) {
		Swal.fire({
			title: '이용약관에 동의해주세요.',
			icon: 'error',
		});
		return;
	}
	// 체크박스 검사
	if (
		!document.getElementById('check4').checked &&
		!document.getElementById('check5').checked
	) {
		Swal.fire({
			title: '카드종류를 선택해주세요.',
			icon: 'error',
		});
		return;
	}
	// 카드 정보 미입력 검사
	if (
		document.getElementById('card-number-input').value === '' ||
		document.getElementById('cardExpirationMonth').value === '' ||
		document.getElementById('cardExpirationYear').value === '' ||
		document.getElementById('cardPassword').value === '' ||
		document.getElementById('cardBirth').value === ''
	) {
		Swal.fire({
			title: '카드정보를 입력해주세요.',
			icon: 'error',
		});
		return;
	}
	// 카드만료일 검사
	if (
		parseInt(document.getElementById('cardExpirationYear').value) < 23 ||
		parseInt(document.getElementById('cardExpirationYear').value) > 99 ||
		isNaN(parseInt(document.getElementById('cardExpirationYear').value))
	) {
		Swal.fire({
			title: '카드만료일을 확인해주세요.',
			icon: 'error',
		});
		return;
	}
	if (
		document.getElementById('nonMemPhone').value === '' ||
		document.getElementById('nonbinonMemBirthrth').value === ''
	) {
		Swal.fire({
			title: '예매 조회정보를 입력해주세요.',
			icon: 'error',
		});
		return;
	}

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
			bookingDate: new Date().toISOString(),
		});
	}
	try {
		const response = await axios.post('/api/pay/save', {
			pay: {
				cardNumber: cardNumber.value,
				cardExpiration: cardExpiration.value,
				cardPassword: cardPassword.value,
				birth: cardBirth.value,
				totalPrice: totalSeatPrice,
			},
			nonMember: {
				phone: nonMemPhone.value,
				birth: nonMemBirth.value,
				birthStr: nonMemBirth.value,
			},
			bookingList,
		});
		payId.value = response.data;
	} catch (error) {
		console.error(error);
	}
	//BookingConfirm에 보내주기
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
	font-size: 23px;
	font-weight: bold;
	padding: 0 20px;
}
.tickettb .end {
	font-size: 23px;
	font-weight: bold;
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
	position: relative;
	width: 20%;
	margin: auto;
	z-index: 999;
}
.card2img {
	position: relative;
	width: 16%;
	margin: auto;
	z-index: 999;
}
.bundle {
	border: 2px solid #344767;
	padding: 77px 15px 15px 15px;
	box-shadow: 12px 12px 2px 1px #344767;
	margin-top: -60px; /* 아랫부분과 겹치도록 조정 */
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
.form-check {
	padding-left: 0;
}
.form-check-label {
	accent-color: #59b55c;
	padding-right: 20px;
}
.form-check-input:checked {
	background-color: #59b55c !important;
	border-color: #59b55c !important;
}
</style>
