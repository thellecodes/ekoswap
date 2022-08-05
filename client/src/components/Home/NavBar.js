import { useState } from 'react';
import {
  Flex,
  Image,
  IconButton,
  Text,
  Box,
  Avatar,
  Button,
} from '@chakra-ui/react';
import { VscMenu } from 'react-icons/vsc';

const NavBar = () => {
  const [connected] = useState(false);

  const navLinks = [
    {
      name: 'Moto',
      path: '/#moto',
      id: 'moto',
    },
    {
      name: 'Team',
      path: '/#team',
      id: 'team',
    },
    {
      name: 'Roadmap',
      path: '/#roadmap',
      id: 'roadmap',
    },
  ];

  return (
    <Box
      zIndex={100}
      position={{ base: 'fixed' }}
      w={{ base: '100%' }}
      top={'0%'}
      left={{ base: '0%', lg: '9%' }}
      translateX="50%"
      maxW="1250px"
      minW="20rem"
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
        <Image
          cursor={'pointer'}
          src={'/assets/ekoswap.svg'}
          h={{ base: '30px', md: '3ch' }}
          alt="logo"
        />

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
            <Box px={5} cursor="pointer">
              <Text fontSize={'0.8rem'}>Dashboard</Text>
            </Box>

            <Box px={5} className="nav-active" cursor={'pointer'}>
              <Text fontSize={'0.8rem'}>Swap</Text>
            </Box>

            <Box px={5} cursor="pointer">
              <Text fontSize={'0.8rem'}>Marketplace</Text>
            </Box>
          </Flex>
        </Box>

        <Flex align="center">
          {!connected ? (
            <>
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
              >
                Connect
              </Button>
            </>
          ) : null}

          {connected ? (
            <Flex direction="column">
              <Text fontSize={{ base: '10px' }}>10,200EKO</Text>
              <Text fontSize={{ base: '10px' }}>0xbat...4f2ju</Text>
            </Flex>
          ) : null}
        </Flex>
      </Flex>
    </Box>
  );
};

export default NavBar;
