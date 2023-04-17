<template>
	<Navbar light />
	<button type="button" class="btnS btn_print" @click="printPage">
		티켓출력
	</button>
	<Footer />
</template>
<script setup>
import Navbar from '@/layouts/Navbar.vue';
import Footer from '@/layouts/Footer.vue';
// import axios from 'axios';
// import { ref } from 'vue';

const printPage = () => {
	window.print();
};
</script>
