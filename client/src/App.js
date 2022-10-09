import React, { lazy, Suspense, useEffect, useState } from 'react';
import {
  ChakraProvider,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  Text,
  useToast
} from '@chakra-ui/react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ethers } from 'ethers'
import { theme } from './chakra-utils/theme';

/*Contexts*/
import { WalletContextProvider } from "./context/WalletContext"
import { RModalContextProvider } from './context/RModalContext';
import PageLoader from './components/PageLoader';

function App() {
  const [isConnectable, setIsConnectable] = useState(false);
  const [isConnected, setIsConnected] = useState(false);
  const [account, setAccount] = useState("");
  const [provider, setProvider] = useState(null);
  const [signer, setSigner] = useState(null);
  const [ethAddress, setEthAddress] = useState("");
  const toast = useToast();

  const {
    isOpen: isRModalOpen,
    onOpen: openRModal,
    onClose: closeRModal,
  } = useDisclosure();

  const onConnect = async () => {
    if (!window.ethereum)
      return toast({
        title: 'Download Wallet',
        description: "Install E-Wallet to Continue",
        status: 'error',
        duration: 3000,
        isClosable: true,
        variant: 'solid',
        position: 'top-right',
      });

    const localProvider = new ethers.providers.Web3Provider(window.ethereum);
    const localSigner = localProvider.getSigner();

    const isMetaMaskConnected = await window.ethereum.request({
      method: "eth_accounts",
    });

    // remove existing address if wallet is not connected to browser
    if (isMetaMaskConnected.length < 1) {
      localProvider.send("eth_requestAccounts", []).then((accounts) => {
        localStorage.setItem("ethAddress", accounts[0]);
        setAccount(accounts[0])
        setIsConnected(true);
      });
      setEthAddress(account);
      setProvider(localProvider);
      setSigner(localSigner);

    } else {
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

  const checkConnection = async () => {
    const localProvider = new ethers.providers.Web3Provider(window.ethereum);
    const localSigner = localProvider.getSigner();

    if (typeof window.ethereum != "object") {
      setIsConnectable(false);
    }

    const connectedWallets = await window.ethereum.request({
      method: "eth_accounts",
    });

    if (connectedWallets.length < 1) {
      localStorage.removeItem("ethAddress");
    } else {
      localProvider
        .send('eth_requestAccounts', [])
        .then((accounts) => {
          localStorage.setItem("ethAddress", accounts[0]);
          setAccount(accounts[0]);
        });
      setProvider(localProvider);
      setSigner(localSigner);
      setEthAddress(account);
      setIsConnectable(true);
    }
  }

  useEffect(() => {
    if (!window.ethereum)
      return setIsConnectable(false);

    //check for 
    checkConnection();
  }, [])

  useEffect(() => {
    if (!isConnected) return

    toast({
      title: 'Connected',
      description: "E-Wallet is connected",
      status: 'success',
      duration: 3000,
      variant: 'solid',
      position: 'top-right',
    });
  }, [isConnected])


  useEffect(() => {
    if (!window.ethereum) return;

    window.ethereum.on('accountsChanged', async () => {
      localStorage.removeItem("ethAddress");
      setAccount("");
      setEthAddress("");
      setSigner(null);
      setProvider(null);
      setIsConnected(false);

    });
  }, [])

  return (
    <ChakraProvider {...{ theme }}>
      <WalletContextProvider value={{
        isConnectable,
        account,
        provider,
        signer,
        ethAddress,
        onConnect
      }}>
        <RModalContextProvider value={{ isRModalOpen, openRModal, closeRModal }} >
          <Router>
            <Routes>
              <Route path="/"
                element={
                  <Suspense fallback={<PageLoader />}>
                    {React.createElement(lazy(() => import('./components/Home/Home')))}
                  </Suspense>
                }
              />
              <Route path="/swap"
                element={
                  <Suspense fallback={<PageLoader />}>
                    {React.createElement(lazy(() => import('./components/Swap/Swap')))}
                  </Suspense>
                }
              />
              <Route path="/info"
                element={
                  <Suspense fallback={<PageLoader />}>
                    {React.createElement(lazy(() => import('./components/Position/Info')))}
                  </Suspense>
                }
              />
              <Route path="/pool/create"
                element={
                  <Suspense fallback={<PageLoader />}>
                    {React.createElement(lazy(() => import('./components/Pool/Create')))}
                  </Suspense>
                }
              />
              <Route path="/pool/increase"
                element={
                  <Suspense fallback={<PageLoader />}>
                    {React.createElement(lazy(() => import('./components/Pool/Increase')))}
                  </Suspense>
                }
              />
            </Routes>
          </Router>

          <Modal isOpen={isRModalOpen} onClose={closeRModal}>
            <ModalOverlay />
            <ModalContent
              mx={{ base: "1.2rem", md: "0.5rem" }}
              mt={{ base: "6rem", md: "10rem" }}
            >
              <ModalHeader><Text fontSize={"xs"}>Select a token</Text></ModalHeader>

              <ModalCloseButton />
              <ModalBody>

              </ModalBody>

              <ModalFooter></ModalFooter>
            </ModalContent>
          </Modal>
        </RModalContextProvider>
      </WalletContextProvider>
    </ChakraProvider>
  );
}

export default App;
