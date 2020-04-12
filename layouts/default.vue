<template>
  <div>
    <Header />
    <nuxt class="page-fill" />
    <GoToTop class="desktop" />
    <Footer />
  </div>
</template>

<script>
  import Header from '~/components/global/Header';
  import GoToTop from '~/components/global/GoToTop';
  import Footer from '~/components/global/Footer';

  export default {
    components: {
      Header,
      GoToTop,
      Footer
    }
  }
</script>