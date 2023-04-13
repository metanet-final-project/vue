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
				<h3
					style="
						margin-bottom: 30px;
						text-align: center;
						font-weight: lighter;
						color: black;
					"
				>
					내 정보 수정
				</h3>
				<table class="table table-bordered">
					<tbody>
						<tr>
							<td style="background-color: #f3f4f6; width: 30%; padding: 15px">
								아이디
							</td>
							<td style="width: 70%">
								<input
									type="text"
									class="form-control form-control-sm"
									id="mypage-modify-id"
									value="qwer123"
									style="border: 1px solid black; width: 300px; padding: 10px"
								/>
							</td>
						</tr>
						<tr>
							<td style="background-color: #f3f4f6; padding: 15px">이름</td>
							<td style="padding: 15px">신소희</td>
						</tr>
						<tr>
							<td style="background-color: #f3f4f6; padding: 15px">전화번호</td>
							<td>
								<input
									type="text"
									class="form-control form-control-sm"
									id="mypage-modify-id"
									value="01012345678"
									style="border: 1px solid black; width: 300px; padding: 10px"
								/>
							</td>
						</tr>
						<tr>
							<td style="background-color: #f3f4f6; padding: 15px">이메일</td>
							<td>
								<input
									type="email"
									class="form-control form-control-sm"
									id="mypage-modify-id"
									value="aa@aa.com"
									style="border: 1px solid black; width: 300px; padding: 10px"
								/>
							</td>
						</tr>
						<tr>
							<td style="background-color: #f3f4f6; padding: 15px">생년월일</td>
							<td style="padding: 15px">2000.01.07</td>
						</tr>
					</tbody>
				</table>
				<div class="btn-area">
					<button type="button" class="btn-print2">변경</button>
				</div>
			</div>
		</div>
	</div>
	<Footer />
</template>

<script setup>
import Navbar from '@/layouts/Navbar.vue';
import Footer from '@/layouts/Footer.vue';
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
.btn-area {
	margin-top: 30px;
	text-align: center;
}
.table-bordered {
	border: 1px solid #cfd2d7;
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
</style>
