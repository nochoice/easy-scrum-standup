interface Qoute {
    type: number;
    text: string;
}

import data from '../data/quotes.json';

const qouteElem: HTMLElement = document.querySelector('.box__note');
const btnNextElem: HTMLElement = document.querySelector('.quote__next');

const renderQuote = (data?: Qoute): void => {
    qouteElem.innerHTML = data.text;
}

const pickRandomQuote = (data: Qoute[]): Qoute => {
    const max = data.length;
    const index = Math.floor(Math.random()*max);
    
    return data[index];
}

renderQuote(pickRandomQuote(data));

btnNextElem.addEventListener('click', () => {
    renderQuote(pickRandomQuote(data));
})