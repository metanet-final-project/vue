<template>
	<Navbar light />
	<div class="row">
		<Sidebar />
		<div class="col-md-9">
			<div>
				<div
					class="mt-4 d-flex justify-content-between"
					style="background-color: #f0f2f5; border-radius: 10px"
				>
					<h4 class="m-3 p-2">노선관리</h4>
					<MaterialButton
						class="m-3"
						variant="contained"
						color="dark"
						@click="showModal = true"
						>노선등록</MaterialButton
					>
				</div>
				<div class="container mt-4">
					<div class="row">
						<div class="col-lg-12">
							<table class="table">
								<thead>
									<tr class="text-center">
										<th class="col-1">순번</th>
										<th class="col-2">노선번호</th>
										<th class="col-3">출발 터미널</th>
										<th class="col-3">도착 터미널</th>
										<th class="col-2">소요시간(분)</th>
										<th class="col-1">관리</th>
									</tr>
								</thead>
								<tbody class="table-group-divider text-center">
									<tr v-for="(route, idx) in routeList" :key="route.id">
										<td>{{ idx + 1 }}</td>
										<td>{{ route.id }}</td>
										<td>{{ route.startTerminal.name }}</td>
										<td>{{ route.endTerminal.name }}</td>
										<td>{{ route.travelTime }}</td>
										<td>
											<MaterialButton
												color="light"
												class="input-group-static btn-sm mb-0"
												@click="deleteRoute(route.id)"
												>삭제</MaterialButton
											>
										</td>
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
										<h5 class="modal-title">노선등록</h5>
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
											<label>출발 터미널</label>
											<div class="input-group input-group-outline mb-2">
												<select class="form-select p-2" v-model="route.startId">
													<option value="">터미널을 선택하세요</option>
													<option
														v-for="terminal in terminalList"
														:key="terminal.id"
														:value="terminal.id"
													>
														{{ terminal.name }}
													</option>
												</select>
											</div>
											<label>도착 터미널</label>
											<div class="input-group input-group-outline mb-2">
												<select class="form-select p-2" v-model="route.endId">
													<option value="">터미널을 선택하세요</option>
													<option
														v-for="terminal in terminalList"
														:key="terminal.id"
														:value="terminal.id"
													>
														{{ terminal.name }}
													</option>
												</select>
											</div>
											<label>소요시간(분)</label>
											<div class="input-group input-group-outline mb-2">
												<input
													type="number"
													class="form-control mb-4"
													v-model="route.travelTime"
												/>
											</div>
											<div class="modal-footer justify-content-between">
												<MaterialButton
													variant="contained"
													color="dark"
													class="mb-0"
													@click.prevent="insertRoute"
													>등록하기</MaterialButton
												>
											</div>
										</form>
									</div>
								</div>
							</div>
						</div>
						<div class="row">
							<div class="col-3 offset-md-9">
								<div class="input-group input-group-outline my-3">
									<label class="form-label">노선검색</label>
									<input
										type="text"
										class="form-control form-control-md"
										placeholder
										isrequired="false"
									/>
								</div>
							</div>
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
import Swal from 'sweetalert2';
import MaterialBadge from '@/components/MaterialBadge.vue';

onMounted(() => {
	setMaterialInput();
});

const route = ref({});
const routeList = ref([
	{
		id: null,
		startTerminal: {
			id: null,
			name: null,
			location: null,
		},
		endTerminal: {
			id: null,
			name: null,
			location: null,
		},
		travelTime: null,
	},
]);
const terminalList = ref('');
const showModal = ref(false);

const insertRoute = async () => {
	try {
		const result = await axios.post(`/api/route/save`, route.value);
		if (result.data != null) {
			showToast('success', '노선이 등록되었습니다.');
			showModal.value = false;
			findAllRoute();
		}
	} catch (error) {
		console.error(error);
		showToast('error', '노선 등록에 실패하였습니다.');
	}
};

const findAllRoute = async () => {
	try {
		const result = await axios.get('/api/route/findAll');
		if (result.data != null) {
			routeList.value = result.data;
			console.log(routeList.value);
		}
	} catch (error) {
		console.error(error);
	}
};
findAllRoute();

const deleteRoute = async routeId => {
	try {
		await axios.delete(`/api/route/delete/${routeId}`);
		showToast('success', '노선삭제를 완료했습니다.');
		findAllRoute();
		showModal.value = false;
	} catch (error) {
		console.error(error);
		showToast('error', '노선삭제에 실패했습니다.');
	}
};

const findAllTerminal = async () => {
	try {
		const result = await axios.get(`/api/terminal/find-all`);
		terminalList.value = result.data;
	} catch (error) {
		console.error(error);
	}
};
findAllTerminal();

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
