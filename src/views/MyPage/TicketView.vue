<template>
	<div class="ticket-container">
		<div class="print_head">
			<ul class="desc_list">
				<li>
					인쇄된 홈티켓이 아닌 화면을 휴대폰으로 사진 촬영하거나 캡처한
					이미지는<br />
					효력이 없습니다.
				</li>
				<li>
					홈티켓 인쇄시 QR코드가 정상적으로 인쇄되어 출력되어야 합니다.<br />
					정상출력이 불가할 셩우 프린트물을 페기하시고 터미널청구에서 재발행<br />받으시기
					바랍니다.<span style="color: #5691bd">
						(예매 시 사용한 신용카드 지참)</span
					>
				</li>
			</ul>
			<p class="btnBox">
				<button type="button" @click="printPage" style="padding: 0">
					<img src="/src/assets/img/btn_print_blue.gif" alt="프린트버튼" />
				</button>
			</p>
		</div>

		<div class="ticketArea">
			<img src="/src/assets/img/img_ticket.gif" class="ticket-image" />
			<strong class="title">시외버스 승차권</strong>
			<div class="ticket-info-section sec01">
				<ul>
					<li>
						<span class="txt_sml fl">출발일시</span>
						<span class="fr">{{ ticket.scheduleDTO.busDTO.grade }}</span>
					</li>
					<li>
						<span class="txt_large5 fl">{{
							moment(ticket.scheduleDTO.startTime).format(
								'YYYY년 MM월 DD일 HH:mm',
							)
						}}</span>
						<span class="txt_sml fr">{{ ticket.ageDTO.name }}</span>
					</li>
				</ul>
			</div>
			<div class="ticket-info-section sec02">
				<span class="qrCode">
					<canvas width="76" height="76"></canvas>
				</span>
				<span class="qrCodeNum">
					202304129945634
					<br />
					01092834
				</span>
			</div>
			<div class="ticket-info-section sec03">
				<ul>
					<li>
						<span class="txt_large17">{{
							ticket.routeDTO.startTerminal.name
						}}</span>
						<span class="txt_sml_333">출발</span>
					</li>
					<li>
						<span class="txt_large17">
							{{ ticket.routeDTO.endTerminal.name }}</span
						>
						<span class="txt_sml_333">도착</span>
					</li>
				</ul>
				<div class="schedule-info">
					<span class="f1"
						>{{ ticket.routeDTO.startTerminal.name }}&nbsp;08:10출발 /
						{{ ticket.routeDTO.endTerminal.name }}행</span
					>
				</div>
				<p class="price-info">
					<span class="txt_font13_333">요금 </span>
					<span class="price">
						<span class="txt_large16">
							{{ ticket.price.toLocaleString() }}</span
						>
						<span class="txt_large13">원 (부가가치세 포함)</span>
					</span>
				</p>
			</div>
			<div class="ticket-info-section sec04">
				<ul>
					<li>
						<span class="txt_sml fl"
							>출발시간
							<br />
							Time
						</span>
						<span class="txt_large15 fr">{{
							moment(ticket.scheduleDTO.startTime).format('HH:mm')
						}}</span>
					</li>
					<li>
						<span class="txt_sml fl">좌석<br />Seat</span>
						<span class="txt_large15 fr">{{ ticket.seatNum }}</span>
					</li>
					<li>
						<span class="txt_sml fl">운송회사<br />Express Co</span>
						<span class="txt_large15 fr">{{
							ticket.scheduleDTO.busDTO.companyDTO.name
						}}</span>
					</li>

					<li>
						<span class="txt_sml fl">승차홈<br />Platform</span>
						<span class="txt_large15 fr"> </span>
					</li>
				</ul>
			</div>
			<div class="ticket-info-section sec05">
				<ul>
					<li>
						결제일자
						{{ moment(ticket.bookingDate).format('YYYYMMDD') }} &nbsp;승인금액
						{{ ticket.price.toLocaleString() }}
					</li>
					<li>신용카드 {{ ticket.payDTO.cardNumber }}</li>
					<li>유효기간 : 당일 지정차에 한함</li>
					<li>
						고속회사 :
						{{ ticket.scheduleDTO.busDTO.companyDTO.name }}
					</li>
				</ul>
			</div>
		</div>
	</div>
