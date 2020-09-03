import { QoutesRepository } from './../interfaces/qoutes.repository.interface';

import data from '../../../data/quotes.json';

export const repository: QoutesRepository = {
    list: () => Promise.resolve(data),
    pickRandom: () => Promise.resolve(data[Math.floor(Math.random()*data.length)])
}