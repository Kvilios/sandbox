<template>
    <div class="home">
        <!-- <img src="~@/i/components/pages/home/icon.png" alt=""> -->
        <svgicon name="components/pages/home/icon" width="200" height="200" :original="true"></svgicon>
        {{ testData }}
    </div>
</template>

<script>
    import axios from 'axios'

    export default {
        name: 'v-home',
        data() {
            return {
                testData: 'Loading...'
            }
        },
        computed: {
            home() {
                return this.$store.getters.pages.home
            }
        },
        mounted() {
            document.title = this.home.title
            axios
                .get('https://api.coindesk.com/v1/bpi/currentprice.json')
                .then(response => (this.testData = response))
        }
    }
</script>

<style lang="scss">

</style>
