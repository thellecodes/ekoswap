import { useContext, useEffect } from 'react';
import {
  Flex,
  Image,
  Text,
  Box,
  Avatar,
  Button,
  useToast
} from '@chakra-ui/react';
import { ExternalLink, InternalLink } from "../../styled/Links"
import { WalletContext } from '../../context/WalletContext';
import { useQuery } from 'react-query'
import axios from 'axios';

const NavBar = () => {
  const { onConnect, account, setListedTokens } = useContext(WalletContext);
  const toast = useToast();

  // // fetch listed tokens
  // const tokensFetchPoint = `https://tokens.coingecko.com/uniswap/all.json`;

  // const { data } = useQuery('tokens', () =>
  //   axios.get(`${tokensFetchPoint}`)
  // );


  const onDisconnect = () => {
    return toast({
      title: 'Disconnect',
      description: "Disconnect feature unavailable",
      status: 'warning',
      duration: 2000,
      variant: 'solid',
      position: 'top-right',
    });
  }

  return (
    <Box
      zIndex={100}
      position={{ base: 'fixed' }}
      w={{ base: '100%' }}
      top={'0%'}
      minW="20rem"
      mx="auto"
    >
      <Flex justifyContent={"center"}>
        <Box width={{
          base: "100%",
          lg: "80%"
        }}
          maxW="1212px"
        >
          <Flex
            zIndex={'100'}
            h="5rem"
            px="2rem"
            py="1.2rem"
            bg="ekoswap.primary"
            align="center"
            justify="space-between"
            top="0%"
            borderRadius="0 0 1rem 1rem"
          >
            <InternalLink to="/" style={{ textDecoration: 'none' }}>
              <Image
                cursor={'pointer'}
                src={'/assets/ekoswap.svg'}
                h={{ base: '30px', md: '3ch' }}
                alt="logo"
              />
            </InternalLink>

            <Box
              position={{ base: 'fixed', lg: 'relative' }}
              w={{ base: '100%', md: '90%', lg: 'unset' }}
              bottom={{ base: '0%', md: '2%', lg: 'unset' }}
              left={{ base: '0%', md: 'unset' }}
            >
              <Flex
                className="test"
                background="ekoswap.silver"
                px={5}
                py={2}
                borderRadius={{ md: '0.5rem' }}
                align={'center'}
                fontWeight="bold"
                justifyContent="space-between"
              >
                <InternalLink to="/" style={{ textDecoration: 'none' }}>
                  <Box px={5} cursor="pointer">
                    <Text fontSize={'0.8rem'}>Dashboard</Text>
                  </Box>
                </InternalLink>

                <InternalLink to="/swap" style={{ textDecoration: 'none' }}>
                  <Box px={5} className="nav-active" cursor={'pointer'}>
                    <Text fontSize={'0.8rem'}>Swap</Text>
                  </Box>
                </InternalLink>

                <ExternalLink href="https://nft-market-steel.vercel.app" style={{ textDecoration: 'none' }}>
                  <Box px={5} cursor="pointer">
                    <Text fontSize={'0.8rem'}>Marketplace</Text>
                  </Box>
                </ExternalLink>
              </Flex>
            </Box>

            <Flex align="center">
              {!account ? (
                <Button
                  bg="none"
                  boxShadow="xl"
                  onClick={onConnect}
                  leftIcon={
                    <Avatar
                      name="Meta Mask"
                      src={'/assets/metamask.png'}
                      bg="none"
                      size={{ base: 'sm' }}
                    />
                  }
                >
                  Connect
                </Button>
              ) :
                <Button
                  bg="none"
                  boxShadow="xl"
                  leftIcon={
                    <Avatar
                      name="Meta Mask"
                      src={'/assets/metamask.png'}
                      bg="none"
                      size={{ base: 'sm' }}
                    />
                  }
                  onClick={onDisconnect}
                >
                  Disconnect
                </Button>
              }

              {/* {account ? (
                <Flex direction="column">
                  <Text fontSize={{ base: '10px' }}>10,200EKO</Text>
                  <Text fontSize={{ base: '10px' }}>0xbat...4f2ju</Text>
                </Flex>
              ) : null} */}
            </Flex>
          </Flex>
        </Box>
      </Flex>
    </Box>
  );
};

export default NavBar;
