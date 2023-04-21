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
			</div>
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
			<div class="container mt-2">
				<div class="row">
					<div class="col-lg-12">
						<table class="table">
							<thead>
								<tr class="text-center">
									<th class="col-1">번호</th>
									<th class="col-4">노선</th>
									<th class="col-1">소요시간(분)</th>
									<th class="col-3">운수사</th>
									<th class="col-2">버스번호</th>
									<th class="col-1">가격</th>
								</tr>
							</thead>
							<tbody class="table-group-divider text-center">
								<tr v-for="schedule in paginatedItems" :key="schedule.id">
									<td>{{ schedule.id }}</td>
									<td>
										{{ schedule.routeDTO.startTerminal.name }} ->
										{{ schedule.routeDTO.endTerminal.name }}
									</td>
									<td>
										{{ schedule.routeDTO.travelTime }}
									</td>
									<td>
										{{ schedule.busDTO.companyDTO.name }}
									</td>
									<td>{{ schedule.busDTO.busNum }}</td>
									<td>{{ schedule.price }}원</td>
								</tr>
							</tbody>
						</table>
					</div>
					<section>
						<div class="container">
							<div class="row justify-space-between py-2">
								<div class="mx-auto">
									<MaterialPagination :color="light">
										<MaterialPaginationItem
											prev
											class="ms-auto"
											@click="currentPage != 1 ? currentPage-- : null"
										/>
										<MaterialPaginationItem
											v-for="idx in maxPage"
											:key="idx"
											:label="idx"
											:active="currentPage == idx"
											@click="currentPage = idx"
										/>
										<MaterialPaginationItem
											next
											@click="currentPage != maxPage ? currentPage++ : null"
										/>
									</MaterialPagination>
								</div>
							</div>
						</div>
					</section>
				</div>
			</div>
		</div>
	</div>
	<AdminAuth />
</template>

<script setup>
import Navbar from '@/layouts/Navbar.vue';
import Sidebar from './Sections/SideBar.vue';
import MaterialButton from '@/components/MaterialButton.vue';
import axios from 'axios';
import { ref, computed } from 'vue';
import MaterialPagination from '@/components/MaterialPagination.vue';
import MaterialPaginationItem from '@/components/MaterialPaginationItem.vue';
import setMaterialInput from '@/assets/js/material-input';
import { onMounted } from 'vue';
import MaterialBadge from '@/components/MaterialBadge.vue';
import AdminAuth from '@/layouts/Auth/AdminAuth.vue';

const scheduleSave = ref();
const scheduleList = ref([]);

onMounted(() => {
	setMaterialInput();
});

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

// pagination
const currentPage = ref(1);
const pageSize = ref(10);
const maxPage = computed(() => {
	return Math.ceil(scheduleList.value.length / pageSize.value);
});

const paginatedItems = computed(() => {
	const startIndex = (currentPage.value - 1) * pageSize.value;
	return scheduleList.value.slice(startIndex, startIndex + pageSize.value);
});
</script>

<style scoped>
.table tbody tr:hover {
	background-color: rgba(0, 0, 0, 0.025);
}
</style>
