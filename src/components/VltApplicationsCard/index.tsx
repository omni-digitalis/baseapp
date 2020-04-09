import * as React from 'react';

export interface VltApplicationsCardProps extends React.HTMLAttributes<HTMLDivElement> {

}


const Component: React.FunctionComponent<VltApplicationsCardProps> = (props: VltApplicationsCardProps) => {
    const {
        className = "",
        ...rest
    } = props;

    return (
        <div
            className={`vlt-applications-card ${className}`}
            {...rest}
        >
            <div className={"content"}>
                <div className={"text-container"}>
                    <span className={"highlight-text"}>
                        <span className={"currency-symbol"}>
                            {/* TODO: i18n */}
                            {"R$"}
                        </span>
                        {"2.500,00"}
                    </span>
                    <p className={"legend-text"}>
                        {/* TODO: i18n */}
                        {"valor aplicado"}
                    </p>
                </div>
                <div className={"text-container"}>
                    <p className={"highlight-text"}>
                        <span className={"currency-symbol"}>
                            {/* TODO: i18n */}
                            {"R$"}
                        </span>
                        {"50,00"}
                    </p>
                    <p className={"legend-text"}>
                        {/* TODO: i18n */}
                        {"valor em conta"}
                    </p>
                </div>
            </div>

        </div>
    );
};

export const VltApplicationsCard = React.memo(Component);
