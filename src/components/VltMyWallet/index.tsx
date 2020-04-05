import * as React from 'react';
import {
    ResponsiveContainer, PieChart, Pie, Cell,
} from 'recharts';

export interface VltMyWalletProps extends React.HTMLAttributes<HTMLDivElement> {

}

//TODO: dados dinâmicos
const currencies = [
    {
        name: 'Bitcoin',
        shortName: 'BTC',
        amount: '75.00000',
        currencyName: "BRL",
        currencyAmount: "2000.00",
        value: 2000,
        color: "#8BD1BC"
    }, {
        name: 'Ethereum',
        shortName: 'ETH',
        amount: '5.00000',
        currencyName: "BRL",
        currencyAmount: "500.00",
        value: 500,
        color: "#BDE2E6"
    }, {
        name: 'XRP',
        shortName: 'BTC',
        amount: '0.00000',
        currencyName: "BRL",
        currencyAmount: "0.0",
        value: 0,
        color: "#CDD97A"
    }, {
        name: 'Litecoin',
        shortName: 'LTC',
        amount: '0.00000',
        currencyName: "BRL",
        currencyAmount: "0.00",
        value: 0,
        color: "#E9BFE7"
    }, {
        name: 'Lisk',
        shortName: 'LSK',
        amount: '0.00000',
        currencyName: "BRL",
        currencyAmount: "0.00",
        value: 0,
        color: "#F89273"
    }, {
        name: 'Lisk',
        shortName: 'LSK',
        amount: '0.00000',
        currencyName: "BRL",
        currencyAmount: "0.00",
        value: 0,
        color: "#F89273"
    }, {
        name: 'Lisk',
        shortName: 'LSK',
        amount: '0.00000',
        currencyName: "BRL",
        currencyAmount: "0.00",
        value: 0,
        color: "#F89273"
    }, {
        name: 'Lisk',
        shortName: 'LSK',
        amount: '0.00000',
        currencyName: "BRL",
        currencyAmount: "0.00",
        value: 0,
        color: "#F89273"
    },
];

const Component: React.FunctionComponent<VltMyWalletProps> = (props: VltMyWalletProps) => {
    const {
        className = "",
        ...rest
    } = props;

    return (
        <div
            className={`vlt-my-wallet ${className}`}
            {...rest}
        >
            <div className={"panel"}>
                <p className={"title"}>
                    {/* TODO: i18n */}
                    {"SUA CARTEIRA"}
                </p>
                <div className={"btn-container"}>
                    <div >

                    </div>
                    <div>

                    </div>
                </div>
            </div>

            <div className={"content"}>
                <div className={"content-col-1"}>
                    <ResponsiveContainer
                        // aspect={1}
                        width={"100%"}
                        height={"100%"}
                    >
                        <PieChart>
                            <Pie
                                padding
                                data={currencies}
                                labelLine={false}
                                outerRadius={"100%"}
                                fill="#8884d8"
                                dataKey="value"
                            >
                                {
                                    currencies.map((currency, index) => (
                                        <Cell
                                            key={`cell-${index}`}
                                            fill={currency.color}
                                        />
                                    ))
                                }
                            </Pie>
                        </PieChart>
                    </ResponsiveContainer>
                </div>

                <div className={"content-col-2"}>
                    <div className={"content-col-2-row"}>
                        <div className={"bold content-col-2-row-content"}>
                            {"Ativo"}
                        </div>
                        <div className={"bold content-col-2-row-content"}>
                            {"Montante"}
                        </div>
                        <div className={"bold content-col-2-row-content"}>
                            {"BRL"}
                        </div>
                    </div>
                    {currencies.map((currency, index) => (
                        <div
                            key={`item-${index}`}
                            className={"content-col-2-row"}
                        >
                            <div className={"content-col-2-row-content"}>
                                <div
                                    className={"color-circle"}
                                    style={{
                                        backgroundColor: currency.color
                                    }}
                                />
                                {currency.name}
                            </div>
                            <div className={"content-col-2-row-content"}>
                                {currency.amount} {currency.shortName}
                            </div>
                            <div className={"content-col-2-row-content"}>
                                {currency.currencyAmount} {currency.currencyName}
                            </div>
                        </div>
                    ))}
                </div>
            </div>

        </div>
    );
};

export const VltMyWallet = React.memo(Component);