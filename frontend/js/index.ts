import { QouteCategory } from './interfaces/qoute-category.interface';
import { Qoute } from './interfaces/quote.interface';
import { repository as qouteRepository } from './repositories/local/qoutes'
import { repository as qouteCategoryRepository } from './repositories/local/qoute-category'

const qouteElem: HTMLElement = document.querySelector('.box__note');
const qouteCategoryElem: HTMLElement = document.querySelector('.box__qoute-categories');
const btnNextElem: HTMLElement = document.querySelector('.quote__next');

const renderQuote = (data: Qoute): void => {
    qouteElem.innerHTML = data.text;
};

const renderQuoteCategories = (data): void => {
    qouteCategoryElem.innerHTML = data
                    .map((item) => `<span class="tag">${item.text}<b>${item.count}</b></span>`)
                    .join('')
};

const remapQouteCategories = (aggregateCategories, categories: QouteCategory[]) => {
    categories.sort((a, b) => a.text.localeCompare(b.text));

    return categories
                .map((cat: QouteCategory) => ({text: cat.text, count: aggregateCategories[cat.id]}))    
} 

btnNextElem.addEventListener('click', async () => {
    renderQuote(await qouteRepository.pickRandom());
});

(async () => {
    const q = await qouteRepository.pickRandom();
    const aggregate = await qouteRepository.aggregateTags();
    const categories = await qouteCategoryRepository.list();;
    const remapAggregate = remapQouteCategories(aggregate, categories);

    renderQuote(q);
    renderQuoteCategories(remapAggregate);
})();