import * as React from 'react';
// styles
import './VltDashboardScreen.css';
// images
import eyeSVG from '../../assets/vlt-images/icons/eye.svg';
import { VltMyWallet, VltApplicationsCard, VltMarkets } from '../../components';

const VltDashboardScreen = props => {
    return(
        <div className="vlt-container">
            <div className="security-alert-card"></div>

            <div className="vlt-title-container">
                <div className="vlt-title-row">
                    <h1>Dashboard</h1>
                    <div className="vlt-title-icon">
                        <img src={eyeSVG} alt="Eye"/>
                    </div>
                </div>

                <div className="vlt-actions-row">
                    <div>
                        <span>Modo de exibição:</span>
                        <select className="vlt-button-secondary vlt-exibition-mode">
                            <option value="">Personalizada</option>
                            <option value="">Escuro</option>
                            <option value="">Claro</option>
                        </select>
                    </div>
                    <button className="vlt-button-primary">+ Adicionar cards</button>
                </div>
            </div>

            <section>
                <VltMyWallet className="vlt-card vlt-flex-2"/>
                <VltApplicationsCard className="vlt-card vlt-flex-1 vlt-card-with-margin"/>
                <VltMarkets className="vlt-card vlt-flex-1 vlt-card-with-margin"/>
            </section>

            <section>
                <div className="vlt-card vlt-flex-1"></div>
            </section>

            <section>
                <div className="vlt-card vlt-flex-1"></div>
                <div className="vlt-card vlt-flex-1 vlt-card-with-margin"></div>
                <div className="vlt-card vlt-flex-1 vlt-card-with-margin"></div>
                <div className="vlt-card vlt-flex-1 vlt-card-with-margin"></div>
            </section>

            <section>
                <div className="vlt-card vlt-flex-1"></div>
                <div className="vlt-card vlt-flex-1 vlt-card-with-margin"></div>
            </section>
        </div>
    );
};

export { VltDashboardScreen };
