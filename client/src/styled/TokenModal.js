import React, { useContext, useEffect, useState } from 'react';
import {
    Box,
    Text,
    UnorderedList,
    ListItem,
    Flex,
    Avatar,
    Input
} from "@chakra-ui/react"
import { WalletContext } from '../context/WalletContext';

const TokenModal = () => {
    const [tokens, setTokens] = useState(null);
    const { listedTokens } = useContext(WalletContext);

    useEffect(() => {
        if (listedTokens) {
            const { data } = listedTokens;
            let allTokens = data.tokens;
            setTokens(allTokens);
        }
    }, [])

    return (
        <Box>
            <Box mb="20px">
                <Input
                    placeholder='Search Tokens...'
                    boxShadow={"unset"}
                    _focus={{
                        shadow: 'unset'
                    }}
                />
            </Box>
            <Box height={"300px"} overflowY="scroll">
                <UnorderedList listStyleType={"none"}>
                    {tokens ? tokens.map(({ address, symbol, logoURI }, key) => (
                        <ListItem cursor={"pointer"}
                            {...{ key }}>
                            <Flex alignItems={"center"}>
                                <Avatar
                                    size="xs"
                                    name='Token Name'
                                    src={logoURI}
                                />
                                <Text mb="1.5" ml="2" fontWeight={"medium"}> {symbol} </Text>
                            </Flex>
                        </ListItem>
                    )) : null}
                </UnorderedList>
            </Box>

        </Box>
    )
}

export default TokenModal;
