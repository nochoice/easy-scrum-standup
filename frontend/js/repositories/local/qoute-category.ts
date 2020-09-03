import { QouteCategoryRepository } from '../interfaces/qoute-category.repository.interface';

import data from '../../../data/categories.json';

export const repository: QouteCategoryRepository = {
    list: () => Promise.resolve(data)
}