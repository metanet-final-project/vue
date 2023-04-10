<template>
	<Navbar transparent />
	<Header>
		<div
			class="page-header min-height-400"
			:style="{ backgroundImage: `url(${image})` }"
			loading="lazy"
		>
			<span class="mask bg-gradient-dark opacity-8"></span>
		</div>
	</Header>
	<div class="card card-body blur shadow-blur mx-3 mx-md-4 mt-n6 mb-4">
		<Profile />
	</div>
	<Footer />
</template>

<script setup>
import Navbar from '@/layouts/Navbar.vue';
import Header from '@/examples/Header.vue';
import Footer from '@/layouts/Footer.vue';
import Profile from './Sections/Profile.vue';
import image from '@/assets/img/busimage.png';
</script>
