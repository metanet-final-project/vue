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
