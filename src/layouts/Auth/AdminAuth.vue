<script setup>
import { onMounted } from 'vue';
import { useRouter } from 'vue-router';
import Swal from 'sweetalert2';

const router = useRouter();

onMounted(() => {
	adminCheck();
});

//관리자 권한 확인
const adminCheck = () => {
	if (
		localStorage.getItem('loginId') === null ||
		!localStorage.getItem('auth').includes('ADMIN')
	) {
		router.push({ name: 'Home' });
		showToast('error', '권한이 없습니다.');
	}
};

const Toast = Swal.mixin({
	toast: true,
	position: 'bottom-end',
	showConfirmButton: false,
	timer: 2000,
});

const showToast = (icon, title) => {
	Toast.fire({
		icon: icon,
		title: title,
	});
};
</script>
