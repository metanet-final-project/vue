<template>
	<Navbar light />
	<SideBar />
	<div class="container">
		<Page />
		<br />
		<h2>
			고객센터
			<!--   -->
		</h2>
		<div class="noti">고속버스 홈페이지의 새로운 소식을 확인하세요.</div>
		<div class="board_list">
			<ul>
				<li class="label">
					<a href="#" class="cont" onclick="fnGoReadPage(20210719001);">
						<p>개인정보 처리방침 약관 개정 안내</p>
						<!--<span></span> -->
					</a>
					<span class="date"> 2021.07.19 </span>
				</li>
				<br />

				<li class="label">
					<a href="#" class="cont" onclick="fnGoReadPage(20191125001);">
						<p>프리미엄 고속버스 마일리지 소멸 유효기간 안내</p>
						<!--<span></span> -->
					</a>
					<span class="date"> 2019.11.22 </span>
				</li>
				<br />

				<li class="label">
					<a href="#" class="cont" onclick="fnGoReadPage(20190923001);">
						<p>고속/시외버스모바일 앱 명칭 변경에 따른 약관 개정 고지</p>
						<!--<span></span> -->
					</a>
					<span class="date"> 2019.09.23 </span>
				</li>
				<br />

				<li class="label">
					<a href="#" class="cont" onclick="fnGoReadPage(20190822001);">
						<p>노쇼방지를 위한 동일카드 예매 횟수 변경 안내</p>
						<!--<span></span> -->
					</a>
					<span class="date"> 2019.08.22 </span>
				</li>
				<br />

				<li class="label">
					<a href="#" class="cont" onclick="fnGoReadPage(20190809001);">
						<p>■ 고객센터 점심시간 운영 안내</p>
						<!--<span></span> -->
					</a>
					<span class="date"> 2019.08.09 </span>
				</li>
				<br />

				<li class="label">
					<a href="#" class="cont" onclick="fnGoReadPage(20190226001);">
						<p>강원도 노선 업무 제휴 업체 리스트 (동부고속)</p>
						<!--<span></span> -->
					</a>
					<span class="date"> 2019.02.26 </span>
				</li>
				<br />

				<li>
					<a href="#" class="cont" onclick="fnGoReadPage(20210719001);">
						<p>개인정보 처리방침 약관 개정 안내</p>
					</a>
					<span class="date"> 2021.07.19 </span>
				</li>
				<br />

				<li>
					<a href="#" class="cont" onclick="fnGoReadPage(20210621001);">
						<p>개인정보 처리방침 약관 개정 안내</p>
						<!-- <span></span> -->
					</a>
					<span class="date"> 2021.06.21 </span>
				</li>
				<br />

				<li>
					<a href="#" class="cont" onclick="fnGoReadPage(20201231001);">
						<p>비회원 예매 프로세스 변경 관련 안내</p>
						<!-- <span></span> -->
					</a>
					<span class="date"> 2020.12.31 </span>
				</li>
				<br />

				<li>
					<a href="#" class="cont" onclick="fnGoReadPage(20201207001);">
						<p>개인정보 처리방침 약관 개정 안내</p>
						<!-- <span></span> -->
					</a>
					<span class="date"> 2020.12.07 </span>
				</li>
				<br />
			</ul>
		</div>
		<div class="page customer">
			<form id="readForm" name="readForm" method="post">
				<input type="hidden" id="lostCom" name="lostCom" />
				<div class="noti_wrap taL">
					<!-- 170119 class추가 'taL' -->
					<p class="noti">
						탑승하신 고속버스 운송사를 선택 후
						<span class="line_block"
							>해당 지역의 유실물 센터로 문의하시기 바랍니다.</span
						>
					</p>
				</div>
				<ul class="lost_com clfix">
					<li>
						<a href="javascript:fnReadLossClnc('1');"
							><img src="./img/booking.jpeg" alt="금호고속"
						/></a>
					</li>
					<li>
						<a href="javascript:fnReadLossClnc('2');"
							><img
								src="../../images/page/lost_com2_s.png"
								alt="Dongbu Express"
						/></a>
					</li>
					<li>
						<a href="javascript:fnReadLossClnc('3');"
							><img src="../../images/page/lost_com3_s.png" alt="동양고속"
						/></a>
					</li>
					<li>
						<a href="javascript:fnReadLossClnc('4');"
							><img src="../../images/page/lost_com4_s.png" alt="중앙고속"
						/></a>
					</li>
					<li>
						<a href="javascript:fnReadLossClnc('5');"
							><img
								src="../../images/page/lost_com5_s.png"
								alt="CHUNIL EXPRESS"
						/></a>
					</li>
					<li>
						<a href="javascript:fnReadLossClnc('6');"
							><img src="../../images/page/lost_com6_s.png" alt="SAMHWA"
						/></a>
					</li>
					<li>
						<a href="javascript:fnReadLossClnc('7');"
							><img src="../../images/page/lost_com7_s.png" alt="HANIL EXPRESS"
						/></a>
					</li>
					<li>
						<a href="javascript:fnReadLossClnc('8');"
							><img
								src="../../images/page/lost_com8_s.png"
								alt="금호속리산고속"
						/></a>
					</li>
				</ul>
			</form>
		</div>
		<div class="search_wrap type2">
			<p class="form-control">
				<input
					type="text"
					id="srchNtcTlNm"
					name="srchNtcTlNm"
					placeholder="검색어를 입력하세요"
					value=""
					onkeydown="fnSubmit();"
				/>
				<button type="button" onclick="fnSrchBtnClick();">검색</button>
			</p>
		</div>
	</div>

	<Footer />
</template>

<script setup>
import SideBar from '../SideBar.vue';
import Footer from '@/layouts/Footer.vue';
import Navbar from '@/layouts/Navbar.vue';
import Page from '@/layouts/Page.vue';
</script>

<style scoped>
.container {
	width: 100%;
	max-width: 1000px;
	height: 100%;
	margin: 0 auto;
}

.main {
	width: 100px;
	height: 100px;
}
</style>
