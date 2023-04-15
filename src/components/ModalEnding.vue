<template>
	<div class="col-6">
		<MaterialInput
			id="searchString"
			class="input-group-static"
			label="도착지"
			type="text"
			icon="search"
			:value="etInput"
			@click="findEndpointTerminal"
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
						@click="endingTerminal(route.endTerminal)"
						v-for="route in routeList"
						:key="route.id"
						color="light"
						class="text-dark mx-1 mb-2"
						style="cursor: pointer"
						>{{ route.endTerminal.name }}
					</MaterialBadge>
					<br /><br />
					출발지
					<MaterialBadge color="light" class="text-dark mx-1 mb-2">
						{{ variable.name }}
					</MaterialBadge>
					에서 도착 가능한 터미널 목록입니다.
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

const showModal = ref(false);
const routeList = ref([
	{
		id: null,
		startTerminal: {
			id: null,
			name: null,
			location: null,
		},
		endTerminal: {
			id: null,
			name: null,
			location: null,
		},
		travelTime: null,
	},
]);
const emit = defineEmits(['et']);
const props = defineProps({ variable: Object });

const findEndpointTerminal = async () => {
	showModal.value = true;
	etInput.value = '';
	try {
		const result = await axios.get(
			`/api/route/findByEndPoint/${props.variable.id}`,
		);
		if (result.data != null) {
			routeList.value = result.data;
		}
	} catch (error) {
		console.error(error);
	}
};

const etInput = ref();
const endingTerminal = terminal => {
	etInput.value = terminal.name;
	showModal.value = false;
	emit('et', terminal.id);
};
</script>
