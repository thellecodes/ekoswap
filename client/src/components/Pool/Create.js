import React, { useContext, useEffect, useState } from "react";
import {
    Box,
    Flex,
    Text,
    AvatarGroup,
    Avatar,
    Button,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalCloseButton,
    ModalBody,
    useToast
} from "@chakra-ui/react";
import { WalletContext } from "../../context/WalletContext";
import TokenModal from "../../styled/TokenModal";
import NavBar from "../Home/NavBar";
import PriceBox from "./PriceBox";
import axios from 'axios';
import { useQuery } from 'react-query';
import qs from 'qs';

const Create = () => {
    const {
        isRModalOpen,
        closeRModal,
        setFromAddress,
        setToAddress,
        setSwitchType,
        isToToken,
        isFromToken,
        setActiveToken,
        setActiveTokenAddress,
        setActiveTokenImg,
        isFromTokenImg,
        isToTokenImg,
        setListedTokens,
        setIsFromToken,
        setIsFromTokenImg,
        setIsToTokenImg,
        setIsToToken,
        isToTokenAddresss,
        isFromTokenAddress,
        setIsFromTokenAddress,
        setIsToTokenAddress,
        isFromTokenDecimal,
        isToTokenDecimal,
        setIsFromTokenDecimal,
        setIsToTokenDecimal,
        account,
        UniswapV3FactoryContract,
        ekoTokenAddress,
        WETH9Address,
        ETHAddress
    } = useContext(WalletContext);
    const toast = useToast();

    const [tokens, setTokens] = useState(null);
    const [fromValue, setFromInputValue] = useState("0");
    const [toValue, setToInputValue] = useState("0");

    const closeModal = () => {
        closeRModal();
        setFromAddress("");
        setToAddress("");
    }

    async function getPrice() {
        const params = {
            sellToken: isFromTokenAddress,
            buyToken: isToTokenAddresss,
            sellAmount: Number(fromValue * 10 ** isFromTokenDecimal),
            account
        }

        const quotePoint = `https://api.0x.org/swap/v1/quote?${qs.stringify(params)}`;

        if (fromValue > 0) {
            // Fetch the swap price.
            const res = await fetch(`${quotePoint}`);
            const swapQuoteJSON = await res.json();

            const conversion = Number(swapQuoteJSON.buyAmount / (10 ** isToTokenDecimal));
            setToInputValue(conversion);
        }
    }

    // const getWalletDetails = async () => {
    //     const config = {
    //         apiKey: "3EX4KTEQy3RZlqHscYjlGD8iG7J6MA7D",
    //         network: Network.ETH_MAINNET,
    //     };

    //     const alchemy = new Alchemy(config);

    //Feel free to switch this wallet address with another address
    //     const ownerAddress = "0x00000000219ab540356cbb839cbe05303d7705fa";

    //The below token contract address corresponds to USDT
    //     const tokenContractAddresses = ["0xdAC17F958D2ee523a2206206994597C13D831ec7"];

    //     const data = await alchemy.core.getTokenBalances(
    //         ownerAddress,
    //         tokenContractAddresses
    //     );
    // }

    const tokensFetchPoint = `https://tokens.coingecko.com/uniswap/all.json`;
    const { data, isLoading, error } = useQuery('paths', () =>
        axios.get(`${tokensFetchPoint}`)
    );

    useEffect(() => {
        // getWalletDetails();
        setListedTokens(data?.data)
        setTokens(data?.data?.tokens)

        if (data && data.data) {
            if (data.data.tokens.length > 0) {

                const fromToken = data.data.tokens[0];
                const toToken = data.data.tokens[1];

                //image and symbol
                setIsFromToken(fromToken.symbol)
                setIsFromTokenImg(fromToken.logoURI);

                setIsToToken(toToken.symbol);
                setIsToTokenImg(toToken.logoURI);

                //set contract addresses
                setIsFromTokenAddress("0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2");
                setIsToTokenAddress("0x6b175474e89094c44da98b954eedeac495271d0f");

                //set token decimals
                setIsFromTokenDecimal(fromToken.decimals)
                setIsToTokenDecimal(toToken.decimals);
            }
        }
    }, [data])

    // const items = new Array(1000).fill().map((value, index) => ({
    //     id: index,
    //     name: faker.name.firstName(5),
    //     body: faker.lorem.paragraph(8),
    // }));

    const [token, setToken] = useState("");
    const closeModalPop = () => closeRModal();

    useEffect(() => {
        if (token && token != null) {
            const { symbol, address, logoURI } = token
            setActiveToken(symbol)
            setActiveTokenAddress(address);
            setActiveTokenImg(logoURI)
        }
    }, [token])

    const onCreate = async () => {
        const createPool = await UniswapV3FactoryContract.createPool(`${ekoTokenAddress}`, `${ETHAddress}`);
        const trx = await createPool.wait();

        console.log(trx);

        toast({
            title: 'Pool Created',
            description: "Pair Pool has been created",
            status: 'success',
            duration: 3000,
            variant: 'solid',
            position: 'top-right',
        });
    }

    return (
        <Box>
            <NavBar />
            <Box
                mt={{ base: "10rem", md: "9rem" }}
                mx={{ base: "1rem", md: "auto" }}
                px={{ base: '1rem', md: '1.5rem' }}
                py={{ base: '1rem', md: '1.5rem' }}
                maxW="600px"
                borderRadius={{
                    base: "7px",
                    md: "15px"
                }}
                bg="white"
            >
                <Text align={"end"} color="ekoswap.secondary" mb="3" fontWeight={"bold"}> Create Pool</Text>
                {isLoading && !error ? <Text>Loading...</Text> : null}

                {!error && !isLoading ?
                    <>
                        <Flex alignItems="center" justifyContent="space-between">
                            <Flex alignItems={"center"}>
                                <AvatarGroup size='sm' max={2} border="unset">
                                    <Avatar name='Eko' bg="ekoswap.silver" src={isFromTokenImg} border="unset" />
                                    <Avatar name='ETH' bg="ekoswap.silver" src={isToTokenImg} border="unset" />
                                </AvatarGroup>

                                <Flex ml="1rem" fontWeight={"bold"}>
                                    <Text color="ekoswap.secondary" mr="0.2rem">{isFromToken}</Text> -
                                    <Text ml="0.2rem">{isToToken}</Text></Flex>
                            </Flex>

                            <Text fontSize="0.8rem" fontWeight={"bold"}>0.3% free tier</Text>
                        </Flex>

                        <Flex my={"1rem"} direction={"column"}>
                            <Text align={"end"} color="ekoswap.secondary" mb="0.5rem" fontWeight={"bold"}> Deposit Amounts</Text>
                            <Box
                                height={{ base: "180px", md: "200px" }}
                                position="relative"
                            >
                                <PriceBox
                                    top={"0%"}
                                    translateX="0%"
                                    token={isFromToken}
                                    img={isFromTokenImg}
                                    action={"from"}
                                    callback={() => setSwitchType("from")}
                                    onblur={getPrice}
                                    onchange={e => setFromInputValue(e.target.value)}
                                    defaultvalue={fromValue}
                                />

                                {/* <Box position={"absolute"}
                            top="43%"
                            width={"100%"}
                        >
                            <Text textAlign={"center"}>Flip</Text>
                        </Box> */}

                                <PriceBox
                                    defaultvalue={`${toValue}`}
                                    token={isToToken}
                                    bottom={"0%"}
                                    img={isToTokenImg}
                                    action={"to"}
                                    callback={() => setSwitchType("to")}
                                    onchange={e => setToInputValue(e.target.value)}
                                />

                            </Box>
                        </Flex>

                        <Flex alignItems={"center"} justifyContent="center" mt="2rem">
                            <Button
                                width={"300px"}
                                maxW={"366px"}
                                bg="ekoswap.btnGrad2" color="white"
                                _hover={{ bg: "ekoswap.btnGrad2" }}
                                _active={{ bg: "ekoswap.btnGrad2" }}
                                onClick={onCreate}
                            >Transact</Button>
                        </Flex>
                    </> : <Text>Feeds Faild to Load</Text>}
            </Box>


            <Modal isOpen={isRModalOpen} onClose={closeModal}>
                <ModalOverlay />
                <ModalContent
                    mx={{ base: "1.2rem", md: "0.5rem" }}
                    mt={{ base: "6rem", md: "10rem" }}
                >
                    <ModalHeader>
                        <Text fontSize={"xs"}>Select a token</Text>
                    </ModalHeader>
                    <ModalCloseButton />

                    <ModalBody>
                        <TokenModal {...{ tokens, setToken, closeModalPop }} />
                    </ModalBody>

                </ModalContent>
            </Modal>
        </Box>
    )
}

export default Create;