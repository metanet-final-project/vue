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
					<h4 class="m-3 p-2">터미널 관리</h4>
					<MaterialButton
						class="m-3"
						variant="contained"
						color="dark"
						@click.prevent="showModal2 = true"
						>터미널등록</MaterialButton
					>
				</div>
				<div
					v-if="showModal2"
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
								<h5 class="modal-title">터미널 등록</h5>
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
									<label>이름</label>
									<div class="input-group input-group-outline mb-2">
										<input
											type="text"
											class="form-control"
											v-model="terminalValue.name"
										/>
									</div>
									<label>위치</label>
									<div class="input-group input-group-outline mb-2">
										<input
											type="text"
											class="form-control"
											v-model="terminalValue.location"
										/>
									</div>

									<div class="modal-footer justify-content-between">
										<MaterialButton
											variant="contained"
											color="dark"
											class="mb-0"
											@click.prevent="saveTerminal"
											>저장하기</MaterialButton
										>
									</div>
								</form>
							</div>
						</div>
					</div>
				</div>
				<!-- modal2 end -->
				<div class="container mt-4">
					<div class="row">
						<div class="col-lg-12">
							<table class="table">
								<thead>
									<tr class="text-center">
										<th class="col-1">번호</th>
										<th class="col-2">고유번호</th>
										<th class="col-2">이름</th>
										<th class="col-5">위치</th>
										<th class="col-2">관리</th>
									</tr>
								</thead>
								<tbody class="table-group-divider text-center">
									<tr
										v-for="(terminal, idx) in terminalList"
										:key="terminal.id"
									>
										<td>{{ idx + 1 }}</td>
										<td>{{ terminal.id }}</td>
										<td>{{ terminal.name }}</td>
										<td>{{ terminal.location }}</td>
										<td>
											<MaterialButton
												color="light"
												class="input-group-static btn-sm mb-0"
												@click="goManageTerminal(terminal.id)"
												>수정 | 삭제</MaterialButton
											>
										</td>
									</tr>
								</tbody>
							</table>
						</div>
						<!-- modal start -->
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
										<h5 class="modal-title">터미널관리</h5>
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
										<form role="form" class="text-start p-3">
											<label>터미널고유번호</label>
											<div class="input-group input-group-outline mb-2">
												<input
													type="text"
													class="form-control"
													disabled
													v-model="terminal.id"
												/>
											</div>
											<label>이름</label>
											<div class="input-group input-group-outline mb-2">
												<input
													type="text"
													class="form-control"
													disabled
													v-model="terminal.name"
												/>
											</div>
											<label>위치</label>
											<div class="input-group input-group-outline mb-2">
												<input
													type="text"
													class="form-control"
													v-model="terminal.location"
												/>
											</div>

											<div class="modal-footer justify-content-between">
												<MaterialButton
													variant="contained"
													color="dark"
													class="mb-0"
													@click.prevent="updateTerminal"
													>저장하기</MaterialButton
												>
												<MaterialButton
													variant="contained"
													color="warning"
													class="mb-0"
													@click.prevent="deleteTerminal(terminal.id)"
													>터미널삭제</MaterialButton
												>
											</div>
										</form>
									</div>
								</div>
							</div>
						</div>
						<!-- modal end -->
						<div class="row">
							<div class="col-3 offset-md-9">
								<div class="input-group input-group-outline my-3">
									<label class="form-label">터미널 이름검색</label>
									<input
										type="text"
										v-model="terminalName"
										class="form-control form-control-md"
										placeholder
									/>
									<!-- <button
										class="btn btn-outline-secondary input-group-text"
										type="button"
										@click="searchTerminal"
									>
										검색
									</button> -->
								</div>
								<button
									class="btn btn-outline-secondary input-group-text"
									type="button"
									@click="searchTerminal"
								>
									검색
								</button>
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
import MaterialBadge from '@/components/MaterialBadge.vue';
import Swal from 'sweetalert2';

onMounted(() => {
	setMaterialInput();
});
const terminal = ref();
const terminalValue = ref({});
const terminalName = ref();
const terminalList = ref();
const showModal = ref(false);
const showModal2 = ref(false);

const findAllTerminal = async () => {
	try {
		const result = await axios.get('/api/terminal/find-all');
		if (result.data != null) {
			terminalList.value = result.data;
		}
	} catch (error) {
		console.error(error);
	}
};
findAllTerminal();

const goManageTerminal = async terminalId => {
	try {
		const result = await axios.get(`/api/terminal/findById/${terminalId}`);
		if (result.data != null) {
			terminal.value = result.data;
			showModal.value = true;
		}
	} catch (error) {
		console.error(error);
	}
};

const saveTerminal = async () => {
	try {
		const result = await axios.post('/api/terminal/save', terminalValue.value);
		if (result != null) {
			showToast('success', '등록 성공했습니다');
			findAllTerminal();
		}
	} catch (error) {
		showToast('error', '올바른 정보를 입력하세요');
	}
};

const updateTerminal = async () => {
	try {
		await axios.put(`/api/terminal/update`, terminal.value);
		showToast('success', '터미널수정을 완료했습니다.');
		showModal.value = false;
		findAllTerminal();
	} catch (error) {
		console.error(error);
		showToast('error', '터미널수정에 실패했습니다.');
	}
};

const deleteTerminal = async terminalId => {
	try {
		await axios.delete(`/api/terminal/delete/${terminalId}`);
		showToast('success', '터미널삭제를 완료했습니다.');
		showModal.value = false;
		findAllTerminal();
	} catch (error) {
		console.error(error);
		showToast('error', '터미널삭제에 실패했습니다.');
	}
};

const searchTerminal = async () => {
	try {
		const result = await axios.get(
			`/api/terminal/findByName/${terminalName.value}`,
		);
		if (result != null) {
			terminalList.value = result.data;
			console.log(terminalList.value);
			showToast('success', '검색 완료');
		}
	} catch (error) {
		console.log(error);
		showToast('error', '터미널 고유번호를 입력하세요');
	}
};

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
