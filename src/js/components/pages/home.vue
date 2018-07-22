<template>
    <div class="home">
        <!-- <img src="~@/i/components/pages/home/icon.png" alt=""> -->
        <svgicon name="components/pages/home/icon" width="200" height="200" :original="true"></svgicon>
    </div>
</template>

<script>
    export default {
        name: 'v-home',
        computed: {
            home() {
                return this.$store.getters.pages.home
            }
        },
        mounted() {
            document.title = this.home.title
        }
    }
</script>

<style lang="scss">

</style>
