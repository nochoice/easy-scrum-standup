import { Qoute } from './interfaces/quote.interface';
import { repository } from './repositories/local/qoutes'

const qouteElem: HTMLElement = document.querySelector('.box__note');
const btnNextElem: HTMLElement = document.querySelector('.quote__next');

const renderQuote = (data: Qoute): void => {
    qouteElem.innerHTML = data.text;
};

btnNextElem.addEventListener('click', async () => {
    renderQuote(await repository.pickRandom());
});

(async () => {
    const q = await repository.pickRandom();
    renderQuote(q);
})();