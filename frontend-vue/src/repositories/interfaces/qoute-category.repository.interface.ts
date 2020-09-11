import { QouteCategory } from '../../interfaces/qoute-category.interface';

export interface QouteCategoryRepository {
    list(): Promise<QouteCategory[]>
}
