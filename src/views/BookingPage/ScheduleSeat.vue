<template>
	<Navbar light />
	<div class="page" id="seatChcPage">
		<h3>매수 및 좌석선택</h3>

		<div class="selectSeat_wrap">
			<!-- compareBox -->
			<div class="compare_wrap">
				<!-- 좌측 infoBox -->
				<div class="infoBox">
					<p class="date" id="satsDeprDtm">2023. 4. 11. 화</p>

					<div class="route_wrap" id="satsRotInfo">
						<div class="inner">
							<p class="roundBox departure" id="satsDeprTmlNm">
								센트럴시티(서울)
							</p>
							<!-- 출발지 -->

							<p class="roundBox arrive" id="satsArvlTmlNm">광주(유·스퀘어)</p>
							<!-- 도착지 -->
						</div>
						<div class="detail_info">
							<span id="satsTakeDrtm">3시간 20분 소요</span>
							<span id="satsDist">290.8 Km</span>
						</div>
						<div class="btn_r">
							<a href="#" class="btn btn_modify white" onclick="fnUpdRot();"
								>수정</a
							>
						</div>
					</div>

					<div class="route_wrap">
						<div class="tbl_type2">
							<table>
								<caption>
									<strong>버스 정보</strong>
									<p>고속사, 등급, 출발</p>
								</caption>
								<colgroup>
									<col style="width: 66px" />
									<col style="width: *" />
								</colgroup>
								<tbody>
									<tr>
										<th scope="row">고속사</th>
										<td>금호익스프레스(주)</td>
									</tr>
									<tr>
										<th scope="row">등급</th>
										<td>우등</td>
									</tr>
									<tr>
										<th scope="row">출발</th>
										<td>17:45</td>
									</tr>
								</tbody>
							</table>
							<div class="btn_r mob_pad">
								<a href="#" class="btn btn_modify white">수정</a>
							</div>
						</div>
					</div>
				</div>
				<!-- //좌측 infoBox -->

				<!-- 우측 detailBox -->
				<div class="detailBox">
					<div class="detailBox_head" style="height: 66px">
						<div class="count_seat">
							<span class="count_num">잔여 25석 / 전체 28석</span>
						</div>
					</div>
					<!-- mobile 매수 선택 -->
					<div>
						<div class="ticketBox mobileBox">
							<ul class="sel_list col2" id="mobileSelCnt">
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
											<em>초등생</em>

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
											<em>보훈</em>

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

						<div class="detailBox_body">
							<div class="selectSeat_box">
								<div class="bg_seatBox seat28" style="display: block">
									<div class="seatList">
										<span class="seatBox">
											<input
												type="checkbox"
												name="seatBoxDtl"
												id="seatNum_28_01"
												value="1"
												onclick="fnSeatChc(this, 'seatNum_28_01');"
											/>
											<label for="seatNum_28_01">1</label>
										</span>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<!-- //우측 detailBox -->
			</div>
			<!-- //compareBox -->
			<!-- 선택좌석 상세보기 -->
			<div class="selectSeat_detail">
				<div class="box_tbl">
					<!-- 탑승인원 및 요금 -->
					<section class="box_detail">
						<div class="tbl_type3">
							<table class="taR">
								<caption>
									<strong>탑승인원 및 요금</strong>
									<p>결제금액, 취소 수수료(예상), 반환금액</p>
								</caption>
								<colgroup>
									<col />
									<col />
								</colgroup>
								<tbody>
									<tr>
										<th scope="row" class="txt_black">탑승인원 및 요금</th>
										<td id="allTotAmtLocU">0원</td>
									</tr>

									<tr>
										<th scope="row">일반 <span id="adltSeatCnt">0명</span></th>
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
	<Footer />
</template>

<script setup>
import Footer from '@/layouts/Footer.vue';
import Navbar from '@/layouts/Navbar.vue';
</script>

<style>
.page {
	width: 100%; /* 부모 요소의 100% 너비 */
	max-width: 1000px; /* 최대 너비 제한 */
	margin: 0 auto; /* 가운데 정렬 */
	padding: 40px; /* 여백 추가 */
	background-color: #f0f0f0;
}

.selectSeat_wrap {
	display: flex;
	flex-direction: row;
	width: 100%; /* 부모 요소의 100% 너비 */
	height: 550px; /* 높이 설정 */
}

.page h3 {
	text-align: center;
}

.compare_wrap {
	display: flex;
	flex-direction: row;
	width: 100%;
}

.selectSeat_detail {
	width: 300px;
}

.count_seat span {
	text-align: center;
}

.btn {
	border: 1px solid;
	width: 40px;
	height: 40px;
}
.sel_list {
	list-style: none;
}

.countBox ul {
	list-style: none;
}

.btn_wrap {
	width: 100%;
	height: 100%;
	border-radius: 1px solid;
}
</style>
