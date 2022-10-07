import { Box, Grid, GridItem, Text, Flex, Image, Button } from "@chakra-ui/react"
import NavBar from "../Home/NavBar"
import TopHero from "../Home/TopHero"
import ThelleRound from "../../assets/thelleround.png"
import Link from "../../styled/Links"

const Info = () => {
    const d = ["M 0 0", "L100"]

    return (
        <Box paddingBottom={'50vh'}>
            <NavBar />
            <TopHero path={"home"} action="Increase Position Size" />

            <Box
                mt="15px"
                px={{ base: '1rem', md: '1rem' }}
                maxW="900px"
                mx="auto"
            >
                <Grid
                    gap="5"
                    gridTemplateColumns={{ base: 'auto', md: "1fr 1fr" }}
                >
                    <GridItem
                        px={{ base: "10px", md: "15px" }}
                        py={{ base: "10px", md: "15px" }}
                        bg="linear-gradient(153.84deg, #402C40 16.47%, #627EEA 93.35%);"
                        borderRadius="25px"
                    >
                        <Box
                            height={{ base: "350", md: "100%" }}
                            width={{ md: "100%" }}
                            borderRadius="15px"
                            bg="linear-gradient(153.84deg, #9B5BF5 16.47%, #FEF2AF 55.15%, #627EEA 93.35%)"
                            px={{ base: "12px", md: "18px" }}
                            py={{ base: "12px", md: "18px" }}
                        >
                            <Grid
                                borderRadius={{
                                    base: "10px",
                                    md: "20px"
                                }}
                                border='1px'
                                borderColor='white'
                                height={"100%"}
                                px={{ base: "10px", md: "15px" }}
                                py={{ base: "10px", md: "15px" }}
                                gridTemplateRows="1fr 50% 30%"
                            >
                                <GridItem>
                                    <Flex justifyContent={"space-between"}
                                        color="white" fontWeight={"bold"}
                                        fontSize="2xl"
                                    >
                                        <Text>UNI /WETH</Text>
                                        <Text>0.3%</Text>
                                    </Flex>
                                </GridItem>
                                <GridItem border={"1px"} borderColor="red">
                                    <svg strokeWidth={"5"}>
                                        <path d={d.join(" ")} color="red" />
                                    </svg>
                                </GridItem>
                                <GridItem pt="2">
                                    <Flex justifyContent={"space-between"}>
                                        <Flex direction={"column"}
                                            color="white"
                                            fontWeight={"bold"}>
                                            <Text fontWeight={"bold"}
                                                fontSize="xs"
                                                bg="#6C85E5"
                                                mb="1"
                                                py="0.5"
                                                px="1"
                                                borderRadius={"5px"}>ID: 2567</Text>
                                            <Text fontWeight={"bold"}
                                                fontSize="xs"
                                                bg="#6C85E5"
                                                mb="1"
                                                py="0.5"
                                                px="1"
                                                borderRadius={"5px"}
                                            >
                                                MIN TICK: -2567</Text>
                                            <Text fontWeight={"bold"}
                                                fontSize="xs"
                                                bg="#6C85E5"
                                                mb="1"
                                                py="0.5"
                                                px="1"
                                                borderRadius={"5px"}
                                            >
                                                MAX TICK: 2567</Text>
                                        </Flex>
                                        <Flex justifyContent={"flex-end"} direction={"column"}>
                                            <Box>
                                                <Image src={ThelleRound} alt="Thelle" />
                                            </Box>
                                        </Flex>
                                    </Flex>
                                </GridItem>
                            </Grid>

                        </Box>
                    </GridItem>
                    <GridItem>
                        <Grid
                            gridRow="auto"
                            gridAutoRows={"1fr"}
                            gap='2'
                        >
                            <GridItem>
                                <Flex
                                    width={{ md: "100%" }}
                                    bg="ekoswap.secondaryColor"
                                    borderRadius={{
                                        base: "10px",
                                        md: "20px"
                                    }}
                                    px={{ base: "10px", md: "15px" }}
                                    py={{ base: "10px", md: "15px" }}
                                    direction="column"
                                    justifyContent={"space-between"}
                                >
                                    <Box>
                                        <Text color={"white"} fontWeight={"bold"} mb="0.4">Liquidity</Text>
                                        <Text color={"white"} fontWeight={"bold"}>$5,700.42</Text>
                                    </Box>

                                    <Flex
                                        bg={"radial-gradient(99% 2299.32% at 7.5% 57.83%, #FEF2AE 0%, rgba(254, 242, 174, 0) 100%)"}
                                        mt="2"
                                        borderRadius={{ base: '5px', md: "10px" }}
                                        px={{ base: "10px", md: "8px" }}
                                        py={{ base: "10px", md: "8px" }}
                                        direction="column"
                                    >
                                        <Flex justifyContent={"space-between"}>
                                            <Flex alignItems={"center"}>
                                                <Image
                                                    cursor={'pointer'}
                                                    src={'/assets/eko.png'}
                                                    h="25px"
                                                    alt="Eko token"
                                                    mr="1.5"
                                                />
                                                <Text color={"#5A1DA3"} fontWeight={"bold"}>EKO</Text>
                                            </Flex>

                                            <Text color={"white"} fontWeight={"bold"}>200.7</Text>
                                        </Flex>

                                        <Flex justifyContent={"space-between"} mt="1">
                                            <Flex alignItems={"center"}>
                                                <Image
                                                    cursor={'pointer'}
                                                    src={'/assets/eth.png'}
                                                    h="25px"
                                                    alt="Eth"
                                                    mr="1.5"
                                                />
                                                <Text color={"#5A1DA3"} fontWeight={"bold"}>ETH</Text>
                                            </Flex>

                                            <Text color={"white"} fontWeight={"bold"}>200.7</Text>
                                        </Flex>
                                    </Flex>


                                </Flex>

                                <Box
                                    mt="5"
                                    width={{ md: "100%" }}
                                    bg="ekoswap.secondaryColor"
                                    borderRadius={{
                                        base: "10px",
                                        md: "20px"
                                    }}
                                    px={{ base: "10px", md: "15px" }}
                                    py={{ base: "10px", md: "15px" }}

                                // height="250px"
                                >
                                    <Box>
                                        <Text color={"white"} fontWeight={"bold"} mb="0.4">Unclaimed Fees</Text>

                                        <Flex bg={"radial-gradient(99% 2299.32% at 7.5% 57.83%, #FEF2AE 0%, rgba(254, 242, 174, 0) 100%)"}
                                            mt="2"
                                            borderRadius={{ base: '2px', md: "10px" }}
                                            px={{ base: "5px", md: "8px" }}
                                            py={{ base: "5px", md: "8px" }}
                                            direction="column"
                                        >

                                            <Flex justifyContent={"space-between"} mt="1">
                                                <Flex alignItems={"center"}>
                                                    <Text color={"#5A1DA3"} fontWeight={"bold"} fontSize="2xl">$98.2</Text>
                                                </Flex>

                                                <Button
                                                    _hover={{ bg: "ekoswap.btnGrad1" }}
                                                    shadow="unset"
                                                    outline={"unset"}
                                                    _active={{ bg: "ekoswap.btnGrad1" }}
                                                    bg="ekoswap.btnGrad1"
                                                >
                                                    <Text color={"white"} fontWeight={"bold"}>Claim</Text>
                                                </Button>
                                            </Flex>

                                            <Flex
                                                bg="#C1C3BE"
                                                mt="2"
                                                borderRadius={{ base: '5px', md: "10px" }}
                                                direction="column"
                                                px={{ base: "10px", md: "15px" }}
                                                py={{ base: "10px", md: "15px" }}
                                            >
                                                <Flex justifyContent={"space-between"}>
                                                    <Flex alignItems={"center"}>
                                                        <Image
                                                            cursor={'pointer'}
                                                            src={'/assets/eko.png'}
                                                            h="25px"
                                                            alt="Eko token"
                                                            mr="1.5"
                                                        />
                                                        <Text color={"#5A1DA3"} fontWeight={"bold"}>EKO</Text>
                                                    </Flex>

                                                    <Text color={"white"} fontWeight={"bold"}>200.7</Text>
                                                </Flex>

                                                <Flex justifyContent={"space-between"} mt="1">
                                                    <Flex alignItems={"center"}>
                                                        <Image
                                                            cursor={'pointer'}
                                                            src={'/assets/eth.png'}
                                                            h="25px"
                                                            alt="Eth"
                                                            mr="1.5"
                                                        />
                                                        <Text color={"#5A1DA3"} fontWeight={"bold"}>ETH</Text>
                                                    </Flex>

                                                    <Text color={"white"} fontWeight={"bold"}>200.7</Text>
                                                </Flex>
                                            </Flex>
                                        </Flex>

                                        <Button bg="none" outline={"none"} shadow="none" mt="0.5" _hover={{
                                            bg: "none"
                                        }}
                                            _active={{ bg: "none" }}>
                                            <Text color={"white"} fontWeight="bold" fontSize={"sm"}>Collect as WETH</Text>
                                        </Button>
                                    </Box>
                                </Box>
                            </GridItem>

                        </Grid>
                    </GridItem>
                </Grid >
            </Box >
        </Box >
    )
}

export default Info