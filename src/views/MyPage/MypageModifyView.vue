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
					<thead style="background-color: #f3f4f6">
						<tr></tr>
					</thead>
					<tbody>
						<tr>
							<td style="background-color: #f3f4f6">아이디</td>
							<td>
								<input
									type="text"
									class="form-control"
									id="mypage-modify-id"
									placeholder="qwer123"
								/>
							</td>
						</tr>
						<tr>
							<td style="background-color: #f3f4f6">이름</td>
							<td>신소희</td>
						</tr>
						<tr>
							<td style="background-color: #f3f4f6">전화번호</td>
							<td>01012345678</td>
						</tr>
						<tr>
							<td style="background-color: #f3f4f6">이메일</td>
							<td>qwer123</td>
						</tr>
						<tr>
							<td style="background-color: #f3f4f6">생년월일</td>
							<td>qwer123</td>
						</tr>
					</tbody>
				</table>
				<div class="btn-area">
					<button type="button" class="btn-print2">변경</button>
				</div>
			</div>
		</div>
	</div>
	<Footer />
</template>

<script setup>
import Navbar from '@/layouts/Navbar.vue';
import Footer from '@/layouts/Footer.vue';
</script>
