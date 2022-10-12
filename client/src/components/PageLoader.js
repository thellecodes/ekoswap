import { Flex, Spinner } from '@chakra-ui/react';
import { useQuery } from 'react-query'
import axios from 'axios';
import { useContext, useEffect } from 'react';
import { WalletContext } from '../context/WalletContext';

const PageLoader = () => {
    const { setListedTokens } = useContext(WalletContext);

    // // fetch listed tokens
    // const tokensFetchPoint = `https://tokens.coingecko.com/uniswap/all.json`;

    // const { data } = useQuery('tokens', () =>
    //     axios.get(`${tokensFetchPoint}`)
    // );

    // useEffect(() => {
    //     setListedTokens(data);
    // }, [])

    return (
        <Flex justify='center' align='center' w='full' h='100vh'>
            <Spinner
                mt='10ch'
                speed='0.75s'
                emptyColor='theme.dark.500'
                color='ekoswap.secondary'
                size='xl'
                thickness='3px'
            />
        </Flex>
    );
};

export default PageLoader;
