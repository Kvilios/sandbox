<template>
    <div class="home">
        <div class="item" :class="'item-' + item.class" v-for="item in items">
            {{ item.label }}
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                items: [
                    {
                        class: 'one',
                        label: 'One'
                    },
                    {
                        class: 'two',
                        label: 'Two'
                    },
                    {
                        class: 'three',
                        label: 'Three'
                    },
                    {
                        class: 'four',
                        label: 'Four'
                    },
                    {
                        class: 'five',
                        label: 'Five'
                    }
                ]
            }
        },
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
    .home {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        grid-gap: 10px;

        .item {
            outline: 1px dashed gray;

            &-one {
                background-color: #fd6fb6;
            }

            &-two {
                background-color: #ffb429;
            }

            &-three {
                background-color: #ffffb1;
            }

            &-four {
                background-color: #ff6e4d;
            }

            &-five {
                color: white;
                background-color: #380e7e;
            }
        }
    }
</style>
