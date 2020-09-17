import data from '../../data/categories.json';

export const repository = {
    list: () => Promise.resolve(data)
}
