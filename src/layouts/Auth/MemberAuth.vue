<script setup>
import { onMounted } from 'vue';
import { useRouter } from 'vue-router';
import Swal from 'sweetalert2';

const router = useRouter();

onMounted(() => {
	memberCheck();
});

//회원 권한 확인(로그인)
const memberCheck = () => {
	if (
		localStorage.getItem('loginId') === null ||
		!localStorage.getItem('auth').includes('MEMBER')
	) {
		router.push({ name: 'Login' });
		showToast('error', '로그인이 필요한 기능입니다.');
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
