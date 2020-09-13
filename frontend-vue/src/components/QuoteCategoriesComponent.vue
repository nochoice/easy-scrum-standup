<template lang="pug">
    .categories
        v-chip(v-for="tag in tags" color="grey lighten-2" small)
            //- v-avatar(left class="primary darken-1" small) {{tag.count}}
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
        margin-top: 40px;
        text-align: center;

        .v-chip {
            margin-right: 4px;
        }
    }
</style>
