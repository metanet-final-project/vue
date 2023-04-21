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
					<h4 class="m-3 p-2">회원관리</h4>
					<MaterialButton
						class="m-3"
						variant="contained"
						color="dark"
						@click.prevent="showModal2 = true"
						>회원등록</MaterialButton
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
								<h5 class="modal-title">회원등록</h5>
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
									<label>아이디</label>
									<div class="input-group input-group-outline mb-2">
										<input
											type="text"
											class="form-control"
											v-model="memberSave.loginId"
										/>
									</div>
									<label>비밀번호</label>
									<div class="input-group input-group-outline mb-2">
										<input
											type="text"
											class="form-control"
											v-model="memberSave.password"
										/>
									</div>
									<label>이름</label>
									<div class="input-group input-group-outline mb-2">
										<input
											type="text"
											class="form-control"
											v-model="memberSave.name"
										/>
									</div>
									<label>이메일</label>
									<div class="input-group input-group-outline mb-2">
										<input
											type="text"
											class="form-control"
											v-model="memberSave.email"
										/>
									</div>
									<label>전화번호</label>
									<div class="input-group input-group-outline mb-2">
										<input
											type="text"
											class="form-control"
											v-model="memberSave.phone"
										/>
									</div>

									<div class="input-group input-group-static my-3">
										<label>생년월일</label>
										<input
											type="date"
											class="form-control"
											id="birth"
											v-model="memberSave.birth"
										/>
									</div>
									<div class="modal-footer justify-content-between">
										<MaterialButton
											variant="contained"
											color="dark"
											class="mb-0"
											@click.prevent="saveMember"
											>등록</MaterialButton
										>
									</div>
								</form>
							</div>
						</div>
					</div>
				</div>
				<div class="container mt-2">
					<div class="row">
						<div class="col-lg-12">
							<table class="table">
								<thead>
									<tr class="text-center">
										<th class="col-1">번호</th>
										<th class="col-2">아이디</th>
										<th class="col-2">이름</th>
										<th class="col-4">이메일</th>
										<th class="col-2">전화번호</th>
										<th class="col-1">관리</th>
									</tr>
								</thead>
								<tbody class="table-group-divider text-center">
									<template v-if="getMember != null">
										<tr>
											<td>1</td>
											<td>{{ getMember.id }}</td>
											<td>{{ getMember.loginId }}</td>
											<td>{{ getMember.name }}</td>
											<td>{{ getMember.email }}</td>
											<td>{{ getMember.phone }}</td>
											<td>
												<MaterialButton
													color="light"
													class="input-group-static btn-sm mb-0"
													@click="goManageMember(getMember.id)"
													>관리</MaterialButton
												>
											</td>
										</tr>
									</template>
									<template v-if="getMember == null">
										<tr v-for="member in paginatedItems" :key="member.id">
											<td>{{ member.id }}</td>
											<td>{{ member.loginId }}</td>
											<td>{{ member.name }}</td>
											<td>{{ member.email }}</td>
											<td>{{ member.phone }}</td>
											<td>
												<MaterialButton
													color="light"
													class="input-group-static btn-sm mb-0"
													@click="goManageMember(member.id)"
													>관리</MaterialButton
												>
											</td>
										</tr>
									</template>
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
											<div class="modal-footer justify-content-between">
												<MaterialButton
													variant="contained"
													color="dark"
													class="mb-0"
													@click.prevent="updateMember"
													>수정하기</MaterialButton
												>
												<MaterialButton
													variant="contained"
													color="warning"
													class="mb-0"
													@click.prevent="deleteMember(member.id)"
													>회원삭제</MaterialButton
												>
											</div>
										</form>
									</div>
								</div>
							</div>
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
import Swal from 'sweetalert2';
import AdminAuth from '@/layouts/Auth/AdminAuth.vue';

const member = ref();
const memberSave = ref({});
const memberList = ref([]);
const getMember = ref(null);
const showModal = ref(false);
const showModal2 = ref(false);

onMounted(() => {
	setMaterialInput();
});

const findAllMember = async () => {
	try {
		const result = await axios.get('/api/member/findAllMember', {
			headers: {
				Authorization: 'Bearer ' + localStorage.getItem('token'),
			},
		});
		if (result.data != null) {
			memberList.value = result.data;
		}
	} catch (error) {
		console.error(error);
	}
};
findAllMember();

const goManageMember = async memberId => {
	try {
		showModal.value = true;
		const result = await axios.get(`/api/member/findById/${memberId}`, {
			headers: {
				Authorization: 'Bearer ' + localStorage.getItem('token'),
			},
		});
		if (result.data != null) {
			member.value = result.data;
		}
	} catch (error) {
		console.error(error);
	}
};

const saveMember = async () => {
	try {
		const result = await axios.post('/api/save', memberSave.value);
		if (result != null) {
			showToast('success', '등록 성공했습니다');
			showModal2.value = false;
			findAllMember();
		}
	} catch (error) {
		showToast('error', '올바른 정보를 입력하세요');
	}
};

const updateMember = async () => {
	try {
		await axios.put(`/api/member/update`, member.value, {
			headers: {
				Authorization: 'Bearer ' + localStorage.getItem('token'),
			},
		});
		showToast('success', '회원수정을 완료했습니다.');
		showModal.value = false;
		findAllMember();
	} catch (error) {
		console.error(error);
		showToast('error', '회원수정에 실패했습니다.');
	}
};

const deleteMember = async memberId => {
	try {
		await axios.delete(`/api/member/delete/${memberId}`, {
			headers: {
				Authorization: 'Bearer ' + localStorage.getItem('token'),
			},
		});
		showToast('success', '회원삭제를 완료했습니다.');
		findAllMember();
		showModal.value = false;
	} catch (error) {
		console.error(error);
		showToast('error', '회원삭제에 실패했습니다.');
	}
};

// pagination
const currentPage = ref(1);
const pageSize = ref(10);
const maxPage = computed(() => {
	return Math.ceil(memberList.value.length / pageSize.value);
});

const paginatedItems = computed(() => {
	const startIndex = (currentPage.value - 1) * pageSize.value;
	return memberList.value.slice(startIndex, startIndex + pageSize.value);
});

const Toast = Swal.mixin({
	toast: true,
	position: 'bottom-end',
	showConfirmButton: false,
	timer: 2000,
});

const showToast = (icon, title) => {
	Toast.fire({
		icon: icon,
		title: title,
	});
};
</script>

<style scoped>
.table tbody tr:hover {
	background-color: rgba(0, 0, 0, 0.025);
}
</style>
