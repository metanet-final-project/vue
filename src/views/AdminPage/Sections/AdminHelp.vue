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
					<MaterialButton class="m-3" variant="contained" color="dark"
						>회원등록</MaterialButton
					>
				</div>
				<div class="container mt-4">
					<div class="row">
						<div class="col-lg-12">
							<table class="table">
								<thead>
									<tr class="text-center">
										<th class="col-1">번호</th>
										<th class="col-2">아이디</th>
										<th class="col-2">이름</th>
										<th class="col-3">이메일</th>
										<th class="col-3">전화번호</th>
										<th class="col-1">관리</th>
									</tr>
								</thead>
								<tbody class="table-group-divider text-center">
									<tr v-for="(member, idx) in memberList" :key="member.id">
										<td>{{ idx + 1 }}</td>
										<td>{{ member.loginId }}</td>
										<td>{{ member.name }}</td>
										<td>{{ member.email }}</td>
										<td>{{ member.phone }}</td>
										<td>
											<MaterialButton
												color="light"
												class="input-group-static btn-sm mb-0"
												>수정</MaterialButton
											>
										</td>
									</tr>
								</tbody>
							</table>
						</div>
						<div class="row">
							<div class="col-3 offset-md-9">
								<div class="input-group input-group-outline my-3">
									<label class="form-label">회원검색</label>
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
import Sidebar from '../newSideBar.vue';
import MaterialButton from '@/components/MaterialButton.vue';
import axios from 'axios';
import { ref } from 'vue';
import MaterialPagination from '@/components/MaterialPagination.vue';
import MaterialPaginationItem from '@/components/MaterialPaginationItem.vue';
import setMaterialInput from '@/assets/js/material-input';
import { onMounted } from 'vue';

onMounted(() => {
	setMaterialInput();
});

const memberList = ref([]);

const findAllMember = async () => {
	try {
		const result = await axios.get('/api/member/findAllMember');
		if (result.data != null) {
			memberList.value = result.data;
		}
	} catch (error) {
		console.error(error);
	}
};
findAllMember();
</script>
