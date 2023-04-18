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
					<h4 class="m-3 p-2">예매관리</h4>
				</div>
				<div class="container mt-4">
					<div class="row">
						<div class="col-lg-12">
							<table class="table">
								<thead>
									<tr class="text-center">
										<th class="col-1">순번</th>
										<th class="col-1">결제번호</th>
										<th class="col-2">아이디</th>
										<th class="col-2">전화번호</th>
										<th class="col-2">예매일</th>
										<th class="col-2">결제가격</th>
										<th class="col-1">상태</th>
										<th class="col-1">관리</th>
									</tr>
								</thead>
								<tbody class="table-group-divider text-center">
									<tr>
										<td>1</td>
										<td>1234</td>
										<td>leej1120</td>
										<td>010-xxxx-xxxx</td>
										<td>2023-04-17</td>
										<td>35,000원</td>
										<td>완료</td>
										<td>
											<MaterialButton
												color="light"
												class="input-group-static btn-sm mb-0"
												@click="showDetail(1234)"
												>상세</MaterialButton
											>
										</td>
									</tr>
									<transition name="fade">
										<tr v-if="showDropdown" class="box">
											<td colspan="8">
												<h5>예매내역 리스트</h5>
											</td>
										</tr>
									</transition>
									<tr>
										<td>2</td>
										<td>1235</td>
										<td>비회원</td>
										<td>010-xxxx-xxxx</td>
										<td>2023-04-17</td>
										<td>17,000원</td>
										<td>대기</td>
										<td>
											<MaterialButton
												color="light"
												class="input-group-static btn-sm mb-0"
												>상세</MaterialButton
											>
										</td>
									</tr>
								</tbody>
							</table>
						</div>
						<div class="row">
							<div class="col-3 offset-md-9">
								<div class="input-group input-group-outline my-3">
									<label class="form-label">예매검색</label>
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
import MaterialBadge from '@/components/MaterialBadge.vue';
import Swal from 'sweetalert2';

const showDropdown = ref(false);

const showDetail = id => {
	showDropdown.value = !showDropdown.value;
};

onMounted(() => {
	setMaterialInput();
});

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

<style scoped>
.fade-enter-active,
.fade-leave-active {
	transition: opacity 0.5s;
}

.fade-enter,
.fade-leave-to {
	opacity: 0;
}

.box {
	background-color: rgba(240, 242, 245, 0.2);
}
</style>
