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
										type="carnumber"
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
										min="1"
										max="12"
									/>
								</div>
								<div class="col-6">
									<small class="font-weight-bold">&nbsp;</small>
									<MaterialInput
										id="expirationYear"
										class="input-group-outline my-1"
										:label="{ text: '년', class: 'form-label' }"
										type="number"
										min="2022"
										max="2042"
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
										min="1"
										max="2"
										v-model="cardPassword"
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
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>
</template>

<script setup>
import { onMounted } from 'vue';
//material
import MaterialInput from '@/components/MaterialInput.vue';
import setMaterialInput from '@/assets/js/material-input';

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
</style>
