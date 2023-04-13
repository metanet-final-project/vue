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
					<p class="date" id="satsDeprDtm">2023. 4. 11. 화</p>

					<div class="route_wrap" id="satsRotInfo">
						<div class="inner">
							<p class="roundBox departure" id="satsDeprTmlNm">고양화정</p>
							<!-- 출발지 -->

							<p class="roundBox arrive" id="satsArvlTmlNm">횡성(휴)하행</p>
							<!-- 도착지 -->
						</div>
						<div class="detail_info">
							<span id="satsTakeDrtm">3시간 20분 소요</span>
							<span id="satsDist">290.8 Km</span>
						</div>
					</div>

					<div class="route_wrap">
						<div class="tbl_type2">
							<table>
								<tbody>
									<tr>
										<th scope="row">고속사</th>
										<td>(주)중앙고속</td>
									</tr>
									<tr>
										<th scope="row">등급</th>
										<td>우등</td>
									</tr>
									<tr>
										<th scope="row">출발</th>
										<td>12:00</td>
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
					<span class="count_num">잔여 25석 / 전체 28석</span>
				</div>
				<div class="box">
					<div class="detailBox">
						<div class="detailBox_info">
							<ul class="sel_list" id="mobileSelCnt">
								<li>
									<div class="countBox">
										<p class="division">
											<em>일반</em>

											<span class="text_num count" id="adltCntMob">1</span>
										</p>
										<div class="btn_wrap">
											<ul>
												<li>
													<button type="button" class="btn btn_add">
														<span class="ico_plus">+</span>
													</button>
												</li>
												<li>
													<button type="button" class="btn btn_minus">
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

											<span class="text_num count" id="chldCntMob">0</span>
										</p>
										<div class="btn_wrap">
											<ul>
												<li>
													<button type="button" class="btn btn_add">
														<span class="ico_plus">+</span>
													</button>
												</li>
												<li>
													<button type="button" class="btn btn_minus">
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

											<span class="text_num count" id="bohnCntMob">0</span>
										</p>
										<div class="btn_wrap">
											<ul>
												<li>
													<button type="button" class="btn btn_add">
														<span class="ico_plus">+</span>
													</button>
												</li>
												<li>
													<button type="button" class="btn btn_minus">
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
										<span class="seatBox">
											<input
												type="checkbox"
												name="seatBoxDtl"
												id="seatNum_28_01"
												value="1"
												onclick="fnSeatChc(this, 'seatNum_28_01');"
											/>
											<label class="disabled" for="seatNum_28_01">1</label>
										</span>
										<span class="seatBox">
											<input
												type="checkbox"
												name="seatBoxDtl"
												id="seatNum_28_01"
												value="1"
												onclick="fnSeatChc(this, 'seatNum_28_01');"
											/>
											<label for="seatNum_28_01">2</label>
										</span>
										<span class="seatBox">
											<input
												type="checkbox"
												name="seatBoxDtl"
												id="seatNum_28_01"
												value="1"
												onclick="fnSeatChc(this, 'seatNum_28_01');"
											/>
											<label for="seatNum_28_01">3</label>
										</span>
										<span class="seatBox">
											<input
												type="checkbox"
												name="seatBoxDtl"
												id="seatNum_28_01"
												value="1"
												onclick="fnSeatChc(this, 'seatNum_28_01');"
											/>
											<label for="seatNum_28_01">4</label>
										</span>
										<span class="seatBox">
											<input
												type="checkbox"
												name="seatBoxDtl"
												id="seatNum_28_01"
												value="1"
												onclick="fnSeatChc(this, 'seatNum_28_01');"
											/>
											<label for="seatNum_28_01">5</label>
										</span>
										<span class="seatBox">
											<input
												type="checkbox"
												name="seatBoxDtl"
												id="seatNum_28_01"
												value="1"
												onclick="fnSeatChc(this, 'seatNum_28_01');"
											/>
											<label for="seatNum_28_01">6</label>
										</span>
										<span class="seatBox">
											<input
												type="checkbox"
												name="seatBoxDtl"
												id="seatNum_28_01"
												value="1"
												onclick="fnSeatChc(this, 'seatNum_28_01');"
											/>
											<label for="seatNum_28_01">7</label>
										</span>
										<span class="seatBox">
											<input
												type="checkbox"
												name="seatBoxDtl"
												id="seatNum_28_01"
												value="1"
												onclick="fnSeatChc(this, 'seatNum_28_01');"
											/>
											<label for="seatNum_28_01">8</label>
										</span>
										<span class="seatBox">
											<input
												type="checkbox"
												name="seatBoxDtl"
												id="seatNum_28_01"
												value="1"
												onclick="fnSeatChc(this, 'seatNum_28_01');"
											/>
											<label for="seatNum_28_01">9</label>
										</span>
										<span class="seatBox">
											<input
												type="checkbox"
												name="seatBoxDtl"
												id="seatNum_28_01"
												value="1"
												onclick="fnSeatChc(this, 'seatNum_28_01');"
											/>
											<label for="seatNum_28_01">10</label>
										</span>
										<span class="seatBox">
											<input
												type="checkbox"
												name="seatBoxDtl"
												id="seatNum_28_01"
												value="1"
												onclick="fnSeatChc(this, 'seatNum_28_01');"
											/>
											<label for="seatNum_28_01">11</label>
										</span>
										<span class="seatBox">
											<input
												type="checkbox"
												name="seatBoxDtl"
												id="seatNum_28_01"
												value="1"
												onclick="fnSeatChc(this, 'seatNum_28_01');"
											/>
											<label for="seatNum_28_01">12</label>
										</span>
										<span class="seatBox">
											<input
												type="checkbox"
												name="seatBoxDtl"
												id="seatNum_28_01"
												value="1"
												onclick="fnSeatChc(this, 'seatNum_28_01');"
											/>
											<label for="seatNum_28_01">13</label>
										</span>
										<span class="seatBox">
											<input
												type="checkbox"
												name="seatBoxDtl"
												id="seatNum_28_01"
												value="1"
												onclick="fnSeatChc(this, 'seatNum_28_01');"
											/>
											<label for="seatNum_28_01">14</label>
										</span>
										<span class="seatBox">
											<input
												type="checkbox"
												name="seatBoxDtl"
												id="seatNum_28_01"
												value="1"
												onclick="fnSeatChc(this, 'seatNum_28_01');"
											/>
											<label for="seatNum_28_01">15</label>
										</span>
										<span class="seatBox">
											<input
												type="checkbox"
												name="seatBoxDtl"
												id="seatNum_28_01"
												value="1"
												onclick="fnSeatChc(this, 'seatNum_28_01');"
											/>
											<label for="seatNum_28_01">16</label>
										</span>
										<span class="seatBox">
											<input
												type="checkbox"
												name="seatBoxDtl"
												id="seatNum_28_01"
												value="1"
												onclick="fnSeatChc(this, 'seatNum_28_01');"
											/>
											<label for="seatNum_28_01">17</label>
										</span>
										<span class="seatBox">
											<input
												type="checkbox"
												name="seatBoxDtl"
												id="seatNum_28_01"
												value="1"
												onclick="fnSeatChc(this, 'seatNum_28_01');"
											/>
											<label for="seatNum_28_01">18</label>
										</span>
										<span class="seatBox last_seat">
											<input
												type="checkbox"
												name="seatBoxDtl"
												id="seatNum_28_01"
												value="1"
												onclick="fnSeatChc(this, 'seatNum_28_01');"
											/>
											<label for="seatNum_28_01">19</label>
										</span>
										<span class="seatBox last_seat">
											<input
												type="checkbox"
												name="seatBoxDtl"
												id="seatNum_28_01"
												value="1"
												onclick="fnSeatChc(this, 'seatNum_28_01');"
											/>
											<label for="seatNum_28_01">20</label>
										</span>
										<span class="seatBox last_seat">
											<input
												type="checkbox"
												name="seatBoxDtl"
												id="seatNum_28_01"
												value="1"
												onclick="fnSeatChc(this, 'seatNum_28_01');"
											/>
											<label for="seatNum_28_01">21</label>
										</span>
										<span class="seatBox last_seat">
											<input
												type="checkbox"
												name="seatBoxDtl"
												id="seatNum_28_01"
												value="1"
												onclick="fnSeatChc(this, 'seatNum_28_01');"
											/>
											<label for="seatNum_28_01">22</label>
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
									<span class="txt_selSeat" style="display: none"
										>좌석을 선택해주세요</span
									>
									<span class="txt_selSeat selected" id="selSeatView"
										>좌석을 선택해주세요</span
									><!-- 좌석번호 선택시 class="selected" 추가 -->
								</div>
								<div class="tbl_type3">
									<table class="taR">
										<tbody>
											<tr>
												<th scope="row">
													일반 <span id="adltSeatCnt">0명</span>
												</th>
												<td id="adltTotAmt">0원</td>
											</tr>

											<tr>
												<th scope="row">
													초등생 <span id="chldSeatCnt">0명</span>
												</th>
												<td id="chldTotAmt">0원</td>
											</tr>

											<tr>
												<th scope="row">
													보훈<span class="bohnDcRate"></span>
													<span id="bohnSeatCnt">0명</span>
												</th>
												<td id="bohnTotAmt">0원</td>
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
									<span class="sel_price" id="allTotAmtLocD">0원</span>
								</div>
							</section>
							<!-- //총 결제금액 -->
						</div>
						<div class="btns btn_selectSeat">선택완료</div>
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
	font-size: 22px;
	color: #f7f7f7;
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

.disabled {
	background-color: green;
	border-radius: 15px;
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

.btn_selectSeat {
	margin-top: 250px;
}
</style>
