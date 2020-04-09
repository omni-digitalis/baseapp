import * as React from 'react';
import { marketsFetch, selectMarkets, Market } from '../../modules';
import { MapDispatchToProps } from 'react-redux';
import { connect } from 'react-redux';

interface ReduxProps {
    markets: Market[];
}

interface DispatchProps {
    fetchMarkets: typeof marketsFetch;
}

export interface VltMarketsProps extends ReduxProps, DispatchProps, React.HTMLAttributes<HTMLDivElement> {

}

const Component: React.FunctionComponent<VltMarketsProps> = (props: VltMarketsProps) => {
    const {
        className = "",
        markets,
        fetchMarkets,
        ...rest
    } = props;

    React.useEffect(() => {
        fetchMarkets && fetchMarkets();
    }, [fetchMarkets]);

    console.log(markets);

    return (
        <div
            className={`vlt-markets ${className}`}
            {...rest}
        >
            <div className={"sticky content-row"}>
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
            {markets.map((market, index) => (
                <div
                    key={`item-${index}`}
                    className={"content-row"}
                >
                    <div className={"content-row-item"}>
                        {market.name}
                    </div>
                    <div className={"content-row-item text-center"}>
                        {market.min_price}
                    </div>
                    <div className={"content-row-item text-right"}>
                        {"+ 0.0%"}
                    </div>
                </div>
            ))}
            {markets.map((market, index) => (
                <div
                    key={`item-${index}`}
                    className={"content-row"}
                >
                    <div className={"content-row-item"}>
                        {market.name}
                    </div>
                    <div className={"content-row-item text-center"}>
                        {market.min_price}
                    </div>
                    <div className={"content-row-item text-right"}>
                        {"+ 0.0%"}
                    </div>
                </div>
            ))}
        </div>
    );
};

const mapStateToProps = (state) => ({
    markets: selectMarkets(state)
});

const mapDispatchToProps: MapDispatchToProps<DispatchProps, {}> = dispatch => ({
    fetchMarkets: () => dispatch(marketsFetch()),
});

export const VltMarkets = connect(mapStateToProps, mapDispatchToProps)(React.memo(Component));