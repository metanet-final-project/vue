<template>
	<Navbar light />
	<SideBar />
	<div class="container">
		<Page />
		<br />
		<h2>
			회원관리
			<!-- <div class="main"></div> -->
		</h2>
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
						<button class="btn btn-primary" @click="editMember(member)">
							수정
						</button>
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
import Page from '@/layouts/Page.vue';

const members = ref('');

const router = useRouter();
const NameId = ref();
const editMember = async () => {
	try {
		const result = await axios.put('/api/member/update');
		if (result != null) {
			alert('수정 완료');
			router.go(0);
		}
	} catch (error) {
		console.log(error);
	}
};

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
.container {
	width: 100%;
	max-width: 1000px;
	height: 100%;
	margin: 0 auto;
}

.main {
	width: 100px;
	height: 100px;
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
</style>
