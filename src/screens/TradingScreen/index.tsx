import * as React from 'react';
import { VltMyWallet } from '../../components/VltMyWallet';

function TradingScreen() {
    return (
        <div style={{
            width: "100vw",
            height: "auto"
        }}>
            <VltMyWallet style={{width: "100%"}}/>
        </div>
    )
}

export {
    TradingScreen,
};
