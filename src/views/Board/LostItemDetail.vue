<template>
	<Navbar light />
	<div>
		<div class="container">
			<div class="table-container">
				<h3
					style="
						margin-bottom: 30px;
						text-align: center;
						font-weight: lighter;
						color: black;
					"
				>
					습득물 상세보기
				</h3>
				<table class="table table-bordered">
					<tbody>
						<tr>
							<td style="background-color: #f8f9fb; width: 30%; padding: 15px">
								습득기관
							</td>

							<td style="width: 70%; padding: 15px">{{ loginId }}</td>
						</tr>
						<tr>
							<td style="background-color: #f8f9fb; padding: 15px">이름</td>
							<td>
								<input
									type="text"
									class="form-control form-control-sm"
									id="mypage-modify-id"
									v-model="name"
									style="
										border: 1px solid black;
										font-size: 16px;
										width: 300px;
										padding: 10px;
									"
								/>
							</td>
						</tr>
						<tr>
							<td style="background-color: #f8f9fb; padding: 15px">전화번호</td>
							<td>
								<input
									type="text"
									class="form-control form-control-sm"
									id="mypage-modify-id"
									v-model="phone"
									style="
										border: 1px solid black;
										font-size: 16px;
										width: 300px;
										padding: 10px;
									"
								/>
							</td>
						</tr>
						<tr>
							<td style="background-color: #f8f9fb; padding: 15px">이메일</td>
							<td>
								<input
									type="email"
									class="form-control form-control-sm"
									id="mypage-modify-id"
									v-model="email"
									style="
										border: 1px solid black;
										font-size: 16px;
										width: 300px;
										padding: 10px;
									"
								/>
							</td>
						</tr>
						<tr>
							<td style="background-color: #f8f9fb; padding: 15px">생년월일</td>
							<td style="padding: 15px">{{ birthOnly }}</td>
						</tr>
					</tbody>
				</table>
				<div class="btn-area">
					<button type="button" class="btn-print2">목록</button>
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
<style>
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
