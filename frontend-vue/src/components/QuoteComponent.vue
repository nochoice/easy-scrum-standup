<template lang="pug">
    .box
        .note {{ data.text }}

        svg.qoute.qoute--left(version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px' viewbox='0 0 32 32' style='enable-background:new 0 0 32 32;' xml:space='preserve')
            g
            g#right_x5F_quote
                g
                path(d='M0,4v12h8c0,4.41-3.586,8-8,8v4c6.617,0,12-5.383,12-12V4H0z')
                path(d='M20,4v12h8c0,4.41-3.586,8-8,8v4c6.617,0,12-5.383,12-12V4H20z')

        svg.qoute.qoute--right(version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px' viewbox='0 0 32 32' style='enable-background:new 0 0 32 32;' xml:space='preserve')
            g
            g#right_x5F_quote
                g
                path(d='M0,4v12h8c0,4.41-3.586,8-8,8v4c6.617,0,12-5.383,12-12V4H0z')
                path(d='M20,4v12h8c0,4.41-3.586,8-8,8v4c6.617,0,12-5.383,12-12V4H20z')
</template>

<script lang="ts">
    import Vue from "vue";

    export default Vue.extend({
        props: {
            data: Object
        }
    });
</script>

<style lang="scss" scoped>
    .box {
        $color-main: #000;
        
        margin:  60px auto;
        position: relative;
        border-top: 2px solid $color-main;
        border-bottom: 2px solid $color-main;
        padding: 30px;
        width: 80%;

        .note {
            padding: 40px 20px;
            font-size: 20px;
            text-align: center;
            font-weight: 300;
        }

        .qoute {
            position: absolute;
            height: 30px;
            width: 40px;

            path {
                fill: $color-main;
            }

            &--left {
                top: 24px;
                left: 30px;
                transform: rotate(180deg);
            }

            &--right {
                bottom: 24px;
                right: 30px;
            }
        }
    }
</style>

