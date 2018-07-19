<template>
    <div class="home">
        <img src="~@/i/components/pages/home/logo.png" alt="">
    </div>
</template>

<script>
    export default {
        name: 'v-home',
        computed: {
            home() {
                return this.$store.getters.pages.home;
            }
        },
        mounted() {
            document.title = this.home.title;
        }
    }
</script>

<style lang="scss">

</style>
