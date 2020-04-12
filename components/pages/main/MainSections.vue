<template>
	<div class="main-page__sections">
		<MainSection v-for="(section, i) in $store.state.mainSections" :key="i" :data="section" :class="{ rtl : i % 2 != 0 }" />
	</div>
</template>

<script>
	import MainSection from '~/components/pages/main/MainSection';

	export default {
		components: {
			MainSection
		}
	}
</script>
