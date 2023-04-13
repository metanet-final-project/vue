<template>
	<div class="breadcrumb">
		<ul class="breadcrumb_list">
			<router-link to="/"><i class="fa fa-home fa-2x fa-fw"></i></router-link>
			<router-link to="/"><i class="fa fa-search fa-2x fa-fw"></i></router-link>
			<router-link to="/"><i class="fa fa-cloud fa-2x fa-fw"></i></router-link>
			<router-link to="/"><i class="fa fa-trash fa-2x fa-fw"></i></router-link>
		</ul>
	</div>
</template>

<script setup></script>

<style scoped>
.breadcrumb {
	width: 100%;
	height: 100%;
	margin: 0 auto;
}
.breadcrumb_list {
	margin: 3px;
}
.fa {
	margin: 10px;
}
</style>
