export const depositColorMapping = {
    accepted: 'rgb(var(--system-green))',
    collected: 'rgb(var(--system-green))',
    submitted: '',
    canceled: 'rgb(var(--system-red))',
    rejected: 'rgb(var(--system-red))',
};

export const withdrawColorMapping = {
    prepared: '',
    submitted: '',
    canceled: 'rgb(var(--system-red))',
    accepted: 'rgb(var(--system-green))',
    suspected: '',
    rejected: 'rgb(var(--system-red))',
    processing: '',
    succeed: 'rgb(var(--system-green))',
    failed: 'rgb(var(--system-red))',
    errored: 'rgb(var(--system-red))',
    confirming: '',
};

export const tradesColorMapping = {
    sell: {
        color: 'rgb(var(--asks))',
        text: 'Sell',
    },
    buy: {
        color: 'rgb(var(--bids))',
        text: 'Buy',
    },
};

export const setDepositStatusColor = (status: string): string => depositColorMapping[status];

export const setWithdrawStatusColor = (status: string): string => withdrawColorMapping[status];

export const setTradesType = (type: string) => tradesColorMapping[type] || { color: '', text: '' };
