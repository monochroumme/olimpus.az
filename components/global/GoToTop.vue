<template>
	<div class="go-to-top" :class="{ active : show }">
		<client-only>
			<back-to-top>
				<img src="~/static/svg/go-to-top.svg" alt="Yuxarı">
			</back-to-top>
		</client-only>
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
			}
		}
	}
</script>
