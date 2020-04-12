<template>
  <div class="slider-brands custom-container">
    <div v-swiper:mySwiper="swiperOption">
      <div class="swiper-wrapper">
        <div class="swiper-slide" v-for="(brand, i) in brands" :key="`brand-${i}`">
        	<img :src="brand.pic" :alt="brand.name" class="slider-brands__pic">
        </div>
      </div>
      <button class="slider-brands__arrow-left" :style="{ display: showLeft ? '' : 'none' }" @click="mySwiper.slidePrev()">
        <img src="~/static/svg/slider-brands_arrow-right.svg" alt="Sola">
      </button>
      <button class="slider-brands__arrow-right" :style="{ display: showRight ? '' : 'none' }" @click="mySwiper.slideNext();">
        <img src="~/static/svg/slider-brands_arrow-right.svg" alt="Sağa">
      </button>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  data() {
    return {
      showLeft: false,
      showRight: false,
      swiperOption: {
        spaceBetween: 20,
        slidesPerView: 'auto',
        init: false,
        autoplay: {
          delay: 2000,
          disableOnInteraction: false
        }
      }
    }
  },

  computed: {
  	...mapState(['brands'])
  },

  mounted() {
    this.mySwiper.on('transitionStart', () => {
      this.updateArrows();
    });

    this.mySwiper.init(this.swiperOption);
    this.updateArrows();
  },

  methods: {
    updateArrows() {
      if (this.mySwiper) {
          this.showLeft = !this.mySwiper.isBeginning;
          this.showRight = !this.mySwiper.isEnd;
      }
    }
  }
}
</script>
