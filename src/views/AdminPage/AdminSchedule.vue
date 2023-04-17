<template>
	<Navbar light />
	<SideBar />
	<div class="container">
		<Page />
		<br />
		<h2 style="margin-left: 3%">
			배차관리
			<!-- <div class="main"></div> -->
		</h2>
		<table class="table table-striped">
			<thead>
				<tr style="text-align: center; margin: auto; width: 5%" type="text">
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
				<tr
					v-for="schedule in schedules"
					:key="schedule.id"
					style="text-align: center; margin: auto; width: 5%"
					type="text"
				>
					<td scope="row">{{ schedule.id }}</td>
					<td>{{ schedule.date }}</td>
					<td>{{ schedule.busNo }}</td>
					<td>{{ schedule.price }}</td>
					<td>{{ schedule.route }}</td>
					<td>
						<div class="col-6">
							<MaterialButton
								color="dark"
								id="searchString"
								class="input-group-static"
								@click="showModal = true"
								>수정</MaterialButton
							>
						</div>
						<div
							v-if="showModal"
							class="modal"
							tabindex="-1"
							style="display: flex"
						>
							<div class="modal-dialog">
								<div class="modal-content">
									<div class="modal-header">
										<h5 class="modal-title">배차정보 수정</h5>
										<MaterialBadge
											color="light"
											rounded
											class="text-dark"
											@click.prevent="showModal = false"
											style="cursor: pointer"
										>
											닫기
										</MaterialBadge>
									</div>
									<div class="modal-body">
										<tr
											style="text-align: center; margin: auto; width: 5%"
											type="text"
										>
											<th>순번</th>
											<th>아이디</th>
											<th>이름</th>
											<th>이메일</th>
											<th>전화번호</th>
										</tr>
										<tr
											v-on="(schedule, index) in schedules"
											:key="schedule.id"
											style="text-align: center; margin: auto; width: 5%"
											type="text"
										>
											<td>
												{{ index + 1 }}
											</td>
											<td>{{ schedule.id }}</td>
											<td>{{ schedule.date }}</td>
											<td>{{ schedule.busNo }}</td>
											<td>{{ schedule.price }}</td>
											<td>{{ schedule.route }}</td>
										</tr>
									</div>

									<div class="modal-footer justify-content-between">
										<MaterialButton
											variant="contained"
											color="dark"
											class="mb-0"
										>
											수정하기
										</MaterialButton>
									</div>
								</div>
							</div>
						</div>
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
import SideBar from './Sections/SideBar.vue';
import { ref } from 'vue';
import Footer from '@/layouts/Footer.vue';
import Navbar from '@/layouts/Navbar.vue';
// import Page from '@/layouts/Page.vue';
import MaterialButton from '@/components/MaterialButton.vue';
import MaterialBadge from '@/components/MaterialBadge.vue';
const showModal = ref(false);

// const show = ref(false);
// const showId = ref(null);

// const showScheduleModal = id => {
// 	show.value = !show.value;
// 	showId.value = id;
// };

const schedules = [
	{
		id: 1,
		date: '2023-04-12 17:47',
		busNo: '82가 9742',
		price: 150000,
		route: '서울-유스퀘어',
	},
];

const deleteSchedule = schedules => {
	console.log('delete', schedules);
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
