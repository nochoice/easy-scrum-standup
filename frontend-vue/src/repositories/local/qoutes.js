import data from '../../data/quotes.json';

export const repository = {
    list: () => Promise.resolve(data),
    pickRandom: () => Promise.resolve(data[Math.floor(Math.random()*data.length)]),
    aggregateTags: () => {
        const out = data.reduce((acc, item) => {
            item.tags.forEach((item) => {
                if (!acc[item]) { acc[item] = 0 }
                acc[item] += 1;
            });
            return acc;
        }, {});

        return Promise.resolve(out);
    },

    getByCategories: (categoryIds) => Promise.resolve(data.filter(item => !!item.tags.filter(o => categoryIds.includes(o)).length))

}
