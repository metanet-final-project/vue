<template>
	<div class="col-6">
		<MaterialInput
			id="searchString"
			class="input-group-static"
			label="출발지"
			type="text"
			icon="search"
			@click="showModal = true"
		/>
	</div>
	<!--	Modal	-->
	<div v-if="showModal" class="modal" tabindex="-1" style="display: flex">
		<div class="modal-dialog">
			<div
				class="modal-content"
				style="
					box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25),
						0 10px 10px rgba(0, 0, 0, 0.22);
				"
			>
				<div class="modal-header">
					<h5 class="modal-title">출발지 검색</h5>
					<MaterialBadge
						color="light"
						rounded
						class="text-dark"
						@click.prevent="showModal = false"
						style="cursor: pointer"
					>
						닫기
					</MaterialBadge>
				</div>
				<div class="modal-body">
					Society has put up so many boundaries, so many limitations on what’s
					right and wrong that it’s almost impossible to get a pure thought out.
					<br /><br />
					It’s like a little kid, a little boy, looking at colors, and no one
					told him what colors are good, before somebody tells you you shouldn’t
					like pink because that’s for girls, or you’d instantly become a gay
					two-year-old.
				</div>
				<div class="modal-footer justify-content-between">
					<MaterialButton variant="contained" color="dark" class="mb-0">
						선택하기
					</MaterialButton>
				</div>
			</div>
		</div>
	</div>
</template>

<script setup>
import { ref } from 'vue';
import MaterialInput from '@/components/MaterialInput.vue';
import MaterialButton from '@/components/MaterialButton.vue';
import MaterialBadge from '@/components/MaterialBadge.vue';

const showModal = ref(false);
</script>
