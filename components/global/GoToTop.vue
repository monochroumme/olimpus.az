<template>
	<div class="go-to-top" :class="{ active : show }">
		<img src="~/static/svg/go-to-top.svg" alt="Yuxarı" @click="scrollToTop()">
	</div>
</template>

<script>
	export default {
		data() {
			return {
				show: false
			}
		},

		mounted() {
			window.addEventListener('scroll', this.toggleShow);
			this.toggleShow();
		},

		methods: {
			toggleShow() {
				if (window.scrollY > 0)
					this.show = true;
				else this.show = false;
			},

			scrollToTop() {
				window.scrollTo({ top: 0, behavior: 'smooth' });
			}
		}
	}
</script>
