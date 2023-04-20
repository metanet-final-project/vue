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
					<h4 class="m-3 p-2">분실물 상세보기</h4>
				</div>
				<div class="container mt-2">
					<div class="row">
						<div class="col-lg-6">
							<img src="@/assets/img/ivana-square.jpg" alt="" />
						</div>
						<div class="col-lg-6">
							<h4 class="m-3 p-2">분실물명:삼성휴대폰</h4>
							<ul>
								<li>
									<p class="p1">습득일:</p>
									<p class="p2">2023.04.20</p>
								</li>
								<li>
									<p class="p1">습득장소:</p>
									<p class="p2">터미널 앞</p>
								</li>
								<MaterialButton
									variant="contained"
									color="dark"
									class="mb-0"
									@click.prevent="updateTerminal"
									>삭제하기</MaterialButton
								>
								<MaterialButton
									variant="contained"
									color="warning"
									class="mb-0"
									@click.prevent="deleteTerminal(terminal.id)"
									>수정하기</MaterialButton
								>
							</ul>
						</div>
					</div>
					<div class="row">
						<div class="col-lg-12 pt-5">
							<p class="p1">내용</p>
							<p class="p2">
								서창지구대에서는 [2023.04.20] [삼성휴대폰(엘로우(노랑)색)]을
								습득/보관 하였습니다. 분실하신 분께서는 본인을 증명할 수 있는
								서류를 지참하시어 보관중으로 기재되어 있는 기관에 방문하시어
								보관물품을 수령하시기 바랍니다.
							</p>
							<MaterialButton
								variant="contained"
								color="dark"
								class="mb-0"
								@click.prevent="updateTerminal"
								>목록</MaterialButton
							>
						</div>
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
import setMaterialInput from '@/assets/js/material-input';
import { onMounted } from 'vue';

onMounted(() => {
	setMaterialInput();
});
</script>

<style scoped>
ul {
	list-style-type: none;
}
.p1 {
	display: inline-block;
	width: 100px;
	color: #000;
	font-size: 20px;
	font-weight: bold;
}
.p2 {
	display: inline-block;
	color: #344767;
	font-size: 20px;
}
</style>
