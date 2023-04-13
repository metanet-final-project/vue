<template>
	<Navbar light />
	<div>
		<div class="container">
			<!-- <div class="button-area">
				<div class="btn btn-dark" style="width: 150px; font-size: 16px">
					조회
				</div>
			</div> -->

			<div class="table-container">
				<h3
					style="
						margin-bottom: 30px;
						text-align: center;
						font-weight: lighter;
						color: black;
					"
				>
					내 정보 수정
				</h3>
				<table class="table table-bordered">
					<tbody>
						<tr>
							<td style="background-color: #f3f4f6; width: 30%; padding: 15px">
								아이디
							</td>

							<td style="width: 70%; padding: 15px">{{ loginId }}</td>
						</tr>
						<tr>
							<td style="background-color: #f3f4f6; padding: 15px">이름</td>
							<td>
								<input
									type="text"
									class="form-control form-control-sm"
									id="mypage-modify-id"
									v-model="name"
									style="
										border: 1px solid black;
										font-size: 16px;
										width: 300px;
										padding: 10px;
									"
								/>
							</td>
						</tr>
						<tr>
							<td style="background-color: #f3f4f6; padding: 15px">전화번호</td>
							<td>
								<input
									type="text"
									class="form-control form-control-sm"
									id="mypage-modify-id"
									v-model="phone"
									style="
										border: 1px solid black;
										font-size: 16px;
										width: 300px;
										padding: 10px;
									"
								/>
							</td>
						</tr>
						<tr>
							<td style="background-color: #f3f4f6; padding: 15px">이메일</td>
							<td>
								<input
									type="email"
									class="form-control form-control-sm"
									id="mypage-modify-id"
									v-model="email"
									style="
										border: 1px solid black;
										font-size: 16px;
										width: 300px;
										padding: 10px;
									"
								/>
							</td>
						</tr>
						<tr>
							<td style="background-color: #f3f4f6; padding: 15px">생년월일</td>
							<td style="padding: 15px">{{ birthOnly }}</td>
						</tr>
					</tbody>
				</table>
				<div class="btn-area">
					<button type="button" class="btn-print2" @click="UpdateMember">
						변경
					</button>
				</div>
			</div>
		</div>
	</div>
	<Footer />
</template>

<script setup>
import Navbar from '@/layouts/Navbar.vue';
import Footer from '@/layouts/Footer.vue';
import axios from 'axios';
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();
// const loginRequest = ref({});
const loginId = ref('');
const name = ref('');
const email = ref('');
const birth = ref('');
const phone = ref('');
const birthObject = ref('');
const birthOnly = ref('');

const getMemberInfo = async () => {
	const res = await axios.get(
		`/api/member/findByLoginId/${localStorage.getItem('loginId')}`,
	);
	DataTransfer.value = res.data;
	console.log(res.data);
	console.log(res.data.birth);
	loginId.value = res.data.loginId;
	name.value = res.data.name;
	email.value = res.data.email;
	birth.value = res.data.birth;
	birthObject.value = new Date(birth.value);
	birthOnly.value = birthObject.value.toISOString().slice(0, 10);
	console.log(birthOnly);
	phone.value = res.data.phone;
};
getMemberInfo();

const UpdateMember = async () => {
	const res = await axios.put(`/api/member/update`, {
		loginId: localStorage.getItem('loginId'),
	});
	try {
		if (res != null) {
			alert('회원정보가 변경되었습니다.');
			router.push({ name: 'Mypage' });
		}
	} catch (error) {
		alert('error');
	}
};
</script>
<style scoped>
.table-container {
	margin-top: 100px;
	display: block;
	padding-top: 50px;
	height: 100%;
	width: 80%;
	margin: 0px auto;

	font-size: 18px;
}
.btn-area {
	margin-top: 30px;
	text-align: center;
}
.table-bordered {
	border: 1px solid #cfd2d7;
}
.btn-print2 {
	background: #344767;
	color: #fff;
	display: inline-block;
	min-width: 180px;
	height: 60px;
	padding: 0 20px;
	font-size: 18px;
	text-align: center;
	line-height: 50px;
	border: none;
	vertical-align: middle;
	-moz-box-sizing: border-box;
	box-sizing: border-box;
}
</style>
