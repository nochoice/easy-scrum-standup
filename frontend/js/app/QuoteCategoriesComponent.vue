<template lang="pug">
    .qoute-categories 
        span.tag(v-for="tag in tags") {{tag.text}}
            b {{tag.count}}
</template>

<script lang="ts">
    import Vue from "vue";
    import { QouteCategory } from "../interfaces/qoute-category.interface";

    export default Vue.extend({
        props: {
            categories: Array,
            categoriesAggregate: Object
        },
        computed: {
            tags: function () {
                this.categories.sort((a, b) => a.text.localeCompare(b.text));

                return this.categories
                    .map((cat: QouteCategory) => ({text: cat.text, count: this.categoriesAggregate[cat.id]}))   
                }
        }
    });
</script>

<style lang="scss" scoped>
   .qoute-categories {
        margin-top: 32px;
        text-align: center;
        font-weight: 300;

        .tag {
            margin-right: 8px;
            border: 1px solid #fff;
            padding-left: 4px;

            b {
                background-color: white;
                color: #50B69F;
                padding: 0 8px;
                margin-left: 4px;
            }
        }
    }
</style>


