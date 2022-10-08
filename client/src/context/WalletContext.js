import { createContext, useState } from "react";
import { useToast } from "@chakra-ui/react";
import { ethers } from 'ethers'

const WalletContext = createContext({
    provider: null,
    signer: null,
    contract: null,
    account: null,
    signer: null,
});

const WalletContextProvider = ({ value, children }) => {
    const [account, setAccount] = useState("");
    const [provider, setProvider] = useState(null);
    const [signer, setSigner] = useState(null);
    const [ethAddress, setEthAddress] = useState("");
    const toast = useToast();

    const onConnect = async () => {
        const localProvider = new ethers.providers.Web3Provider(window.ethereum);

        if (typeof window.ethereum != "object") {
            toast({
                title: 'Download Wallet',
                description: "Install E-Wallet to Continue",
                status: 'error',
                duration: 3000,
                isClosable: true,
                variant: 'solid',
                position: 'top-right',
            });
        } else {

            const localSigner = localProvider.getSigner();
            const isMetaMaskConnected = await window.ethereum.request({
                method: "eth_accounts",
            });

            localProvider
                .send('eth_requestAccounts', [])
                .then((accounts) => setAccount[accounts[0]]);

            // remove existing address if wallet is not connected to browser
            if (isMetaMaskConnected.length < 1) {
                localProvider.send("eth_requestAccounts", []).then((accounts) => {
                    localStorage.setItem("ethAddress", accounts[0]);
                    setEthAddress(accounts[0]);
                    setProvider(localProvider);
                    setSigner(localSigner);
                });
            }
            else {
                localProvider
                    .send('eth_requestAccounts', [])
                    .then((accounts) => {
                        setAccount(accounts[0])
                        localStorage.setItem("ethAddress", accounts[0]);
                    });
                setProvider(localProvider);
                setSigner(localSigner);
                setEthAddress(account)
            }
        }
    }

    return (
        <WalletContext.Provider value={{
            ...value,
            onConnect,
            signer,
            contract: null,
            ethAddress,
            account,
            provider,
        }}>
            {children}
        </WalletContext.Provider>
    )
}

export { WalletContext, WalletContextProvider };