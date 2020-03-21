const tradesColorMapping = {
    buy: {
        color: 'rgb(var(--bids))',
    },
    sell: {
        color: 'rgb(var(--asks))',
    },
};

export const setTradeColor = (side: string) => tradesColorMapping[side] || { color: ''};
