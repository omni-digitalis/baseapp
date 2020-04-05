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
            <div className={"panel"}>
                <p className={"title"}>
                    {/* TODO: i18n */}
                    {"VALORES INVESTIDOS"}
                </p>
                <div className={"btn-container"}>
                    <div>

                    </div>
                    <div>

                    </div>
                </div>
            </div>

            <div className={"content"}>
                <div className={"text-container"}>
                    <p className={"highlight-text"}>
                        <span className={"currency-symbol"}>
                            {/* TODO: i18n */}
                            {"R$"}
                        </span>
                        {"2.500,00"}
                    </p>
                    <p className={"legend-text"}>
                        {/* TODO: i18n */}
                        {"Valor aplicado"}
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
                        {"Valor aplicado"}
                    </p>
                </div>
            </div>

        </div>  
    );
};

export const VltApplicationsCard = React.memo(Component);