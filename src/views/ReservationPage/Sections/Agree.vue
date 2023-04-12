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
							<h3 class="mb-0">서비스이용약관동의</h3>
						</div>
						<div class="col-6 text-end">
							<div class="form-check">
								<input
									class="form-check-input"
									type="checkbox"
									value=""
									id="flexCheckDefault"
								/>
								<label class="form-check-label"> 동의 </label>
							</div>
						</div>
						<div class="scroll-container col-12">
							<p class="text-lg mb-0">"서비스 이용약관"</p>
							<p class="text-lg mb-0">
								제1장 총칙 제1조 (목적) 본 약관은 티머니(이하 ‘회사’라 합니다)가
								제공하는 고속버스 티머니/시외버스 티머니 어플리케이션 서비스 및
								고속버스통합예매 홈페이지의 이용과릿 PC 등의 이동 통신 기기를
								말합니다. 3. “이용자”란 본 약관에 따라 회사가 제공하는 서비스를
								이용하는 회원과 비회원을 말합니다. 4. “회원”이란 회사가 정한
								회원 가입 절차에 따라 계정 등록을 마친 이용자로서 결제 내의
								전날까지 명시적으로 약관 변경 거부 의사를 표시하지 아니할 경우
								변경 약관에 동의한 것으로 간주합니다.
							</p>
						</div>
						<div class="col-6" style="padding-top: 30px">
							<h3 class="mb-0">운송약관 동의</h3>
						</div>
						<div class="col-6 text-end">
							<div class="form-check">
								<input
									class="form-check-input"
									type="checkbox"
									value=""
									id="flexCheckDefault"
								/>
								<label class="form-check-label"> 동의 </label>
							</div>
						</div>
						<div class="scroll-container col-12">
							<p class="text-lg mb-0">"고속버스 운송사업 운송약관"</p>
							<p class="text-lg mb-0">
								제1장 총칙 제1조 (목적) 본 약관은 티머니(이하 ‘회사’라 합니다)가
								제공하는 고속버스 티머니/시외버스 티머니 어플리케이션 서비스 및
								고속버스통합예매 홈페이지의 이용과릿 PC 등의 이동 통신 기기를
								말합니다. 3. “이용자”란 본 약관에 따라 회사가 제공하는 서비스를
								이용하는 회원과 비회원을 말합니다. 4. “회원”이란 회사가 정한
								회원 가입 절차에 따라 계정 등록을 마친 이용자로서 결제 내의
								전날까지 명시적으로 약관 변경 거부 의사를 표시하지 아니할 경우
								변경 약관에 동의한 것으로 간주합니다.
							</p>
						</div>
						<div class="col-6" style="padding-top: 30px">
							<h3 class="mb-0">개인정보 수집 및 이용 동의</h3>
						</div>
						<div class="col-6 text-end">
							<div class="form-check">
								<input
									class="form-check-input"
									type="checkbox"
									value=""
									id="flexCheckDefault"
								/>
								<label class="form-check-label"> 동의 </label>
							</div>
						</div>
						<div class="scroll-container col-12">
							<p class="text-lg mb-0">"개인정보 수집 및 이용 동의"</p>
							<p class="text-lg mb-0">
								제1장 총칙 제1조 (목적) 본 약관은 티머니(이하 ‘회사’라 합니다)가
								제공하는 고속버스 티머니/시외버스 티머니 어플리케이션 서비스 및
								고속버스통합예매 홈페이지의 이용과릿 PC 등의 이동 통신 기기를
								말합니다. 3. “이용자”란 본 약관에 따라 회사가 제공하는 서비스를
								이용하는 회원과 비회원을 말합니다. 4. “회원”이란 회사가 정한
								회원 가입 절차에 따라 계정 등록을 마친 이용자로서 결제 내의
								전날까지 명시적으로 약관 변경 거부 의사를 표시하지 아니할 경우
								변경 약관에 동의한 것으로 간주합니다.
							</p>
						</div>
						<MaterialButton
							class="my-4 mb-2 col-12"
							variant="contained"
							color="dark"
							fullWidth
						>
							전체 동의
						</MaterialButton>
					</div>
				</div>
			</div>
		</div>
	</section>
</template>
<script setup>
import MaterialButton from '@/components/MaterialButton.vue';
</script>
<style>
.scroll-container {
	height: 160px; /* 스크롤 가능한 영역의 높이 지정 */
	overflow-y: scroll; /* y축 스크롤만 허용 */
	border: 1px solid #ccc; /* 컨테이너 테두리 스타일 지정 */
}

.scroll-container p {
	font-size: 16px; /* 글자 크기 지정 */
	line-height: 1.5; /* 줄간격 조정 */
	padding: 10px; /* 내부 여백 조정 */
}

.scroll-container::-webkit-scrollbar {
	width: 6px; /* 스크롤바 가로길이 지정 */
}

.scroll-container::-webkit-scrollbar-thumb {
	background-color: #ccc; /* 스크롤바 썸네일 색상 지정 */
	border-radius: 3px; /* 스크롤바 썸네일 모서리 둥글게 처리 */
}
.form-check-label {
	color: #59b55c;
	accent-color: #59b55c;
}
</style>
