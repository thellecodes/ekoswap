import { createContext } from "react";

const WalletContext = createContext({
    name: "samuel"
});

const WalletContextProvider = ({ value, children }) => {
    return (
        <WalletContext.Provider value={{ ...value }}>{children}</WalletContext.Provider>
    )
}

export { WalletContext, WalletContextProvider };