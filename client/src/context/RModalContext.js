import { createContext } from "react";

const RModalContext = createContext({});

const RModalContextProvider = ({ value, children }) => {
    return <RModalContext.Provider value={{ ...value }}>
        {children}
    </RModalContext.Provider>
}

export { RModalContext, RModalContextProvider }