import React, { useEffect } from "react";
import { FixedSizeList as List } from "react-window";
import InfiniteLoader from "react-window-infinite-loader";
import AutoSizer from "react-virtualized-auto-sizer"
import {
    Box,
    Input,
    Text,
    Avatar,
    Flex,
    Button
} from "@chakra-ui/react"

const Row = ({ data, index, style, setToken, closeModalPop }) => {
    const { logoURI, name } = data[index]

    return (
        <Flex {...{ style }} alignItems={"center"} cursor="pointer" mb={"2"}>

            <Avatar
                size="xs"
                name='Token Name'
                src={logoURI}
            />
            <Button onClick={() => {
                closeModalPop()
                setToken(data[index])
            }} ml="3" bg="none" padding={"2"} border="none"
                _active={{
                    bg: "unset"
                }}
            >
                <Text mb="1.5" mt="2" fontWeight={"medium"} alignItems="center">{name}</Text>
            </Button>
        </Flex>
    );
}

const TokenModal = ({ tokens, setToken, closeModalPop }) => {

    return (
        <Box height={300} overflow="hidden">
            <Box mb="20px">
                <Input
                    placeholder='Search Tokens...'
                    boxShadow={"unset"}
                    _focus={{
                        shadow: 'unset'
                    }}
                />
            </Box>
            {tokens && tokens.length > 0 ?
                <AutoSizer>
                    {({ width }) => (
                        <InfiniteLoader
                            itemCount={tokens.length}
                            isItemLoaded={() => null}
                            loadMoreItems={() => null}
                        >
                            {({ onItemsRendered, ref }) => (
                                <>
                                    <List
                                        className="List"
                                        height={200}
                                        width={width}
                                        itemCount={tokens.length}
                                        itemSize={40}
                                        itemData={tokens}
                                        onItemsRendered={onItemsRendered}
                                        ref={ref}
                                    >
                                        {({ data, index, style }) => <Row {...{ data, index, style, setToken, closeModalPop }} />}
                                    </List>
                                </>
                            )}
                        </InfiniteLoader>
                    )}
                </AutoSizer>
                : null}
        </Box>
    );
}


export default TokenModal;
