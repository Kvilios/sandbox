<template>
    <div class="home">
        <b-alert variant="success" show>Success Alert</b-alert>
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
