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
    closeRModal: null,
    fromAddress: null,
    toAddress: null,
    setFromAddress: null,
    setToAddress: null,
    setSwitchType: null,
    switchType: null,
    activeToken: null,
    setActiveToken: null,
    isFromToken: null,
    isToToken: null,
    setIsFromToken: null,
    isFromTokenImg: null,
    isToTokenImg: null,
    setIsToTokenImg: null,
    setIsFromTokenImg: null,
    isFromTokenAddress: null,
    isToTokenAddresss: null,
    setIsFromTokenAddress: null,
    setIsToTokenAddress: null,
    setIsToToken: null,
    activeTokenAddress: null,
    setActiveTokenAddress: null,
    activeTokenImg: null,
    setActiveTokenImg: null,
    isFromTokenDecimal: null,
    isToTokenDecimal: null,
    setIsFromTokenDecimal: null,
    setIsToTokenDecimal: null,
    UniswapV2FactoryContract: null,
    UniswapV2PeripheryContract: null,
    ekoTokenAddress: null,
    token1Address: null,
    WETH9Address: null,
    ETHAddress: null,
    USDTAddress: null,
    USDCAddress: null,
    DAIAddress: null,
    AAVEAddress: null,
    EkodexAddress: null,
    EkodexContract: null
});

const WalletContextProvider = ({ value, children }) => {
    return (<WalletContext.Provider value={{ ...value }}>
        {children}
    </WalletContext.Provider>
    )
}

export { WalletContext, WalletContextProvider };