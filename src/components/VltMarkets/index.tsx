import * as React from 'react';

export interface VltMarketsProps extends React.HTMLAttributes<HTMLDivElement> {

}

const markets = [
    {
        currency: "BTC/BRL",
        price: "0.0",
        variation: "+ 0.0%"
    }, {
        currency: "BTC/USDT",
        price: "0.0",
        variation: "+ 0.0%"
    }, {
        currency: "DASH/USDT",
        price: "0.0",
        variation: "+ 0.0%"
    }, {
        currency: "ETH/BRL",
        price: "0.0",
        variation: "+ 0.0%"
    }, {
        currency: "ETH/USDT",
        price: "0.0",
        variation: "+ 0.0%"
    }, {
        currency: "BTC/BRL",
        price: "0.0",
        variation: "+ 0.0%"
    }, {
        currency: "BTC/USDT",
        price: "0.0",
        variation: "+ 0.0%"
    }, {
        currency: "DASH/USDT",
        price: "0.0",
        variation: "+ 0.0%"
    }, {
        currency: "ETH/BRL",
        price: "0.0",
        variation: "+ 0.0%"
    }, {
        currency: "ETH/USDT",
        price: "0.0",
        variation: "+ 0.0%"
    }
]

const Component: React.FunctionComponent<VltMarketsProps> = (props: VltMarketsProps) => {
    const {
        className = "",
        ...rest
    } = props;

    return (
        <div
            className={`vlt-markets ${className}`}
            {...rest}
        >
            <div className={"panel"}>
                <p className={"title"}>
                    {/* TODO: i18n */}
                    {"MERCADO"}
                </p>
                <div className={"btn-container"}>
                    <div >

                    </div>
                    <div>

                    </div>
                </div>
            </div>

            <div className={"content-row"}>
                    <div className={"bold content-row-item"}>
                        {/* TODO: i18n */}
                        {"Criptomoeda"}
                    </div>
                    <div className={"bold content-row-item text-center"}>
                        {/* TODO: i18n */}
                        {"Preço"}
                    </div>
                    <div className={"bold content-row-item text-right"}>
                        {/* TODO: i18n */}
                        {"% (24h)"}
                    </div>
                </div>
                
            <div className={"content"}>
                
                {markets.map((market, index) => (
                    <div
                        key={`item-${index}`}
                        className={"content-row"}
                    >
                        <div className={"content-row-item"}>
                            {market.currency}
                        </div>
                        <div className={"content-row-item text-center"}>
                            {market.price}
                        </div>
                        <div className={"content-row-item text-right"}>
                            {market.variation}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export const VltMarkets = React.memo(Component);