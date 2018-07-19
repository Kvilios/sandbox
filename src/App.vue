<template>
  <div id="app">
    <v-header></v-header>
    <v-home></v-home>
    <v-footer></v-footer>
  </div>
</template>

<script>
  import vHeader from '@/js/components/layouts/header'
  import vHome from '@/js/components/pages/home'
  import vFooter from '@/js/components/layouts/footer'

  export default {
    name: 'app',
    components: {
        vHeader,
        vHome,
        vFooter
    }
  }
</script>

<style lang="scss">

</style>
