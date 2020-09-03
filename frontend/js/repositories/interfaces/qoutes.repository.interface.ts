import { Qoute } from './../../interfaces/quote.interface';
export interface QoutesRepository {
    list(): Promise<Qoute[]>,
    pickRandom(): Promise<Qoute>
}