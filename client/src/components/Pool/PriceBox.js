import { Box, Flex, Text, AvatarGroup, Avatar, Button, Input } from "@chakra-ui/react";
import { RiArrowDropDownLine } from 'react-icons/ri';

const PriceBox = ({ token, img, ...props }) => {


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
                <Flex bg="#DFDEFA"
                    px={"8px"}
                    py={"3px"}
                    borderRadius="0.3rem"
                    cursor={"pointer"}
                    alignItems="center"
                ><Avatar name='Eko' bg="ekoswap.silver" size="xs" src={`/assets/${img}`} border="unset" />
                    <Text ml="0.5rem" color="ekoswap.secondary" fontWeight={"bold"}>{token}</Text>
                    <Box ml="1rem" color="white" fontWeight={"bold"}> <RiArrowDropDownLine /> </Box>
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