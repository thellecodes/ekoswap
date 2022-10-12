import React, { lazy, Suspense, useEffect, useState } from 'react';
import {
  ChakraProvider,
  useDisclosure,
  useToast
} from '@chakra-ui/react';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ethers } from 'ethers'
import { theme } from './chakra-utils/theme';
import { QueryClient, QueryClientProvider } from 'react-query'

/*Contexts*/
import { WalletContextProvider } from "./context/WalletContext"
import { RModalContextProvider } from './context/RModalContext';
import PageLoader from './components/PageLoader';

//contract abis
import FactoryAbi from "./contracts/core/UniswapV3Factory.sol/UniswapV3Factory.json"
import PeripheryAbi from "./contracts/periphery/SwapRouter.sol/SwapRouter.json"
import Create from './components/Pool/Create';
import Swap from "./components/Swap/Swap";
import Home from "./components/Home/Home";

const queryClient = new QueryClient();

function App() {
  const [isConnectable, setIsConnectable] = useState(false);
  const [isConnected, setIsConnected] = useState(false);
  const [account, setAccount] = useState("");
  const [provider, setProvider] = useState(null);
  const [signer, setSigner] = useState(null);
  const [ethAddress, setEthAddress] = useState("");
  const [listedTokens, setListedTokens] = useState(null);
  const [fromAddress, setFromAddress] = useState("");
  const [toAddress, setToAddress] = useState("");
  const [activeToken, setActiveToken] = useState(null);
  const [activeTokenImg, setActiveTokenImg] = useState(null);
  const [activeTokenAddress, setActiveTokenAddress] = useState(null);
  const [switchType, setSwitchType] = useState("");
  const [isToToken, setIsToToken] = useState("");
  const [isFromToken, setIsFromToken] = useState("");
  const [isFromTokenImg, setIsFromTokenImg] = useState("");
  const [isToTokenImg, setIsToTokenImg] = useState("");
  const [isFromTokenAddress, setIsFromTokenAddress] = useState("");
  const [isToTokenAddresss, setIsToTokenAddress] = useState("");
  const toast = useToast();

  // EkoToken Contract Address 0xCf7Ed3AccA5a467e9e704C703E8D87F634fB0Fc9
  // Token1 Contract Address 0xDc64a140Aa3E981100a9becA4E685f962f0cF6C9
  // WETH9 Contract Address 0x5FC8d32690cc91D4c39d9d3abcBD16989F875707

  // Uniswap Factory Contract Address 0x0165878A594ca255338adfa4d48449f69242Eb8F
  const UniswapV3FactoryContractAddress = `0x0165878A594ca255338adfa4d48449f69242Eb8F`;

  // Uniswap periphery Contract Address 0x2279B7A0a67DB372996a5FaB50D91eAA73d2eBe6
  const UniswapV3PeripheryAddress = `0x2279B7A0a67DB372996a5FaB50D91eAA73d2eBe6`;

  const {
    isOpen: isRModalOpen,
    onOpen: openRModal,
    onClose: closeRModal,
  } = useDisclosure();

  useEffect(() => {
    if (switchType && switchType != null && switchType === "from") {
      setIsFromToken(activeToken);
      setIsFromTokenImg(activeTokenImg);
    }

    if (switchType && switchType != null && switchType === "to") {
      setIsToToken(activeToken);
      setIsToTokenImg(activeTokenImg);
    }
  }, [activeToken])

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
  }, []);

  const UniswapV3FactoryContract = new ethers.Contract(
    UniswapV3FactoryContractAddress,
    FactoryAbi.abi,
    signer
  );

  const UniswapV3PeripheryContract = new ethers.Contract(
    UniswapV3PeripheryAddress,
    PeripheryAbi.abi,
    signer
  );

  return (
    <ChakraProvider {...{ theme }}>
      <WalletContextProvider value={{
        isConnectable,
        account,
        provider,
        signer,
        ethAddress,
        onConnect,
        UniswapV3FactoryContract,
        UniswapV3PeripheryContract,
        listedTokens,
        setListedTokens,
        isRModalOpen,
        openRModal,
        closeRModal,
        fromAddress,
        toAddress,
        setFromAddress,
        setToAddress,
        setSwitchType,
        switchType,
        activeToken,
        setActiveToken,
        isFromToken,
        isToToken,
        activeTokenImg,
        activeTokenAddress,
        setActiveTokenImg,
        setActiveTokenAddress,
        isFromTokenImg,
        isToTokenImg,
        isFromTokenAddress,
        isToTokenAddresss,
        setIsFromTokenAddress,
        setIsToTokenAddress,
        setIsFromToken,
        setIsFromTokenImg,
        setIsToToken,
        setIsToTokenImg
      }}>

        <QueryClientProvider client={queryClient}>
          <RModalContextProvider value={{ isRModalOpen, openRModal, closeRModal }} >
            <Router>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/swap" element={<Swap />} />
                <Route path="/info"
                  element={
                    <Suspense fallback={<PageLoader />}>
                      {React.createElement(lazy(() => import('./components/Position/Info')))}
                    </Suspense>
                  }
                />
                <Route path="/pool/create" element={<Create />} />
                <Route path="/pool/increase" />
              </Routes>
            </Router>
          </RModalContextProvider>
        </QueryClientProvider>
      </WalletContextProvider>
    </ChakraProvider >
  );
}

export default App;
