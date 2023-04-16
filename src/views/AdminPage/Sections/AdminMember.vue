<template>
	<Navbar light />
	<SideBar />
	<div class="container">
		<Page />
		<br />
		<h2 style="margin-left: 3%">회원관리</h2>
		<table class="table table-striped">
			<thead>
				<tr style="text-align: center; margin: auto; width: 5%" type="text">
					<th>순번</th>
					<th>아이디</th>
					<th>이름</th>
					<th>이메일</th>
					<th>전화번호</th>
					<th>수정</th>
					<th>삭제</th>
				</tr>
			</thead>
			<tbody>
				<tr
					v-for="(member, index) in members"
					:key="member.id"
					style="text-align: center; margin: auto; width: 5%"
					type="text"
				>
					<td>
						{{ index + 1 }}
					</td>
					<td>{{ member.loginId }}</td>
					<td>{{ member.name }}</td>
					<td>{{ member.email }}</td>
					<td>{{ member.phone }}</td>
					<td>
						<div class="col-6" style="margin: auto">
							<MaterialButton
								color="dark"
								id="searchString"
								class="input-group-static"
								@click="showMemberModal(member.id)"
								>수정</MaterialButton
							>
						</div>
						<div v-if="show" class="modal" tabindex="-1" style="display: flex">
							<div class="modal-dialog">
								<template v-for="(member, index) in members" :key="member.id">
									<div class="modal-content" v-if="member.id == showId">
										<div class="modal-header">
											<h5 class="modal-title">회원정보 수정</h5>
											<MaterialBadge
												color="light"
												rounded
												class="text-dark"
												@click.prevent="showMemberModal(id)"
												style="cursor: pointer"
											>
												닫기
											</MaterialBadge>
										</div>

										<div class="modal-body">
											<tr
												style="text-align: center; margin: auto; width: 5%"
												type="text"
											>
												<th>순번</th>
												<th>아이디</th>
												<th>이름</th>
												<th>이메일</th>
												<th>전화번호</th>
											</tr>

											<tr
												style="text-align: center; margin: auto; width: 5%"
												type="text"
											>
												<td>
													{{ index + 1 }}
												</td>
												<td>
													<input
														type="text"
														v-model="member.loginId"
														style="
															border: none;
															outline: none;
															text-align: center;
															margin: auto;
															width: 50%;
														"
													/>
												</td>
												<td>
													<input
														type="text"
														v-model="member.name"
														style="
															border: none;
															outline: none;
															text-align: center;
															margin: auto;
															width: 50%;
														"
													/>
												</td>
												<td>
													<input
														type="text"
														v-model="member.email"
														style="
															border: none;
															outline: none;
															text-align: center;
															margin: auto;
															width: 50%;
														"
													/>
												</td>
												<td>
													<input
														type="text"
														v-model="member.phone"
														style="
															border: none;
															outline: none;
															text-align: center;
															margin: auto;
															width: 50%;
														"
													/>
												</td>
												<!-- <td>{{ member.name }}</td>
												<td>{{ member.email }}</td>
												<td>{{ member.phone }}</td> -->
											</tr>
										</div>

										<div class="modal-footer justify-content-between">
											<MaterialButton
												variant="contained"
												color="dark"
												class="mb-0"
												@click.prevent="updateMember(member)"
											>
												수정하기
											</MaterialButton>
										</div>
									</div>
								</template>
							</div>
						</div>
					</td>
					<td>
						<button class="btn btn-danger" @click="deleteMember(member.id)">
							삭제
						</button>
					</td>
				</tr>
			</tbody>
		</table>
		<div class="search_wrap type2">
			<p class="form-control">
				<input type="text" v-model="NameId" placeholder="회원명 입력하세요" />
				<button type="button" @click="searchMember">검색</button>
			</p>
		</div>
	</div>

	<Footer />
</template>

<script setup>
import axios from 'axios';
import { useRouter } from 'vue-router';
import { ref } from 'vue';
import SideBar from '../SideBar.vue';
import Footer from '@/layouts/Footer.vue';
import Navbar from '@/layouts/Navbar.vue';

import MaterialButton from '@/components/MaterialButton.vue';
import MaterialBadge from '@/components/MaterialBadge.vue';

const members = ref('');
const router = useRouter();
const NameId = ref();

const deleteMember = async memberId => {
	try {
		const result = await axios.delete(`/api/member/delete/${memberId}`);
		if (result != null) {
			alert('삭제 성공');
			router.go(0);
		}
	} catch (error) {
		console.log(error);
	}
};

const show = ref(false);
const showId = ref(null);

const showMemberModal = id => {
	show.value = !show.value;
	showId.value = id;
};

const findAllMember = async () => {
	try {
		const result = await axios.get('/api/member/findAllMember');
		if (result != null) {
			members.value = result.data;
			console.log(members.value);
		}
	} catch (error) {
		console.log(error);
	}
};
findAllMember();

const updateMember = async member => {
	try {
		const result = await axios.put('/api/member/update', member);
		if (result != null) {
			console.log(members.value);
			router.go(0);
		}
	} catch (error) {
		console.log(error);
	}
};

const searchMember = async () => {
	try {
		console.log(NameId.value);
		const result = await axios.get(`/api/member/findByName/${NameId.value}`);
		if (result != null) {
			members.value = result.data;
			console.log(members.value);
		}
	} catch (error) {
		console.log(error);
	}
};
</script>

<style scoped>
.app {
	margin: 0;
}
.table {
	width: 100%;
	border-collapse: collapse;
	margin-top: 20px;
}

.button-border {
	border: 2px solid black;
	border-radius: 4px;
}

.btn-primary {
	background-color: #00ff00;
}

tr th {
	padding: 10px;
}

.modal-content {
	box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
}
</style>
