<template>
	<section class="py-sm-7 py-5 position-relative">
		<div class="container">
			<div class="row">
				<div class="col-12 mx-auto">
					<div class="mt-n8 mt-md-n9 text-center">
						<div class="blur-shadow-avatar"></div>
					</div>
					<div class="row py-4">
						<h3 class="mb-0">결제금액</h3>

						<table>
							<tr>
								<th>총결제금액</th>
								<td>50000원</td>
							</tr>
						</table>
						<MaterialButton
							class="my-4 mb-2 col-12"
							variant="contained"
							color="dark"
							fullWidth
							@click="goBookingConfirm"
						>
							결제하기
						</MaterialButton>
					</div>
				</div>
			</div>
		</div>
	</section>
</template>

<script setup>
import MaterialButton from '@/components/MaterialButton.vue';
import { useRouter } from 'vue-router';

const router = useRouter();

const goBookingConfirm = () => {
	router.push('/bookingconfirm');
};
</script>
<style scoped>
table {
	height: 50px;
}
th {
	color: white;
	background-color: #344767;
	font-size: 20px;
	text-align: center;
	width: 50%;
}
td {
	font-size: 20px;
	text-align: center;
	border: 1px solid #344767;
	color: #344767;
	font-weight: bold;
	width: 50%;
}
</style>
