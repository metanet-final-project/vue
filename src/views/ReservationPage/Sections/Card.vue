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
									<div class="input-group input-group-outline my-1">
										<label class="form-label">카드번호</label>
										<input
											type="number"
											class="form-control"
											id="carnumber"
											v-model="pay.cardNumber"
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
											v-model="pay.cardExpiration"
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
											v-model="pay.cardPassword"
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
											id="birth"
											v-model="pay.birth"
										/>
									</div>
								</div>
							</div>
						</div>
						<section class="py-5 position-relative">
							<div class="row py-4">
								<h3 class="mb-0">결제금액</h3>
								<table>
									<tr>
										<th>총결제금액</th>
										<td>totalPrice</td>
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
import { onMounted, ref } from 'vue';
import axios from 'axios';
//material
import setMaterialInput from '@/assets/js/material-input';
import MaterialButton from '@/components/MaterialButton.vue';
//import { useRouter } from 'vue-router';
//const router = useRouter();

const pay = ref({});

// const goBookingConfirm = () => {
// 	router.push('/bookingconfirm');
// };

const savePay = async () => {
	try {
		console.log(pay.value);
		const result = await axios.post('/api/pay/save', pay.value);
		if (result != null) {
			alert('성공');
		}
	} catch (error) {
		alert('실패');
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
