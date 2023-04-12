<template>
	<section class="py-sm-7 py-5 position-relative">
		<div class="container">
			<div class="row">
				<div class="col-12 mx-auto">
					<div class="mt-n8 mt-md-n9 text-center">
						<div class="blur-shadow-avatar"></div>
					</div>
					<div class="row py-4">
						<h3 class="mb-0">결제완료</h3>

						<table>
							<tr>
								<th>결제일시</th>
								<td>2023.04.12 (수) 15:54</td>
								<th>결제금액</th>
								<td>50000</td>
							</tr>
						</table>
					</div>
				</div>
			</div>
		</div>
	</section>
</template>

<script setup></script>
<style scoped>
table {
	width: 100%;
	color: white;
	background-color: #344767;
	height: 50px;
	font-size: 20px;
}
th,
td {
	width: 25%;
}
th {
	color: #59b55c;
	text-align: center;
}
td {
	border-right: 1px solid white;
	text-align: left;
}
</style>
