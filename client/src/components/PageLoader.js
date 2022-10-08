import { Flex, Spinner } from '@chakra-ui/react';

const PageLoader = () => {
    return (
        <Flex justify='center' align='center' w='full' h='100vh'>
            <Spinner
                mt='10ch'
                speed='0.75s'
                emptyColor='theme.dark.500'
                color='ekoswap.secondary'
                size='xl'
                thickness='5px'
            />
        </Flex>
    );
};

export default PageLoader;
