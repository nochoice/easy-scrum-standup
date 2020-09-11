<template lang="pug">
    .categories 
        span(v-for="tag in tags") {{tag.text}}
            b {{tag.count}}
</template>

<script lang="ts">
    import Vue from "vue";

    export default Vue.extend({
        props: {
            categories: Array,
            categoriesAggregate: Object
        },
        computed: {
            tags: function () {
                return this.categories
                    .slice()
                    .sort((a, b) => a.text.localeCompare(b.text))
                    .map((cat) => ({text: cat.text, count: this.categoriesAggregate[cat.id]}))   
            }
        }
    });
</script>

<style lang="scss" scoped>
   .categories {
        margin-top: 40px;
        text-align: center;
        font-weight: 300;

        span {
            margin-right: 8px;
            margin-bottom: 16px;
            border: 1px solid #000;
            padding-left: 8px;
            display: inline-block;

            b {
                background-color: #000;
                color: #fff;
                padding: 0 8px;
                margin-left: 8px;
            }
        }
    }
</style>
