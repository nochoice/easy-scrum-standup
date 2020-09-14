<template lang="pug">
    .about
        center
            v-btn(v-show="!isOpened" small rounded @click="isOpened = true") About the project
        .detail(v-show="isOpened" class="full-width pt-10 pb-10")
            v-row(align="center" justify="center")
                v-col(class="text-center" xs=10 sm=10 md=6 lg=3)
                    h2(class="mb-4") About the project
        
                    p(class="text-center")
                        | Did you ever find yourself in a situation that you are joining a daily (daily standup) and you realize you kind of forgot to work on the project? 
                    
                    h3(class="text-center mb-4") Fear no more -&gt; we got you covered.

                    p(class="text-center") This project is a simple page with 
                        b random quotes 
                        | which you can use on your daily if you happen to forget to work on the project or you just end up on a unproductive daily meeting.
</template>

<script lang="js">
    import Vue from "vue";

    export default Vue.extend({
        data() {
            return {
                isOpened: false
            }
        }
    });
</script>

<style lang="scss" scoped>
    .detail {
        color: #fff;
        background:  rgba(0, 0, 0, 0.87);
    }
</style>>
