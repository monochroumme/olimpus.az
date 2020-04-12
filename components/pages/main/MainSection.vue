<template>
	<section class="main-page__section" :id="data.id">
		<div class="main-page__section__title-area">
			<h2>{{ data.title }}</h2>
			<div class="main-page__section__title-area__bg"></div>
		</div>
		<div class="main-page__section__pic-area">
			<img :src="data.pic" :alt="data.title" @load="picLoaded = true" v-show="picLoaded">
			<img src="~/static/pics/no-photo-placeholder.png" :alt="data.title" v-show="!picLoaded">
		</div>
	</section>
</template>

<script>
	export default {
		props: ['data'],

		data() {
			return {
				picLoaded: false
			}
		}
	}
</script>
