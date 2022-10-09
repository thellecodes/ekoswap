import { createContext, useState } from "react";

const WalletContext = createContext({
    provider: null,
    signer: null,
    contract: null,
    account: null,
    signer: null,
    setProvider: null,
    setSigner: null,
    setEthAddress: null,
    setAccount: null,
    ethAddress: null
});

const WalletContextProvider = ({ value, children }) => {
    return (<WalletContext.Provider value={{ ...value, }}>
        {children}
    </WalletContext.Provider>
    )
}

export { WalletContext, WalletContextProvider };