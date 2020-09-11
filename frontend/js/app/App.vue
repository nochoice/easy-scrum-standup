<template lang="pug">
    .app-wrapper 
        h1 Easy Scrum Standup
        quote-component(:data="qoute")
        center
            button.btn-next(@click="changeQoute") Pick another

        quote-categories-component(:categories="categories" :categoriesAggregate="categoriesAggregate")
</template>

<script lang="ts">
    import Vue from "vue";
    import QuoteComponent from './QuoteComponent.vue';
    import QuoteCategoriesComponent from './QuoteCategoriesComponent.vue';
    import { repository as qouteRepository } from '../repositories/local/qoutes'
    import { repository as qouteCategoryRepository } from '../repositories/local/qoute-category';

    export default Vue.extend({
        components: {
            QuoteComponent,
            QuoteCategoriesComponent
        },  
        data() {
            return {
                qoute: {},
                categories: [],
                categoriesAggregate: {}
            };
        },
        methods: {
            changeQoute: async function() {
                this.qoute = await qouteRepository.pickRandom();
            }
        },
        async mounted() {
            this.categoriesAggregate = await qouteRepository.aggregateTags();
            this.categories = await qouteCategoryRepository.list();
            this.qoute = await qouteRepository.pickRandom();
        }
    });
</script>

<style lang="scss" scoped>
    h1 {
        text-align: center;
        padding: 0;
        margin: 0;
        font-size: 40px;
    }
    button {
        background-color: transparent;
        border: 4px solid #fff;
        color: #fff;
        margin: 0 auto;
        padding: 12px 32px;
        font-size: 16px;
        text-transform: uppercase;
        outline: none;
        cursor: pointer;
    }
</style>

