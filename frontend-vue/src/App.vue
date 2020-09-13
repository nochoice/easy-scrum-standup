<template lang="pug">
    v-app
        h1 Easy Scrum Standup
        .navigation
            center(v-if="!isCategoriesSelectOpen")
                v-badge(bordered color="secondary" :content="qoutesNum" overlap)
                    v-btn(@click="changeQoute" rounded class="white--text" color="primary" depressed) Pick random
                div.divider or
                v-btn(rounded small @click="isCategoriesSelectOpen = true") Select from categories
            
            quote-categories-select-component(v-if="isCategoriesSelectOpen" :categories="categories" @filteredQoute="onCategoriesSelectQoute" @close="onCategoriesSelectClose")
        quote-component(:data="qoute")
        //- quote-categories-component(:categories="categories" :categoriesAggregate="categoriesAggregate")
</template>

<script>
    import Vue from "vue";
    import QuoteComponent from './components/QuoteComponent.vue';
    import QuoteCategoriesComponent from './components/QuoteCategoriesComponent.vue';
    import QuoteCategoriesSelectComponent from './components/QuoteCategoriesSelectComponent.vue';
    import { repository as qouteRepository } from './repositories/local/qoutes';
    import { repository as qouteCategoryRepository } from './repositories/local/qoute-category';

    import './sass/_style.scss';

    export default Vue.extend({
        components: {
            QuoteComponent,
            QuoteCategoriesComponent,
            QuoteCategoriesSelectComponent
        },  
        data() {
            return {
                qoute: {},
                qoutes: [],
                categories: [],
                categoriesAggregate: {},
                isCategoriesSelectOpen: false
            };
        },
        computed: {
            qoutesNum: function() {
                return this.qoutes.length
            }
        },
        methods: {
            changeQoute: async function() {
                this.qoute = await qouteRepository.pickRandom();
            },
            onCategoriesSelectQoute: function(qoute) {
                this.qoute = qoute;
            },
            onCategoriesSelectClose: function() {
                this.isCategoriesSelectOpen = false
            }
        },
        async mounted() {
            this.categoriesAggregate = await qouteRepository.aggregateTags();
            this.categories = await qouteCategoryRepository.list();
            this.qoutes = await qouteRepository.list();
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
        padding: 60px 0 12px;
    }

    .divider {
        padding: 4px 0;
    }
</style>
