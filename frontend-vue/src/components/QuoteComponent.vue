<template lang="pug">
    .box
        .note {{ data.text }}

        v-icon.qoute.left mdi-format-quote-open
        v-icon.qoute.right mdi-format-quote-close
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
        $color-main: rgba(0, 0, 0, 0.87);
        
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
            font-size: 44px;

            &.left {
                top: 24px;
                left: 30px;
            }

            &.right {
                bottom: 24px;
                right: 30px;
            }
        }
    }
</style>

