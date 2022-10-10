import { createContext } from "react";

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
    ethAddress: null,
    tokens: null,
    listedTokens: null,
    setListedTokens: null,
    isRModalOpen: null,
    openRModal: null,
    closeRModal: null
});

const WalletContextProvider = ({ value, children }) => {


    return (<WalletContext.Provider value={{ ...value }}>
        {children}
    </WalletContext.Provider>
    )
}

export { WalletContext, WalletContextProvider };