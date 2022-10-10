import {
    Box,
    Flex,
    Text,
    AvatarGroup,
    Avatar,
    Button,
} from "@chakra-ui/react";
import { useContext, useEffect, useState } from "react";
import { WalletContext } from "../../context/WalletContext";
import NavBar from "../Home/NavBar";
import PriceBox from "./PriceBox";

const Create = () => {
    const {
        UniswapV3FactoryContract,
        UniswapV3PeripheryContract,
        listedTokens
    } = useContext(WalletContext);
    const [tokens, setTokens] = useState(null);

    // const getWalletDetails = async () => {
    //     const config = {
    //         apiKey: "3EX4KTEQy3RZlqHscYjlGD8iG7J6MA7D",
    //         network: Network.ETH_MAINNET,
    //     };

    //     const alchemy = new Alchemy(config);

    //     //Feel free to switch this wallet address with another address
    //     const ownerAddress = "0x00000000219ab540356cbb839cbe05303d7705fa";

    //     //The below token contract address corresponds to USDT
    //     const tokenContractAddresses = ["0xdAC17F958D2ee523a2206206994597C13D831ec7"];

    //     const data = await alchemy.core.getTokenBalances(
    //         ownerAddress,
    //         tokenContractAddresses
    //     );
    // }

    useEffect(() => {
        // getWalletDetails();
        if (listedTokens) {
            const { data } = listedTokens
            setTokens(data.tokens);
        }
    }, [])


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

                <Flex alignItems="center" justifyContent="space-between">
                    <Flex alignItems={"center"}>
                        <AvatarGroup size='sm' max={2} border="unset">
                            <Avatar name='Eko' bg="ekoswap.silver" src='/assets/eko.png' border="unset" />
                            <Avatar name='ETH' bg="ekoswap.silver" src='/assets/eth.png' border="unset" />
                        </AvatarGroup>

                        <Flex ml="1rem" fontWeight={"bold"}><Text color="ekoswap.secondary" mr="0.2rem">EKO</Text> - <Text ml="0.2rem">ETH</Text></Flex>
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
                            {...{ tokens }}
                            top={"0%"}
                            translateX="0%"
                            token={"Eko"}
                            img="eko.png"
                        />

                        {/* <Box position={"absolute"}
                            top="43%"
                            width={"100%"}
                        >
                            <Text textAlign={"center"}>Flip</Text>
                        </Box> */}

                        <PriceBox
                            {...{ tokens }}
                            token={"ETH"}
                            bottom={"0%"}
                            img="eth.png"
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
                    >Transact</Button>
                </Flex>
            </Box>
        </Box>
    )
}

export default Create;