<template>
	<Navbar light />
	<SideBar />

	<div class="container">
		<Page />
		<br />
		<h2 style="margin-left: 3%">
			노선관리
			<!-- <div class="main"></div> -->
		</h2>
		<table class="table table-striped">
			<thead>
				<tr>
					<th>노선번호</th>
					<th>출발지</th>
					<th>도착지</th>
					<th>날짜</th>
					<th>등급</th>
					<th>인원</th>
					<th>수정</th>
					<th>삭제</th>
				</tr>
			</thead>
			<tbody>
				<tr v-for="route in routes" :key="route.id">
					<td scope="row">{{ route.id }}</td>
					<td>{{ route.start }}</td>
					<td>{{ route.end }}</td>
					<td>{{ route.Date }}</td>
					<td>{{ route.type }}</td>
					<td>{{ route.count }}</td>
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
// import Page from '@/layouts/Page.vue';

const routes = [];
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
