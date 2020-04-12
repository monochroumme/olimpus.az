<template>
  <div class="main-page">
  	<SliderBrands />
  	<div class="double-layout custom-container">
  		<aside class="double-layout__left">
  			<LeftMenu />
  		</aside>
  		<main class="double-layout__right">
  			<MainSections />
  		</main>
  	</div>
  </div>
</template>

<script>
import SliderBrands from '~/components/pages/main/SliderBrands';
import LeftMenu from '~/components/global/LeftMenu';
import MainSections from '~/components/pages/main/MainSections';

export default {
  components: {
    SliderBrands,
    LeftMenu,
    MainSections
  }
}
</script>
