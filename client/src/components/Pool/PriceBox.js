import { Box, Flex, Text, Avatar, Button, Input } from "@chakra-ui/react";
import { useContext } from "react";
import { WalletContext } from "../../context/WalletContext";

const PriceBox = ({ token, img, ...props }) => {

    const { openRModal } = useContext(WalletContext);

    return (<Box position={"absolute"}
        {...props}
        borderWidth={"2px"}
        border="1px solid #A6A9CA"
        width={"100%"}
        px={"0.5rem"}
        borderRadius="6px"
        boxSizing="border-box"
    >
        <Flex direction={"column"}>
            <Flex alignItems={"center"} justifyContent="space-between">
                <Flex alignItems="center">
                    <Button
                        _hover={"unset"}
                        _focus="unset"
                        cursor={"pointer"}
                        bg="#DFDEFA"
                        leftIcon={
                            <Avatar
                                size="xs"
                                name='Token Name'
                                src='https://assets.coingecko.com/coins/images/14564/thumb/Delta_logo.png'
                            />}
                        size="sm"
                        colorScheme='teal'
                        onClick={openRModal}
                    >
                        <Text color="ekoswap.secondary" size={"sm"}>ETH</Text>
                    </Button>
                </Flex>
                <Box>
                    <Input
                        border={"none"}
                        boxShadow="none"
                        textAlign={"end"}
                        _focus={{ boxShadow: "none" }}
                        defaultValue="$30.22"
                        color="black"
                        fontWeight={"bold"}
                        placeholder="$30.22"
                        padding={"unset"}
                    />
                </Box>
            </Flex>
            <Flex alignItems={"center"} justifyContent="space-between" mt="-0.8rem">
                <Flex alignItems={"center"} fontSize="xs"><Text fontSize={"16px"}>In Wallet: 0</Text>
                    <Button border={"unset"}
                        _hover={"unset"}
                        fontSize="16px"
                        _active="unset"
                        background={"unset"}
                    ><Text fontSize={"xs"} color="ekoswap.secondary">(Max) </Text></Button></Flex>

                <Box>
                    <Text fontWeight={"medium"} fontSize="xs">$0.22</Text>
                </Box>
            </Flex>
        </Flex>
    </Box >)
}

export default PriceBox