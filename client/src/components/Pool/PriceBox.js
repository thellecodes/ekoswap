import React, { useContext, useEffect, useReducer, useState } from "react";
import { Box, Flex, Text, Avatar, Button, Input } from "@chakra-ui/react";
import { WalletContext } from "../../context/WalletContext";

const PriceBox = ({
    img,
    action,
    token,
    callback,
    onblur,
    onchange,
    defaultvalue,
    ...props }) => {
    const { openRModal } = useContext(WalletContext);

    return (<Box
        position={"absolute"}
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
                                src={img}
                            />}
                        size="sm"
                        colorScheme='teal'
                        onClick={() => {
                            openRModal()
                            callback(action)
                        }}
                    >
                        <Text color="ekoswap.secondary" size={"sm"}>{token}</Text>
                    </Button>
                </Flex>
                <Box>
                    <Input
                        border={"none"}
                        boxShadow="none"
                        textAlign={"end"}
                        _focus={{ boxShadow: "none" }}
                        color="black"
                        fontWeight={"bold"}
                        placeholder={"0"}
                        padding={"unset"}
                        onBlur={onblur}
                        type="text"
                        onChange={onchange}
                        defaultValue={defaultvalue}
                        value={defaultvalue}
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