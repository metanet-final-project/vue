<template>
	<div class="breadcrumb">
		<ul class="breadcrumb_list">
			<router-link to="/admin"
				><i class="fa fa-home fa-2x fa-fw"></i
			></router-link>
			<router-link to="/admin"
				><i class="fa fa-search fa-2x fa-fw"></i
			></router-link>
			<router-link to="/admin"
				><i class="fa fa-cloud fa-2x fa-fw"></i
			></router-link>
			<router-link to="/admin"
				><i class="fa fa-trash fa-2x fa-fw"></i
			></router-link>
		</ul>
	</div>
</template>

<script setup></script>

<style scoped>
.breadcrumb_list {
	margin: 3px;
}
.fa {
	margin: 5px;
}
</style>
