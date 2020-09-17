<template lang="pug">
    .about
        center
            v-btn(v-show="!isOpened" small rounded @click="isOpened = true" color="white--text blue-grey darken-3") 
                v-icon(left) mdi-sheep
                | About the project
        .detail(v-show="isOpened" class="full-width pa-10 blue-grey darken-3 white--text")
            v-row(align="center" justify="center")
                v-col(class="text-center my-2" sm=8 md=6 lg=3)
                    h2(class="mb-1") About the project
                    h3(class="text-center mb-4") Fear no more -&gt; we got you covered.
        
                    p(class="text-center")
                        | Did you ever find yourself in a situation that you are joining a daily (daily standup) and you realize you kind of forgot to work on the project? 

                    p(class="text-center") This project is a simple page with 
                        b random quotes 
                        | which you can use on your daily if you happen to forget to work on the project or you just end up on a unproductive daily meeting.
                    p(class="text-center") 
                        v-btn(small rounded @click="isOpened = false" color="" class="mt-4") Close
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

</style>>
