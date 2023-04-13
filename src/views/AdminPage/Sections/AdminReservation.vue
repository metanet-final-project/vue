<template>
	<Navbar light />
	<SideBar />
	<div class="container">
		<Page />
		<br />
		<h2>예약관리</h2>
		<table class="table table-striped">
			<thead>
				<tr>
					<th>번호</th>
					<th>이름</th>
					<th>예약날짜</th>
					<th>회원구분</th>
					<th>전화번호</th>
					<th>수정</th>
					<th>삭제</th>
				</tr>
			</thead>
			<tbody>
				<tr v-for="list in booking" :key="list.id">
					<td scope="row">{{ list.id }}</td>
					<td>{{ list.name }}</td>
					<td>{{ list.date }}</td>
					<td>{{ list.type }}</td>
					<td>{{ list.phone }}</td>
					<td>
						<button class="btn btn-primary" @click="editMember(list)">
							수정
						</button>
					</td>
					<td>
						<button class="btn btn-danger" @click="deleteMember(list)">
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

const booking = [
	{
		id: 1,
		name: 'ddd',
		date: '2023-04-12 12:25:32',
		type: '회원',
		phone: '010-1231-2412',
	},
	{
		id: 2,
		name: 'sss',
		date: '2023-04-14 17:45:32',
		type: '비회원',
		phone: '010-1231-2412',
	},
	{
		id: 3,
		name: 'aaa',
		date: '2023-04-12 18:25:32',
		type: '회원',
		phone: '010-1231-2412',
	},
	{
		id: 4,
		name: 'eqwr',
		date: '2023-04-15 19:15:32',
		type: '비회원',
		phone: '010-1231-2412',
	},
	{
		id: 5,
		name: 'yre',
		date: '2023-04-17 21:12:32',
		type: '회원',
		phone: '010-1231-2412',
	},
	{
		id: 6,
		name: 'dskfj',
		date: '2023-04-22 18:46:32',
		type: '비회원',
		phone: '010-1231-2412',
	},
];

const editMember = list => {
	console.log('update', list);
};

const deleteMember = list => {
	console.log('delete', list);
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
	height: 100px;
}
.table {
	width: 100%;
	border-collapse: collapse;
	margin-top: 20px;
}

.btn-primary {
	background-color: #00ff00;
}
</style>
