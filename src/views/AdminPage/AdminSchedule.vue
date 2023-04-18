<template>
	<Navbar light />
	<div class="row">
		<Sidebar />
		<div class="col-md-9">
			<div
				class="mt-4 d-flex justify-content-between"
				style="background-color: #f0f2f5; border-radius: 10px"
			>
				<h4 class="m-3 p-2">배차관리</h4>
				<MaterialButton
					class="m-3"
					variant="contained"
					color="dark"
					@click.prevent="showModal2 = true"
					>배차등록</MaterialButton
				>
			</div>
			<!-- 배차등록 버튼 모달 나중에 -->
			<!-- 배차등록 버튼 모달 나중에 -->
			<div v-if="showModal2" class="modal" tabindex="-1" style="display: flex">
				<div class="modal-dialog">
					<div
						class="modal-content"
						style="
							box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25),
								0 10px 10px rgba(0, 0, 0, 0.22);
							width: 400px;
						"
					>
						<div class="modal-header">
							<h5 class="modal-title">배차등록</h5>
							<MaterialBadge
								color="dark"
								rounded
								class="text-white"
								@click.prevent="showModal2 = false"
								style="cursor: pointer"
							>
								닫기
							</MaterialBadge>
						</div>
						<div class="modal-body">
							<form role="form" class="text-start p-3">
								<label>배차번호</label>
								<div class="input-group input-group-outline mb-2">
									<input
										type="text"
										class="form-control"
										v-model="scheduleSave.id"
									/>
								</div>
								<label>출발시간</label>
								<div class="input-group input-group-outline mb-2">
									<input
										type="text"
										class="form-control"
										v-model="scheduleSave.startTime"
									/>
								</div>
								<label>도착시간</label>
								<div class="input-group input-group-outline mb-2">
									<input
										type="text"
										class="form-control"
										v-model="scheduleSave.endTime"
									/>
								</div>
								<label>버스번호</label>
								<div class="input-group input-group-outline mb-2">
									<input
										type="text"
										class="form-control"
										v-model="scheduleSave.busDTO.id"
									/>
								</div>
								<label>가격</label>
								<div class="input-group input-group-outline mb-2">
									<input
										type="text"
										class="form-control"
										v-model="scheduleSave.price"
									/>
								</div>

								<div class="input-group input-group-static my-3">
									<label>생년월일</label>
									<input
										type="date"
										class="form-control"
										id="birth"
										v-model="scheduleSave.birth"
									/>
								</div>
								<div class="modal-footer justify-content-between">
									<MaterialButton
										variant="contained"
										color="dark"
										class="mb-0"
										@click.prevent="saveSchedule"
										>등록</MaterialButton
									>
								</div>
							</form>
						</div>
					</div>
				</div>
			</div>
			<!-- 배차등록 버튼 모달 나중에 -->
			<div class="container mt-4">
				<div class="row">
					<div class="col-lg-12">
						<table class="table">
							<thead>
								<tr class="text-center">
									<th class="col-1">순번</th>
									<th class="col-1">배차번호</th>
									<th class="col-2">출발시간</th>
									<th class="col-2">도착시간</th>
									<th class="col-3">버스번호</th>
									<th class="col-2">가격</th>
								</tr>
							</thead>
							<tbody class="table-group-divider text-center">
								<tr v-for="(schedule, idx) in scheduleList" :key="schedule.id">
									<td>{{ idx + 1 }}</td>
									<td>{{ schedule.id }}</td>
									<td>{{ schedule.startTime }}</td>
									<td>{{ schedule.endTime }}</td>
									<td>{{ schedule.busDTO.id }}</td>
									<td>{{ schedule.price }}</td>
								</tr>
							</tbody>
						</table>
					</div>
					<div
						v-if="showModal"
						class="modal"
						tabindex="-1"
						style="display: flex"
					>
						<div class="modal-dialog">
							<div
								class="modal-content"
								style="
									box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25),
										0 10px 10px rgba(0, 0, 0, 0.22);
									width: 400px;
								"
							>
								<div class="modal-header">
									<h5 class="modal-title">회원관리</h5>
									<MaterialBadge
										color="dark"
										rounded
										class="text-white"
										@click.prevent="showModal = false"
										style="cursor: pointer"
									>
										닫기
									</MaterialBadge>
								</div>
								<div class="modal-body">
									<form role="form" class="text-start">
										<label>회원고유번호</label>
										<div class="input-group input-group-outline mb-2">
											<input
												type="text"
												class="form-control"
												disabled
												v-model="member.id"
											/>
										</div>
										<label>아이디</label>
										<div class="input-group input-group-outline mb-2">
											<input
												type="text"
												class="form-control"
												disabled
												v-model="member.loginId"
											/>
										</div>
										<label>이름</label>
										<div class="input-group input-group-outline mb-2">
											<input
												type="text"
												class="form-control"
												v-model="member.name"
											/>
										</div>
										<label>이메일</label>
										<div class="input-group input-group-outline mb-2">
											<input
												type="text"
												class="form-control"
												v-model="member.email"
											/>
										</div>
										<label>전화번호</label>
										<div class="input-group input-group-outline mb-2">
											<input
												type="text"
												class="form-control mb-4"
												v-model="member.phone"
											/>
										</div>
									</form>
								</div>
							</div>
						</div>
					</div>
					<div class="row">
						<div class="col-3 offset-md-9">
							<div class="input-group input-group-outline my-3">
								<label class="form-label">회원검색</label>
								<input
									type="text"
									class="form-control form-control-md"
									v-model="memberValue"
									placeholder
								/>
							</div>
							<button
								class="btn btn-outline-secondary input-group-text"
								type="button"
								@click="searchMember"
							>
								검색
							</button>
						</div>

						<div class="input-group-append"></div>
					</div>
					<section class="py-4">
						<div class="container">
							<div class="row justify-space-between py-2">
								<div class="col-lg-4 mx-auto">
									<MaterialPagination :color="light">
										<MaterialPaginationItem prev class="ms-auto" />
										<MaterialPaginationItem label="1" active />
										<MaterialPaginationItem label="2" />
										<MaterialPaginationItem label="3" />
										<MaterialPaginationItem label="4" />
										<MaterialPaginationItem label="5" />
										<MaterialPaginationItem next />
									</MaterialPagination>
								</div>
							</div>
						</div>
					</section>
				</div>
			</div>
		</div>
	</div>
	<Footer />