</template>
<script setup>
import axios from 'axios';
import { ref } from 'vue';
import moment from 'moment';
import 'moment/locale/ko';

import { useRoute } from 'vue-router';

const route = useRoute();

const id = route.params.id;
const ticket = ref('');

const getTicket = async () => {
	const res = await axios.get(`/api/booking/find/findTicketByBookingId/${id}`);
	ticket.value = res.data;
	console.log(ticket.value);
};
getTicket();

const printPage = () => {
	window.print();
};
</script>
<style scoped>
.ticketArea {
	position: relative;
	float: left;
	width: 274px;
	margin: 20px 0 0 25px;
	padding: 0 20px;
	box-sizing: border-box;
}

.ticket-image {
	display: block;
	position: absolute;
	left: 0;
	top: 0;
	z-index: -1;
}

.title {
	display: block;
	margin-top: 48px;
	font-size: 20px;
	color: #000;
	font-weight: bold;
	text-align: center;
}
.print_head {
	position: relative;
	height: 90px;
	margin-bottom: 20px;
	padding: 0 20px;
}
.print_head .btnBox {
	position: absolute;
	right: 0;
	top: 0;
	width: 90px;
	height: 90px;
}
ul,
ol {
	list-style: none;
}

p {
	display: block;
	margin-block-start: 1em;
	margin-block-end: 1em;
	margin-inline-start: 0px;
	margin-inline-end: 0px;
}

.ticket-info-section span {
	white-space: nowrap;
	overflow: hidden;
	text-overflow: ellipsis;
}
.ticket-container .ticketArea .sec01 {
	margin-top: 12px;
}

.ticket-container .ticketArea .sec05 {
	margin-top: 100px;
}

.ticket-container .ticketArea .sec02 .qrCodeNum {
	display: block;
	margin-top: 5px;
	font-size: 11px;
	color: #000;
	text-align: center;
}

img,
fieldset,
button {
	vertical-align: middle;
	border: 0;
}

.ticket-container {
	width: 595px;
	padding: 20px 0;
}

.txt_sml {
	font-size: 10px;
	color: #000;
}

.txt_sml_333 {
	font-size: 10px;
	color: #333;
}

.txt_large16 {
	font-size: 16px;
	color: #000;
	font-weight: bold;
}

.ticket-container .ticketArea .sec01 .txt_large15.fl {
	position: relative;
	top: -5px;
	font-size: 15px;
	font-weight: bold;
	color: #000;
}

body,
p,
h1,
h2,
h3,
h4,
h5,
h6,
ul,
ol,
li,
dl,
dt,
dd,
table,
thead,
tbody,
tr,
th,
td,
form,
fieldset,
legend,
input,
textarea,
button,
a {
	margin: 0;
	padding: 0;
	font-weight: normal;
	color: #666;
	font-family: 'Malgun Gothic', '맑은고딕', sans-serif;
	font-size: 12px;
	line-height: 1.5;
	letter-spacing: -0.03em;
}

.homeTicket_wrap .print_body .sec03 ul li span {
	display: block;
}
.txt_large17 {
	font-size: 17px;
	color: #000;
	font-weight: bold;
}

.ticket-container .ticketArea .sec03 ul li {
	float: left;
	width: 50%;
	padding-top: 20px;
	text-align: center;
}

.ticket-container .ticketArea .sec03 ul li span {
	display: block;
}
.ticket-container .ticketArea .sec03 .schedule-info span {
	font-size: 11px;
	color: #000;
}

.fr {
	float: right !important;
}

.ticket-container .ticketArea .sec04 ul li {
	float: left;
	width: 50%;
	height: 37px;
	padding: 10px;
	box-sizing: border-box;
}
</style>
