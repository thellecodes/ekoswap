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
  const [isFromTokenDecimal, setIsFromTokenDecimal] = useState("");
  const [isToTokenDecimal, setIsToTokenDecimal] = useState("");
  const toast = useToast();

  const UniswapV3FactoryContractAddress = `0x2f95117796a59f06d429C732a61A129ec74C7E51`;
  const SwapRouterContractAddress = `0xed79A395B066990f36e162c311BB24E9c9E834c5`;
  const nonFungiblePositionManagerContractAddress = ``;
  const ekoTokenAddress = `0x2Bed0a7F2F227FE901D5e2bf2d5E73bfe6C09b3C`;
  const token1Address = `0xA80e52044311BCA5BEDC5A3462374f9A5aD87c43`;
  const WETH9Address = `0x9E106a9eaF162aa1d8A8718b0192202D48C98E8d`;
  const ETHAddress = `0xe700b2c6184583c7e8863970dd128d680f751a09`;
  const USDTAddress = `0xC2C527C0CACF457746Bd31B2a698Fe89de2b6d49`;
  const USDCAddress = `0xa2025b15a1757311bfd68cb14eaefcc237af5b43`;
  const DAIAddress = `0xDF1742fE5b0bFc12331D8EAec6b478DfDbD31464`;
  const AAVEAddress = `0x63242B9Bd3C22f18706d5c4E627B4735973f1f07`;

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

  // const UniswapV3FactoryContract = new ethers.Contract(
  //   UniswapV3FactoryContractAddress,
  //   FactoryAbi.abi,
  //   signer
  // );

  // const UniswapV3PeripheryContract = new ethers.Contract(
  //   UniswapV3PeripheryAddress,
  //   PeripheryAbi.abi,
  //   signer
  // );

  return (
    <ChakraProvider {...{ theme }}>
      <WalletContextProvider value={{
        isConnectable,
        account,
        provider,
        signer,
        ethAddress,
        onConnect,
        UniswapV3FactoryContract: null,
        UniswapV3PeripheryContract: null,
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
        setIsToTokenImg,
        isFromTokenDecimal,
        isToTokenDecimal,
        setIsFromTokenDecimal,
        setIsToTokenDecimal,
        ekoTokenAddress,
        token1Address,
        WETH9Address,
        ETHAddress,
        USDCAddress,
        USDTAddress,
        DAIAddress,
        AAVEAddress
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
