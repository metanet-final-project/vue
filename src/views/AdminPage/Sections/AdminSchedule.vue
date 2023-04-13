<template>
	<Navbar light />
	<SideBar />
	<div class="container">
		<Page />
		<br />
		<h2>
			배차관리
			<!-- <div class="main"></div> -->
		</h2>
		<table class="table table-striped">
			<thead>
				<tr>
					<th>배차번호</th>
					<th>날짜</th>
					<th>버스번호</th>
					<th>금액</th>
					<th>노선</th>
					<th>수정</th>
					<th>삭제</th>
				</tr>
			</thead>
			<tbody>
				<tr v-for="schedule in schedules" :key="schedule.id">
					<td scope="row">{{ schedule.id }}</td>
					<td>{{ schedule.date }}</td>
					<td>{{ schedule.busNo }}</td>
					<td>{{ schedule.price }}</td>
					<td>{{ schedule.route }}</td>
					<td>
						<button class="btn btn-primary" @click="editSchedule(schedule)">
							수정
						</button>
					</td>
					<td>
						<button class="btn btn-danger" @click="deleteSchedule(schedule)">
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

const schedules = [
	{
		id: 1,
		date: '2023-04-12 17:47',
		busNo: '82가 9742',
		price: 150000,
		route: '서울-유스퀘어',
	},
];

const editSchedule = schedules => {
	console.log('update', schedules);
};

const deleteSchedule = schedules => {
	console.log('delete', schedules);
};
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
	height: 10 0px;
}

.table {
	width: 100%;
	border-collapse: collapse;
	margin-top: 20px;
}
</style>
