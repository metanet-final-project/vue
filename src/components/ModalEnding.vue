<template>
	<div class="col-6">
		<MaterialInput
			id="searchString"
			class="input-group-static"
			label="도착지"
			type="text"
			icon="search"
			:value="etInput"
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
					<h5 class="modal-title">도착지 선택</h5>
					<MaterialBadge
						color="dark"
						rounded
						class="text-white"
						@click.prevent="showModal = false"
						style="cursor: pointer"
					>
						닫기
					</MaterialBadge>
				</div>
				<div class="modal-body">
					<MaterialBadge
						@click="endingTerminal(terminal.name)"
						v-for="terminal in terminalList"
						:key="terminal.id"
						color="light"
						class="text-dark mx-1 mb-2"
						style="cursor: pointer"
					>
						{{ terminal.name }}
					</MaterialBadge>
					<br /><br />
					선택하신 출발지에서 도착 가능한 터미널 목록입니다.
					<br />
					도착지를 선택한 후, <b>배차</b>를 조회해보세요.
				</div>
			</div>
		</div>
	</div>
</template>

<script setup>
import { ref } from 'vue';
import axios from 'axios';
import MaterialInput from '@/components/MaterialInput.vue';
import MaterialBadge from '@/components/MaterialBadge.vue';

const props = defineProps({
	stId: {
		type: Number,
		required: true,
	},
});
console.log(props.stId);

const emit = defineEmits(['et']);
const showModal = ref(false);
const terminalList = ref([]);

const findEndpointTerminal = async () => {
	try {
		const result = await axios.get(`/api/route/find/end-point/14`);
		if (result.data != null) {
			console.log(result.data);
			terminalList.value = result.data;
		}
	} catch (error) {
		console.error(error);
	}
};
findEndpointTerminal();

const etInput = ref();
const endingTerminal = name => {
	etInput.value = name;
	showModal.value = false;
	emit('et', name);
};
</script>
