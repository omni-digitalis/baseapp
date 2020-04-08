import * as React from 'react';
import { compose } from 'redux';
import { CurrencySlot } from "./CurrencySlot";

interface DispatchProps {
}

interface ReduxProps {
}

export interface Props extends DispatchProps, ReduxProps, React.HTMLAttributes<HTMLDivElement> {

}


const Component: React.FunctionComponent<Props> = (props: Props, ref: React.Ref<HTMLDivElement>) => {
    const {
        className,
        ...rest
    } = props;

    const data = React.useMemo(() =>
        Array.from({ length: 13 }, () => Math.floor(Math.random() * (5 - 2 + 1)) + 2).map(v => ({ v })), []
    );

    return (
        <div
            ref={ref}
            className={`vlt-period-prices ${className || ""}`}
            {...rest}
        >
            <div className={"panel"}>
                <p className={"title"}>
                    {/* TODO: i18n */}
                    {"COTAÇÕES"}
                </p>
                <div className={"options"}>
                    <div>
                        <button className={"period-option vlt-button-secondary"}>
                            {/* //TODO: i18n */}
                            {"Anual"}
                        </button>
                        <button className={"period-option vlt-button-secondary"}>
                            {/* //TODO: i18n */}
                            {"Semanal"}
                        </button>
                        <button className={"period-option vlt-button-primary"}>
                            {/* //TODO: i18n */}
                            {"Diário"}
                        </button>
                    </div>
                    <div className={"card-options"}>
                        <button
                            disabled
                            className={"vlt-card-operation-button"}
                        >
                            <i className="fas fa-arrows-alt" />
                        </button>
                        <button
                            disabled
                            className={"vlt-card-operation-button"}
                        >
                            <i className="fas fa-times" />
                        </button>
                    </div>
                </div>
            </div>

            <div className={"content"}>
                <CurrencySlot
                    className={"currency-slot"}
                    currency={{
                        name: "bitcoin",
                        data
                    }}
                />
                <CurrencySlot
                    className={"currency-slot"}
                    currency={{
                        name: "ethereum",
                        data
                    }}
                />
                <CurrencySlot
                    className={"currency-slot"}
                    currency={{
                        name: "litecoin",
                        data
                    }}
                />
                <CurrencySlot
                    className={"currency-slot"}
                />
            </div>
        </div>
    );
}

export const VltPeriodPrices = compose(
    React.memo,
    React.forwardRef,
)(Component) as React.FunctionComponent<Props>;