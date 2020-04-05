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
    },
];

export const Component: React.FunctionComponent<VltMyWalletProps> = (props: VltMyWalletProps) => {
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
                    {"SUA CARTEIRA"}
                </p>
                <div className={"btn-container"}>
                    <div >

                    </div>
                    <div>

                    </div>
                </div>
            </div>
            <div
                className={"content-grid"}
            >
                <div
                    className={"piechart-cell"}
                >
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
                <div className={"cell asset-title-row-cell"}>
                    <p className={"col-title"}>{"Ativo"}</p>
                </div>
                <div className={"cell asset-amount-row-cell"}>
                    <p className={"col-title"}>{"Montante"}</p>
                </div>
                <div className={"cell asset-currency-row-cell"}>
                    <p className={"col-title"}>{"BRL"}</p>
                </div>
                {
                    currencies.map((currency, index) => (
                        <React.Fragment key={`cell-${index}`}>
                            <div
                                className={"cell asset-container"}
                                style={{
                                    gridArea: `${index + 2} / 3 / ${index + 3} / 4`
                                }}
                            >
                                <div
                                    className={"color-circle"}
                                    style={{
                                        backgroundColor: currency.color
                                    }}
                                />
                                <span>
                                    {currency.name}
                                </span>
                            </div>
                            <div
                                className={"cell"}
                                style={{
                                    gridArea: `${index + 2} / 4 / ${index + 3} / 5`
                                }}
                            >
                                <span>
                                    {currency.amount}
                                </span>
                            </div>
                            <div
                                className={"cell"}
                                style={{
                                    gridArea: `${index + 2} / 5 / ${index + 3} / 6`
                                }}
                            >
                                <span>
                                    {currency.currencyAmount} {currency.currencyName}
                                </span>
                            </div>
                        </React.Fragment>
                    ))
                }
            </div>
        </div>
    );
};

export const VltMyWallet = React.memo(Component);