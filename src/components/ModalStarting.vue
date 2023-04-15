<template>
	<div class="col-6">
		<MaterialInput
			id="searchString"
			class="input-group-static"
			label="출발지"
			type="text"
			icon="search"
			:value="stInput"
			@click="show"
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
					<h5 class="modal-title">출발지 선택</h5>
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
						@click="startingTerminal(terminal)"
						v-for="terminal in terminalList"
						:key="terminal.id"
						color="light"
						class="text-dark mx-1 mb-2"
						style="cursor: pointer"
					>
						{{ terminal.name }}
					</MaterialBadge>
					<br /><br />
					예매 가능한 터미널 목록입니다. 출발지로 지정할 터미널을 선택하시면,
					<br />
					해당 터미널에서 갈 수 있는 <b>도착지</b>를 확인하실 수 있습니다.
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

const emit = defineEmits(['stId']);
const showModal = ref(false);
const terminalList = ref([]);

const show = () => {
	showModal.value = true;
	stInput.value = '';
};

const findAllTerminal = async () => {
	try {
		const result = await axios.get('/api/terminal/find-all');
		if (result.data != null) {
			terminalList.value = result.data;
		}
	} catch (error) {
		console.error(error);
	}
};
findAllTerminal();

const stInput = ref();
const startingTerminal = terminal => {
	stInput.value = terminal.name;
	showModal.value = false;
	emit('stId', terminal.id);
};
</script>
