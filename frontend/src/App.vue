<template lang="pug">
    v-app
        v-main
            v-container
                .logo(class="text-center my-10")
                    logo-component

                .navigation(class="text-center")
                    v-badge(bordered color="secondary" :content="qoutesNum" overlap)
                        v-btn(
                            @click="changeQoute" 
                            rounded 
                            color="primary" 
                            :disabled="isCategoriesSelectOpen") Pick random

                    .divider(class="pa-2") or

                    v-btn(
                        v-show="!isCategoriesSelectOpen" 
                        rounded 
                        small 
                        @click="isCategoriesSelectOpen = true") Select from categories
                    
                    quote-categories-select-component(
                        v-show="isCategoriesSelectOpen" 
                        :categories="categories" 
                        @filteredQoute="onCategoriesSelectQoute" 
                        @close="onCategoriesSelectClose")

                quote-component(:data="qoute")
                about-component(class="mb-6")
                center
                    v-btn(
                        small
                        rounded
                        color="white--text grey darken-3"
                        href="https://github.com/nochoice/easy-scrum-standup"
                        target="_blank"
                        rel="noopener")

                        v-icon(left) mdi-github
                        | github
        v-footer(color="white") 
            v-col(class="text-center" cols="12") {{ new Date().getFullYear() }} — 
                strong © {{ projectName }}

</template>

<script>
    import Vue from "vue";
    import QuoteComponent from './components/QuoteComponent.vue';
    import QuoteCategoriesComponent from './components/QuoteCategoriesComponent.vue';
    import QuoteCategoriesSelectComponent from './components/QuoteCategoriesSelectComponent.vue';
    import AboutComponent from './components/AboutComponent.vue';
    import LogoComponent from './components/LogoComponent.vue';
    import { repository as qouteRepository } from './repositories/local/qoutes';
    import { repository as qouteCategoryRepository } from './repositories/local/qoute-category';

    import './sass/_style.scss';

    export default Vue.extend({
        components: {
            QuoteComponent,
            QuoteCategoriesComponent,
            QuoteCategoriesSelectComponent,
            AboutComponent,
            LogoComponent
        },  
        data() {
            return {
                projectName: 'Easy Scrum Standup',
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
    @media (min-width: 900px) {
        .container {
            max-width: 600px;
        }
    }
</style>
