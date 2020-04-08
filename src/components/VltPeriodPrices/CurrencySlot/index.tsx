import * as React from 'react';
import { compose } from 'redux';
import { Area, AreaChart, ResponsiveContainer } from 'recharts';

export interface Props extends React.HTMLAttributes<HTMLDivElement> {
    currency?: {
        name: string,
        data: any[]
    }
}

const Component: React.FunctionComponent<Props> = (props: Props, ref: React.Ref<HTMLDivElement>) => {
    const {
        currency,
        className,
        ...rest
    } = props;

    return (
        <div
            ref={ref}
            className={`vlt-period-prices-currency-slot${!currency ? "-bordered" : ""} ${className}`}
            {...rest}
        >
            {currency ? (
                <React.Fragment>
                    <div className={"currency-slot-header"}>
                        {currency.name}
                        <span className={"icon fa fa-sync-alt"} />
                    </div>
                    <div className={"currency-slot-body"}>
                        <ResponsiveContainer
                            width={"100%"}
                            height={"100%"}
                        >
                            <AreaChart
                                data={currency.data}
                                margin={{ top: 0, bottom: 0, left: 0, right: 0 }}
                            >
                                <Area dataKey="v" stroke="#8884d8" fill="#8884d8" />
                            </AreaChart>
                        </ResponsiveContainer>
                    </div>
                    <div className={"currency-slot-footer"}>
                        <div className={"currency-slot-footer-currency"}>
                            <span className={"icon fab fa-btc"} />
                            {"7.910,05"}
                        </div>
                        <div className={"currency-slot-footer-variation"}>
                            {"+ B 7.910,05"}
                            <div className={"currency-slot-footer-variation-percentage"}>
                                {"0.56%"}
                                <span className={"icon fa fa-caret-up"} />
                            </div>
                        </div>
                    </div>
                </React.Fragment>
            ) : (
                    <React.Fragment>
                        <div className={"plus-container"}>
                            <span className={"fas fa-plus"} />
                        </div>
                            {"ADICIONAR CRIPTOMOEDA"}
                    </React.Fragment>
                )
            }
        </div>
    )
}

export const CurrencySlot = compose(
    React.memo,
    React.forwardRef,
)(Component) as React.FunctionComponent<Props>;