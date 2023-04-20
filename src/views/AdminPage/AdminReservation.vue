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
				<div class="container mt-2">
					<div class="row">
						<div class="col-lg-12">
							<table class="table">
								<thead>
									<tr class="text-center">
										<th class="col-1">순번</th>
										<th class="col-1">결제번호</th>
										<th class="col-1">결제정보(카드번호)</th>
										<th class="col-2">회원아이디</th>
										<th class="col-2">전화번호</th>
										<th class="col-2">결제금액</th>
										<th class="col-2">결제일</th>
										<th class="col-1">결제시간</th>
										<th class="col-1">관리</th>
									</tr>
								</thead>
								<tbody class="table-group-divider text-center">
									<template v-for="(pay, idx) in paginatedItems" :key="pay.id">
										<tr>
											<td>{{ idx + 1 }}</td>
											<td>{{ pay.id }}</td>
											<td>{{ pay.cardNumber }}</td>
											<td>
												{{
													pay.bookingDTOList[0].memberDTO != null
														? pay.bookingDTOList[0].memberDTO.loginId
														: '비회원'
												}}
											</td>
											<td>
												{{
													pay.bookingDTOList[0].memberDTO != null
														? pay.bookingDTOList[0].memberDTO.phone
														: pay.bookingDTOList[0].nonMemberDTO.phone
												}}
											</td>
											<td>{{ pay.totalPrice }}원</td>
											<td>
												{{
													formatDate(
														pay.bookingDTOList[0].bookingDate,
														'YYYY-MM-DD',
													)
												}}
											</td>
											<td>
												{{
													formatDate(pay.bookingDTOList[0].bookingDate, 'HH:mm')
												}}
											</td>
											<td>
												<MaterialButton
													color="light"
													class="input-group-static btn-sm mb-0"
													@click="showDetail(pay.id)"
													>상세</MaterialButton
												>
											</td>
										</tr>
										<template v-if="showDropdown == pay.id">
											<tr style="background-color: rgba(240, 242, 245, 1)">
												<td colspan="1"><b>예매번호</b></td>
												<td colspan="1"><b>좌석번호</b></td>
												<td colspan="2"><b>노선</b></td>
												<td colspan="1"><b>구분</b></td>
												<td colspan="1"><b>가격</b></td>
												<td colspan="1"><b>출발일</b></td>
												<td colspan="1"><b>출발시간</b></td>
												<td colspan="1"><b>상태</b></td>
											</tr>
											<tr
												v-for="booking in pay.bookingDTOList"
												:key="booking.id"
												style="background-color: rgba(240, 242, 245, 0.5)"
											>
												<td colspan="1">{{ booking.id }}</td>
												<td colspan="1">{{ booking.seatNum }}</td>
												<td colspan="2">
													{{ booking.routeDTO.startTerminal.name }} ->
													{{ booking.routeDTO.endTerminal.name }}
												</td>
												<td colspan="1">{{ booking.ageDTO.name }}</td>
												<td colspan="1">{{ booking.price }}원</td>
												<td colspan="1">
													{{
														formatDate(
															booking.scheduleDTO.startTime,
															'YYYY-MM-DD',
														)
													}}
												</td>
												<td colspan="1">
													{{
														formatDate(booking.scheduleDTO.startTime, 'HH:mm')
													}}
												</td>
												<td colspan="1">{{ booking.state }}</td>
											</tr>
										</template>
									</template>
								</tbody>
							</table>
						</div>
						<section class="">
							<div class="container">
								<div class="row justify-space-between py-2">
									<div class="col-lg mx-auto">
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
import moment from 'moment';

const formatDate = (value, format) => {
	return moment(value).format(format);
};
const payList = ref([]);
const showDropdown = ref(0);

const showDetail = payId => {
	showDropdown.value == payId
		? (showDropdown.value = 0)
		: (showDropdown.value = payId);
};

const findAllPay = async () => {
	try {
		const result = await axios.get('/api/pay/findAll');
		if (result != null) payList.value = result.data;
		console.log(payList.value[0].bookingDTOList[0]);
	} catch (error) {
		console.error(error);
	}
};
findAllPay();

// pagination
const currentPage = ref(1);
const pageSize = ref(10);
const maxPage = computed(() => {
	return Math.ceil(payList.value.length / pageSize.value);
});

const paginatedItems = computed(() => {
	const startIndex = (currentPage.value - 1) * pageSize.value;
	return payList.value.slice(startIndex, startIndex + pageSize.value);
});

onMounted(() => {
	setMaterialInput();
});
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
