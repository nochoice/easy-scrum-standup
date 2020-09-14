<template lang="pug">
    .categories
        h3(class="mb-3") Stats
        v-chip(v-for="(tag, index) in tags" :key="index" color="grey lighten-2" small)
            v-avatar(left class="grey" small) {{tag.count}}
            | {{tag.text}}

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
        margin-top: 20px;
        text-align: center;

        .v-chip {
            margin-right: 4px;
        }
    }
</style>
