<template>
	<Navbar light />
	<SideBar />
	<div class="container">
		<Page />
		<br />
		<h2 style="margin-left: 3%">예약관리</h2>
		<table class="table table-striped">
			<thead>
				<tr style="text-align: center; margin: auto; width: 5%" type="text">
					<th>순번</th>
					<th>회원ID</th>
					<th>회원명</th>
					<th>출발지</th>
					<th>도착지</th>
					<th>예약날짜</th>
					<th>좌석번호</th>
					<!-- <th>수정</th> -->
					<th>삭제</th>
				</tr>
			</thead>
			<tbody>
				<tr
					v-for="(list, index) in booking"
					:key="list.id"
					style="text-align: center; margin: auto; width: 5%"
					type="text"
				>
					<td scope="row">{{ index + 1 }}</td>
					<td>{{ list.memberDTO.loginId }}</td>
					<td>{{ list.memberDTO.name }}</td>
					<td>{{ list.routeDTO.startTerminal.name }}</td>
					<td>{{ list.routeDTO.endTerminal.name }}</td>
					<td>{{ list.scheduleDTO.startTime }}</td>
					<td>{{ list.seatNum }}</td>
					<!-- <td>
						<button class="btn btn-primary" @click="editBooking(list)">
							수정
						</button>
					</td> -->
					<td>
						<button class="btn btn-danger" @click="deleteBooking(list.id)">
							삭제
						</button>
					</td>
				</tr>
			</tbody>
		</table>
		<div class="search_wrap type2">
			<p class="form-control">
				<input
					type="text"
					v-model="loginId"
					placeholder="회원ID를 입력하세요"
				/>
				<button type="button" @click="searchBooking">검색</button>
			</p>
		</div>
	</div>
	<Footer />
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import SideBar from '../SideBar.vue';
import Footer from '@/layouts/Footer.vue';
import Navbar from '@/layouts/Navbar.vue';
// import Page from '@/layouts/Page.vue';
import axios from 'axios';

const booking = ref('');
const router = useRouter();
const loginId = ref();

const AdminBookingSearchView = async () => {
	try {
		const result = await axios.get('/api/booking/find-all-DTO');
		booking.value = result.data;
	} catch (error) {
		console.log(error);
	}
};
AdminBookingSearchView();

// const editBooking = list => {
// 	console.log('update', list);
// };

const deleteBooking = async id => {
	try {
		const result = await axios.delete(`/api/booking/delete/${id}`);
		if (result != null) {
			alert('삭제 성공');
			router.go(0);
		}
	} catch (error) {
		console.log(error);
	}
};

const searchBooking = async () => {
	try {
		console.log(loginId.value);
		const result = await axios.get(
			`/api/booking/find/findByLoginId/${loginId.value}`,
		);
		if (result != null) {
			booking.value = result.data;
			console.log(booking.value);
		}
	} catch (error) {
		console.log(error);
	}
};
</script>

<style scoped>
.app {
	margin: 0;
}

.table {
	width: 100%;
	border-collapse: collapse;
	margin-top: 20px;
}

.button-border {
	border: 2px solid black;
	border-radius: 4px;
}
.btn-primary {
	background-color: #00ff00;
}
tr th {
	padding: 10px;
}
.modal-content {
	box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
}
</style>
