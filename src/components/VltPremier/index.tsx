import * as React from 'react';
// images

export interface VltPremierProps extends React.HTMLAttributes<HTMLDivElement> {

}

const Component: React.FunctionComponent<VltPremierProps> = (props: VltPremierProps) => {
    const {
        className,
        ...rest
    } = props;

    return (
        <div
            className={`vlt-premier ${className}`}
            {...rest}
        >
            <p>Faça essas missões na Valutti e ganhe dinheiro direto na conta da Exchange.</p>
            <div className="vlt-premier-container">
                <div className="vlt-premier-container-item vlt-flex-not-full">
                    <span className="vlt-premier-item-title">Missão 1</span>
                    <p>Registre sua primeira conta bancária</p>
                    <button className="vlt-premier-button">
                        <i className="fas fa-chevron-right"></i>
                    </button>
                </div>

                <div className="vlt-premier-container-item vlt-item-with-margin-left vlt-flex-not-full">
                    <span className="vlt-premier-item-title">Missão 2</span>
                    <p>Envie seus documentos</p>
                    <button className="vlt-premier-button">
                        <i className="fas fa-chevron-right"></i>
                    </button>
                </div>

                <div className="vlt-premier-container-item vlt-item-with-margin-left vlt-flex-not-full">
                    <span className="vlt-premier-item-title">Missão 3</span>
                    <p>Envie seu primeiro depósito para sua conta na exchange</p>
                    <button className="vlt-premier-button">
                        <i className="fas fa-chevron-right"></i>
                    </button>
                </div>

                <div className="vlt-premier-equal-sign">
                    =
                </div>

                <div className="vlt-premier-container-item vlt-flex-full">
                    <span className="vlt-premier-item-title">Ganhe</span>
                    <span className="vlt-premier-item-value">
                        <span className="vlt-premier-coin">R$</span>
                        25
                    </span>
                    <p>direto na sua conta</p>
                    <button className="vlt-button-primary">+ Mais informações</button>
                </div>
            </div>
        </div>
    );
};

export const VltPremier = React.memo(Component);
