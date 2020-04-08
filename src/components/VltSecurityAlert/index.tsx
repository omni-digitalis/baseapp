import * as React from 'react';
// images
import lockIcon from '../../assets/vlt-images/icons/lock.svg';
import emailIcon from '../../assets/vlt-images/icons/email.svg';
import fileIcon from '../../assets/vlt-images/icons/file.svg';
import fingerprintIcon from '../../assets/vlt-images/icons/fingerprint.svg';

export interface VltSecurityAlertProps extends React.HTMLAttributes<HTMLDivElement> {

}

const Component: React.FunctionComponent<VltSecurityAlertProps> = (props: VltSecurityAlertProps) => {
    const {
        className,
        ...rest
    } = props;

    return (
        <div
            className={`vlt-security-alert-card ${className}`}
            {...rest}
        >
            <div className="container">
                <div className="security-alert-item">
                    <img src={lockIcon} alt="Lock" />

                    <div className="item-message">
                        <div className="item-message-title">
                            <p>
                                Segurança em primeiro lugar
                        </p>
                        </div>
                        <div className="item-message-text">
                            <p>
                                Para aproveitar a nossa plataforma com o máximo de segurança, faça as validações da sua conta conforme as orientações do nosso time de segurança:
                        </p>
                        </div>
                    </div>
                </div>

                <div className="security-alert-item">
                    <div className="item-validation">
                        <img src={emailIcon} alt="emailIcon" id="emailIcon" />
                        <p>Verificação de e-mail</p>
                    </div>

                    <div className="item-validation">
                        <img src={fileIcon} alt="fileIcon" id="fileIcon" />
                        <p>Validação de documentos</p>
                    </div>

                    <div className="item-validation">
                        <img src={fingerprintIcon} alt="" id="fingerprintIcon" />
                        <p>Autenticação de dois passos</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export const VltSecurityAlert = React.memo(Component);
