import * as React from 'react';

export interface VltMarketsProps extends React.HTMLAttributes<HTMLDivElement> {

}

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
              
            </div>
        </div>
    );
};

export const VltMarkets = React.memo(Component);