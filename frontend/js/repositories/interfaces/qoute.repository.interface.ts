import { Qoute } from '../../interfaces/quote.interface';

export interface QouteRepository {
    list(): Promise<Qoute[]>;
    pickRandom(): Promise<Qoute>;
    aggregateTags(): Promise<{ [key: number]: number }>
}