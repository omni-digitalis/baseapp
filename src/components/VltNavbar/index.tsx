import * as React from 'react';
import { Link } from 'react-router-dom';
// styles
import './styles.css';
// images
import userIcon from '../../assets/vlt-images/icons/user.png';
import vltLogo from '../../assets/vlt-images/valutti-logo.png';

const VltNavbar = props => {
    return(
        <nav>
            <div className="vlt-container vlt-nav-content">
                <Link to="/dashboard">
                    <div className="vlt-nav-content-logo">
                        <img src={vltLogo} alt="Valutti Logo" />
                    </div>
                </Link>

                <div className="vlt-nav-content-menu">
                    <ul>
                        <li>
                            Dashboard
                            <div className="vlt-menu-item-active" />
                        </li>
                        <li>Mercados</li>
                        <li>Carteiras</li>
                        <li>Valutti Premier</li>
                        <li>Ferramentas</li>
                        <li>Central de Ajuda</li>
                    </ul>
                </div>

                <div className="vlt-nav-content-userarea">
                    <div className="vlt-nav-divider" />

                    <div className="vlt-nav-content-user">
                        <img src={userIcon} alt="User icon"/>
                        <span>Olá Usuário</span>

                        <div className="vlt-nav-content-user-options">

                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export { VltNavbar };
