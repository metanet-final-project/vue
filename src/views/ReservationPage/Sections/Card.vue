<template>
	<section class="py-sm-7 py-5 position-relative">
		<div class="container">
			<div class="row">
				<div class="col-12 mx-auto">
					<div class="mt-n8 mt-md-n9 text-center">
						<div class="blur-shadow-avatar"></div>
					</div>
					<div class="row py-4">
						<h3 class="mb-0">카드정보 입력</h3>
						<div class="col-12">
							<img src="@/assets/img/card1.png" alt="" />
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
									<MaterialInput
										id="carnumber"
										class="input-group-outline my-1"
										:label="{ text: '카드번호', class: 'form-label' }"
										type="number"
										v-model.number="cardNumber"
									/>
								</div>
							</div>
							<div class="row">
								<div class="col-6">
									<small class="font-weight-bold">유효기간</small>
									<MaterialInput
										id="expirationMonth"
										class="input-group-outline my-1"
										:label="{ text: '월', class: 'form-label' }"
										type="number"
										v-model="cardExpiration"
									/>
								</div>
								<div class="col-6">
									<small class="font-weight-bold">&nbsp;</small>
									<MaterialInput
										id="expirationYear"
										class="input-group-outline my-1"
										:label="{ text: '년', class: 'form-label' }"
										type="number"
									/>
								</div>
							</div>
							<div class="row">
								<div class="col-6">
									<small class="font-weight-bold">카드비밀번호</small>
									<MaterialInput
										id="cardPassword"
										class="input-group-outline my-1"
										:label="{ text: '비밀번호', class: 'form-label' }"
										type="password"
										v-model.number="cardPassword"
									/>
								</div>
								<div class="col-6">
									<small class="font-weight-bold">&nbsp;</small>
									<div class="input-group-outline my-1">
										<input
											id="cardPassword"
											type="password"
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
									<MaterialInput
										id="birth"
										class="input-group-outline my-1"
										:label="{ text: 'YYYY-MM-DD', class: 'form-label' }"
										v-model="birth"
									/>
								</div>
							</div>
						</div>
						<section class="py-5 position-relative">
							<div class="row py-4">
								<h3 class="mb-0">결제금액</h3>
								<table>
									<tr>
										<th>총결제금액</th>
										<td>{{ totalPrice }}원</td>
									</tr>
								</table>
								<MaterialButton
									class="my-4 mb-2 col-12"
									variant="contained"
									color="dark"
									fullWidth
									@click="submitForm"
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
import { onMounted, ref } from 'vue';
import axios from 'axios';
//material
import MaterialInput from '@/components/MaterialInput.vue';
import setMaterialInput from '@/assets/js/material-input';
import MaterialButton from '@/components/MaterialButton.vue';
//import { useRouter } from 'vue-router';
//const router = useRouter();

const cardNumber = ref('');
const cardPassword = ref('');
const birth = ref('');
const cardExpiration = ref('');
const totalPrice = ref(5000);

// const goBookingConfirm = () => {
// 	router.push('/bookingconfirm');
// };

// const submitForm = async () => {
// 	const data = {
// 		card_number: cardNumber.value,
// 		card_password: cardPassword.value,
// 		birth: birth.value,
// 		card_expiration: cardExpiration.value,
// 	};

// 	await axios
// 		.post('/api/pay/save', data)
// 		.then(response => {
// 			console.log(response.data);
// 		})
// 		.catch(error => {
// 			console.log(error);
// 		});
// };
const submitForm = async () => {
	const res = await axios.post('/api/pay/save', {
		card_number: cardNumber.value,
		card_password: cardPassword.value,
		birth: birth.value,
		card_expiration: cardExpiration.value,
	});
	try {
		if (res != null) {
			alert('회원정보가 변경되었습니다.');
		}
	} catch (error) {
		alert('error');
	}
};

onMounted(() => {
	setMaterialInput();
});
</script>
<style scoped>
img {
	width: 100%; /* 부모 컨테이너의 너비에 맞게 이미지 크기를 조정 */
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
table {
	height: 50px;
}
th {
	color: white;
	background-color: #344767;
	font-size: 20px;
	text-align: center;
	width: 50%;
}
td {
	font-size: 20px;
	text-align: center;
	border: 1px solid #344767;
	color: #344767;
	font-weight: bold;
	width: 50%;
}
</style>
