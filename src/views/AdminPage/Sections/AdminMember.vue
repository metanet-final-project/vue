<template>
	<Navbar light />
	<SideBar />
	<div class="container">
		<Page />
		<br />
		<h2>
			회원관리
			<!-- <div class="main"></div> -->
		</h2>
		<table class="table table-striped">
			<thead>
				<tr>
					<th>아이디</th>
					<th>이름</th>
					<th>이메일</th>
					<th>전화번호</th>
					<th>수정</th>
					<th>삭제</th>
				</tr>
			</thead>
			<tbody>
				<tr v-for="member in members" :key="member.id">
					<td scope="row">{{ member.id }}</td>
					<td>{{ member.name }}</td>
					<td>{{ member.email }}</td>
					<td>{{ member.phone }}</td>
					<td>
						<button class="btn btn-primary" @click="editMember(member)">
							수정
						</button>
					</td>
					<td>
						<button class="btn btn-danger" @click="deleteMember(member)">
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

const members = [
	{ id: 1, name: 'ddd', email: 'asdfasdf@asdfasdf', phone: '010-1231-2412' },
	{ id: 2, name: 'sss', email: 'fadsahn5@asdfasdf', phone: '010-8841-1234' },
	{ id: 3, name: 'ddd', email: 'qurgcv21@asdfasdf', phone: '010-1254-8416' },
	{ id: 4, name: 'ddd', email: 'asdfasdf@asdfasdf', phone: '010-1231-2412' },
	{ id: 5, name: 'sss', email: 'fadsahn5@asdfasdf', phone: '010-8841-1234' },
	{ id: 6, name: 'ddd', email: 'qurgcv21@asdfasdf', phone: '010-1254-8416' },
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
</style>
