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
					예매 변경
				</h3>
				<table class="table table-bordered">
					<tbody>
						<tr>
							<td>
								<div id="route_info" class="route_info">
									<div
										style="
											font-size: 20px;
											font-weight: bold;
											margin-bottom: 8px;
										"
									>
										<span style="color: #5691bd">가는편</span>
										<span style="padding-left: 10px; color: black"
											>2023.04.24(월) 09:20</span
										>
									</div>
									<span style="font-size: 15px">출발지</span>
									<div
										class="start_point"
										style="font-size: 25px; color: black; margin-bottom: 20px"
									>
										서울경부
									</div>
									<span style="font-size: 15px; margin-top: 20px">도착지</span>
									<div class="end_point" style="font-size: 25px; color: black">
										경주
									</div>
								</div>
							</td>
							<td></td>
						</tr>
					</tbody>
				</table>
				<div class="btn-area">
					<button type="button" class="btn-print2">조회</button>
				</div>
			</div>
			<ul class="desc-list">
				<li>과거 예매 내역은 출발일 날짜 기준 당일까지 조회 가능합니다.</li>
			</ul>
		</div>
	</div>
	<Footer />
	<MemberAuth />
</template>

<script setup>
import Navbar from '@/layouts/Navbar.vue';
import Footer from '@/layouts/Footer.vue';
import MemberAuth from '@/layouts/Auth/MemberAuth.vue';
</script>
<style scoped>
.routeBody {
	border: 1px solid #e6e6e6;
}

.page h3 {
	font-size: 28px;
	color: #000;
	text-align: center;
}

.box_inputForm {
	position: relative;
	padding: 7px 12px;
	background-color: #f3f4f6;
	text-align: left;
}
</style>
