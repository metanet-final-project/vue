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
										<th class="col-2">결제일</th>
										<th class="col-2">결제가격</th>
										<th class="col-1">상태</th>
										<th class="col-1">관리</th>
									</tr>
								</thead>
								<tbody class="table-group-divider text-center">
									<template v-for="(pay, idx) in payList" :key="pay.id">
										<tr>
											<td>{{ idx + 1 }}</td>
											<td>{{ pay.id }}</td>
											<td>{{ pay.bookingDTOList[0].memberDTO.loginId }}</td>
											<td>{{ pay.bookingDTOList[0].memberDTO.phone }}</td>
											<td>{{ pay.bookingDate }}</td>
											<td>{{ pay.totalPrice }}원</td>
											<td>{{ pay.bookingDTOList[0].state }}</td>
											<td>
												<MaterialButton
													color="light"
													class="input-group-static btn-sm mb-0"
													@click="showDetail(pay.id)"
													>상세</MaterialButton
												>
											</td>
										</tr>
										<template v-if="showDropdown">
											<tr style="background-color: rgba(240, 242, 245, 0.3)">
												<td colspan="1"><b>예매번호</b></td>
												<td colspan="2"><b>노선</b></td>
												<td colspan="2"><b>배차정보</b></td>
												<td colspan="1"><b>가격</b></td>
												<td colspan="1"><b>상태</b></td>
												<td colspan="1"><b></b></td>
											</tr>
											<tr
												v-for="booking in pay.bookingDTOList"
												:key="booking.id"
											>
												<td colspan="1">{{ booking.id }}</td>
												<td colspan="2">
													{{ booking.routeDTO.startTerminal.name }} ->
													{{ booking.routeDTO.endTerminal.name }}
												</td>
												<td colspan="2"></td>
												<td colspan="1"></td>
												<td colspan="1"></td>
												<td colspan="1"></td>
											</tr>
										</template>
									</template>
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

const payList = ref([
	{
		id: null,
		cardNumber: null,
		cardExpiration: null,
		cardPassword: null,
		birth: null,
		totalPrice: null,
		bookingDTOList: [
			{
				id: null,
				payDTO: {
					id: null,
					cardNumber: null,
					cardExpiration: null,
					cardPassword: null,
					birth: null,
					totalPrice: null,
				},
				memberDTO: {
					id: null,
					loginId: null,
					name: null,
					password: null,
					phone: null,
					role: null,
					email: null,
					birth: null,
				},
				nonMemberDTO: {
					id: null,
					phone: null,
					birth: null,
				},
				scheduleDTO: {
					id: null,
					startTime: null,
					endTime: null,
					busDTO: {
						id: null,
						busNum: null,
						companyDTO: {
							name: null,
						},
						grade: null,
					},
					price: null,
					countSeat: null,
				},
				routeDTO: {
					startTerminal: {
						name: null,
					},
					endTerminal: {
						name: null,
					},
					travelTime: 120,
				},
				ageDTO: {
					name: null,
				},
				seatNum: null,
				state: null,
				price: null,
			},
		],
	},
]);
const showDropdown = ref(false);

const findAllPay = async () => {
	try {
		const result = await axios.get('/api/pay/findAll');
		if (result != null) payList.value = result.data;
		console.log(payList.value);
	} catch (error) {
		console.error(error);
	}
};
findAllPay();

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
</style>
