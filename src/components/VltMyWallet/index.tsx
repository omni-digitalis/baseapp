import * as React from 'react';
import { connect, MapDispatchToProps } from "react-redux";
import { Cell, Pie, PieChart, ResponsiveContainer } from 'recharts';
import { selectWallets, selectWalletsLoading, walletsFetch } from '../../modules';
import { WalletItemProps } from '../WalletItem';

interface DispatchProps {
    fetchWallets?: typeof walletsFetch
}

interface ReduxProps {
    wallets?: WalletItemProps[];
    walletsLoading?: boolean;
}

export interface VltMyWalletProps extends DispatchProps, ReduxProps, React.HTMLAttributes<HTMLDivElement> {

}

function toBRL(currency: string, value: number): number {
    switch (currency) {
        case "btc": return value * 37670.77;
        case "bhc": return value * 1267.07;
        case "dash": return value * 333.75;
        case "eth": return value * 803.24;
        case "ltc": return value * 224.02;
        case "trst": return value * 0.02624;
        case "usd": return value * 5.35;
        case "xrp": return value * 0.910;
        case "zar": return value * 0.28;
        case "eur": return value * 5.78;
        default: return value;
    }
}

function getColor(index) {
    switch(index) {
        case 0: return "#8BD1BC";
        case 1: return "#BDE2E6";
        case 2: return "#CDD97A";
        case 3: return "#E9BFE7";
        case 4: return "#F78D6D";
        default: return "#000000";
    }
}

const Component: React.FunctionComponent<VltMyWalletProps> = (props: VltMyWalletProps) => {
    const {
        className = "",
        wallets = [],
        walletsLoading,
        fetchWallets,
        ...rest
    } = props;

    React.useEffect(() => {
        fetchWallets && fetchWallets();
    }, [fetchWallets]);

    //TODO: atualizar typescript para suportar optional chain
    const mappedWallets = React.useMemo(() => wallets && wallets.map((wallet, index) => ({
        value: parseFloat(wallet.balance as string),
        name: wallet.name,
        shortName: wallet.currency.toUpperCase(),
        balance: wallet.balance ? parseFloat(wallet.balance as string).toFixed(4) : "0.0000",
        brl: wallet.balance ? toBRL(wallet.currency, parseFloat(wallet.balance as string)).toFixed(2) : (0).toFixed(2),
    })).sort((a, b) => {
        if (a.brl > b.brl) return -1;
        else if (a.brl < b.brl) return 1
        else return 0
    }).map((wallet, index) => ({...wallet, color: getColor(index)})).slice(0, 5), [wallets]);

    return (
        <div
            className={`vlt-my-wallet ${className}`}
            {...rest}
        >
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
                                data={mappedWallets}
                                labelLine={false}
                                outerRadius={"100%"}
                                fill="#8884d8"
                                dataKey="value"
                            >
                                {
                                    mappedWallets.map((currency, index) => (
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
                    <div className={"sticky content-col-2-row"}>
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
                    {mappedWallets.map((currency, index) => (
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
                                {currency.balance} {currency.shortName}
                            </div>
                            <div className={"content-col-2-row-content"}>
                                {currency.brl + " BRL"}
                            </div>
                        </div>
                    ))}
                </div>
            </div>

        </div>
    );
};

const mapStateToProps = (state: any) => {
    return {
        wallets: selectWallets(state),
        walletsLoading: selectWalletsLoading(state),
    }
};

const mapDispatchToProps: MapDispatchToProps<DispatchProps, {}> = dispatch => ({
    fetchWallets: () => dispatch(walletsFetch()),
});


export const VltMyWallet = connect(mapStateToProps, mapDispatchToProps)(React.memo(Component));