</template>

<script setup>
import Footer from '@/layouts/Footer.vue';
import Navbar from '@/layouts/Navbar.vue';
import Sidebar from './Sections/SideBar.vue';
import MaterialButton from '@/components/MaterialButton.vue';
import axios from 'axios';
import { ref } from 'vue';
import MaterialPagination from '@/components/MaterialPagination.vue';
import MaterialPaginationItem from '@/components/MaterialPaginationItem.vue';
import setMaterialInput from '@/assets/js/material-input';
import { onMounted } from 'vue';
import MaterialBadge from '@/components/MaterialBadge.vue';
import Swal from 'sweetalert2';

onMounted(() => {
	setMaterialInput();
});

const scheduleSave = ref();
const scheduleList = ref([]);
const showModal = ref(false);
const showModal2 = ref(false);

const findAllSchedule = async () => {
	try {
		const result = await axios.get('/api/schedule/findAllDTO');
		if (result.data != null) {
			scheduleList.value = result.data;
			console.log(result.data);
		}
	} catch (error) {
		console.error(error);
	}
};
findAllSchedule();

const saveSchedule = async () => {
	try {
		const result = await axios.post('/api/schedule/save', scheduleSave.value);
		if (result != null) {
			showToast('success', '등록 성공했습니다');
			showModal2.value = false;
			findAllSchedule();
		}
	} catch (error) {
		showToast('error', '올바른 정보를 입력하세요');
	}
};

// const searchMember = async () => {
// 	try {
// 		const result = await axios.get(
// 			`/api/member/findByLoginId/${memberValue.value}`,
// 		);
// 		if (result != null) {
// 			getMember.value = result.data;
// 			console.log(getMember.value);
// 			showToast('success', '검색 성공');
// 		}
// 	} catch (error) {
// 		console.log(error);
// 		showToast('error', '올바른 아이디를 입력하세요');
// 	}
// };

const Toast = Swal.mixin({
	toast: true,
	position: 'bottom-end',
	showConfirmButton: false,
	timer: 3000,
	timerProgressBar: true,
});

const showToast = (icon, title) => {
	Toast.fire({
		icon: icon,
		title: title,
	});
};
</script>
