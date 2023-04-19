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
					<h4 class="m-3 p-2">분실물 관리</h4>
					<MaterialButton
						class="m-3"
						variant="contained"
						color="dark"
						@click="goManageLost"
						>게시물작성</MaterialButton
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
								<h5 class="modal-title">분실물 등록</h5>
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
									<label>번호</label>
									<div class="input-group input-group-outline mb-2">
										<input type="text" class="form-control" v-model="lost.id" />
									</div>
									<label>제목</label>
									<div class="input-group input-group-outline mb-2">
										<input
											type="text"
											class="form-control"
											v-model="lost.title"
										/>
									</div>
									<label>습득장소</label>
									<div class="input-group input-group-outline mb-2">
										<input
											type="text"
											class="form-control"
											v-model="lost.findPlace"
										/>
									</div>
									<label>내용</label>
									<div class="input-group input-group-outline mb-2">
										<input
											type="text"
											class="form-control"
											v-model="lost.contents"
										/>
									</div>

									<div class="input-group input-group-static my-3">
										<label>날짜</label>
										<input
											type="date"
											class="form-control"
											id="birth"
											v-model="lost.findDate"
										/>
									</div>
									<div class="input-group input-group-static my-3">
										<label>전화 번호</label>
										<input
											type="text"
											class="form-control"
											v-model="lost.phone"
										/>
									</div>
									<label>파일첨부</label>
									<div>
										첨부
										<input type="file" @change="onFileChange" />
									</div>

									<!-- <MaterialButton type="file">첨부</MaterialButton> -->

									<div class="">
										<MaterialButton
											variant="contained"
											color="dark"
											class="mb-0"
											@click.prevent="saveLost"
											>등록</MaterialButton
										>
									</div>
								</form>
							</div>
						</div>
					</div>
				</div>
				<div class="container mt-4">
					<div class="row">
						<div class="col-lg-12">
							<table class="table">
								<thead>
									<tr class="text-center">
										<th class="col-1">순번</th>
										<th class="col-1">번호</th>
										<th class="col-2">제목</th>
										<th class="col-2">습득위치</th>
										<th class="col-3">내용</th>
										<th class="col-3">날짜</th>
										<th class="col-3">파일</th>
									</tr>
								</thead>
								<tbody class="table-group-divider text-center">
									<tr v-for="(lost, idx) in lostList" :key="lost.id">
										<td>{{ idx + 1 }}</td>
										<td>{{ lost.id }}</td>
										<td>{{ lost.title }}</td>
										<td>{{ lost.findPlace }}</td>
										<td>{{ lost.savePlace }}</td>
										<td>{{ lost.contents }}</td>
										<td>{{ lost.findDate }}</td>
										<td>{{ lost.fileName }}</td>
										<td>{{ lost.phone }}</td>
										<!-- <td>
											<MaterialButton
												color="light"
												class="input-group-static btn-sm mb-0"
												@click="goManageLost(lost.id)"
												>첨부</MaterialButton
											>
										</td> -->
									</tr>
								</tbody>
							</table>
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

const file = ref(null);
let getFile = null;
onMounted(() => {
	setMaterialInput();
});

const onFileChange = event => {
	file.value = event.target.files;
	getFile = event.target.files[0];
};

const lost = ref({});
const lostList = ref();

const showModal2 = ref(false);

const findAllLost = async () => {
	try {
		const result = await axios.get('/api/lost/findAll');
		if (result.data != null) {
			lostList.value = result.data;
		}
	} catch (error) {
		console.error(error);
	}
};
findAllLost();

const goManageLost = () => {
	showModal2.value = true;
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

const saveLost = () => {
	try {
		const formData = new FormData();
		formData.append('file', getFile);
		console.log(file.value);
		console.log(lost.value);
		const blob = new Blob([JSON.stringify(lost.value)], {
			type: 'application/json',
		});
		formData.append('lost', blob, 'lost.json');
		console.log('formData : ' + formData.toString());
		const result = axios.post('/api/saveUploadFile', formData);
		console.log(result);

		if (result.data != null) {
			showToast('success', '등록 성공했습니다');
			showModal2.value = false;
		}
	} catch (error) {
		console.error(error);
	}
};
</script>
