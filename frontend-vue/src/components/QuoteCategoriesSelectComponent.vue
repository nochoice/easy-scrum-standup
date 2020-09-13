<template lang="pug">
    .qoute-category-select
        .categories
            v-chip(v-for="(category, index) in categories" :key="category.id" class="ma-2" text-color="white" color="pink" @click="select(category)" small)
                v-avatar(left v-if="isSelected(category)")
                    v-icon mdi-checkbox-marked-circle
                | {{ category.text }}
            div
                br
                v-badge(bordered color="secondary" :content="selectedQoutes.length" overlap)
                    v-btn(@click="changeQoute()" rounded class="white--text" color="primary" depressed :disabled="!selectedQoutes.length") Pick random
                .divider or
                v-btn(rounded small @click="back") Back

        

</template>

<script lang="js">
    import Vue from "vue";
    import { repository as qouteRepository } from '../repositories/local/qoutes';

    export default Vue.extend({
        data() {
            return {
                selectedCategories: [],
                selectedQoutes: []
            }
        },
        props: {
            categories: Array
        },
        methods: {
            select: function(category) {
                (this.isSelected(category))
                    ? this.selectedCategories = this.selectedCategories.filter(item => item != category)
                    : this.selectedCategories.push(category)
               
            },
            isSelected: function(category) {
                qouteRepository.list();
                return this.selectedCategories.includes(category);
            },
            changeQoute: function() {
                this.$emit('filteredQoute', this.selectedQoutes[Math.floor(Math.random()*this.selectedQoutes.length)]);
            },
            back: function() {
                this.$emit('close');
            }
        },
        watch: {
            selectedCategories: async function(val) {
                this.selectedQoutes = await qouteRepository.getByCategories(val.map(item => item.id));
            }
        }
    });
</script>

<style lang="scss" scoped>
   .qoute-category-select {
       text-align: center;
   }
   .divider {
       display: block;
        padding: 4px 0;
    }
</style>
 