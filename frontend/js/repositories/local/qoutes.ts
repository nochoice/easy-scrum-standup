import { Qoute } from './../../interfaces/quote.interface';
import { QouteRepository } from '../interfaces/qoute.repository.interface';

import data from '../../../data/quotes.json';

export const repository: QouteRepository = {
    list: () => Promise.resolve(data),
    pickRandom: () => Promise.resolve(data[Math.floor(Math.random()*data.length)]),
    aggregateTags: () => {
        const out = data.reduce((acc: any, item: Qoute) => {
            item.tags.forEach((item) => {
                if (!acc[item]) { acc[item] = 0 };
                acc[item] += 1;
            });
            return acc;
        }, {});
        
        return Promise.resolve(out);
    }
}