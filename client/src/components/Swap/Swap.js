import { useContext } from 'react'
import {
  Box, Text, Flex, Input, Avatar, Button,
} from '@chakra-ui/react';
import { RiArrowDropDownLine } from 'react-icons/ri';
import { GiVerticalFlip } from 'react-icons/gi';
import NavBar from '../Home/NavBar';
import TopHero from '../Home/TopHero';

/*Contexts*/
import { WalletContext } from '../../context/WalletContext';
import { RModalContext } from '../../context/RModalContext';

const Swap = () => {

  const { isRModalOpen, openRModal, closeRModal } = useContext(RModalContext)

  const selectToken = () => { }

  return (
    <Box w="full" h="100vh" bg="ekoswap.primary">
      <NavBar />
      <TopHero type={''} path="swap" />

      <Box
        w={{ base: '100%' }}
        px={{ base: '2rem', md: '4rem' }}
        left={{ base: '0%', lg: '9%' }}
        maxW="1250px"
        minW="20rem"
        mx="auto"
      >

        <Box
          maxW={{ base: "100%", lg: "55%" }}
          px={{ base: '0.5rem', md: '1rem' }}
          py={{ base: '1rem' }}
          bgGradient="linear(to-r, #402B40, #26A17B)"
          borderRadius={'1.6rem'}
          mx="auto"
        >
          <Text
            color="white"
            fontSize={'20px'}
            fontWeight="bold"
            mb="1rem"
            userSelect={'none'}
          >
            Swap
          </Text>

          <Flex flexDirection={'column'}>
            <Flex
              flex="1"
              direction={'column'}
              maxH="300px"
              position={'relative'}
            >
              <Flex
                flex="1"
                mb="0.3rem"
                bg="black"
                justifyContent={'space-between'}
                alignItems="center"
                px={{ base: '0.5rem', md: '0.8rem' }}
                borderRadius="0.5rem"
                py="0.8rem"
              >
                <Box>
                  <Button
                    padding={"unset"}
                    margin="unset"
                    bg="unset"
                    _hover={"unset"}
                    _active="unset"
                    _focus={"unset"}>
                    <Flex
                      cursor={'pointer'}
                      rounded="full"
                      py="0.4rem"
                      background={'#394B50'}
                      alignItems="center"
                      _hover={{
                        background: '#3F2F42',
                      }}
                      px="0.5rem"
                      justifyContent="space-between"
                    >
                      <Avatar
                        name="EKO"
                        src="/assets/eko.png"
                        border={'unset'}
                        bg="ekoswap.silver"
                        size="xs"
                      />
                      <Flex
                        ml="0.5rem"
                        color="white"
                        alignItems={'center'}
                        fontWeight="bold"
                        fontSize={'1.3rem'}
                      >
                        <Text
                          color={'white'}
                          fontWeight="bold"
                          fontSize={"xs"}
                          userSelect="none"
                        >
                          EKO
                        </Text>
                        <RiArrowDropDownLine />
                      </Flex>
                    </Flex>
                  </Button>
                  {/* <Flex alignItems={'center'}>
                    <Text
                      color="white"
                      fontWeight={'normal'}
                      fontSize="0.7rem"
                      whiteSpace={'nowrap'}
                      mr="0.8rem"
                    >
                      In Wallet: 22ETH
                    </Text>
                    <Button
                      padding={'unset'}
                      bg="unset"
                      _hover={'unset'}
                      _active="unset"
                      fontSize="0.7rem"
                      fontWeight={'bold'}
                    >
                      <Text color={'ekoswap.secondary'}>(Max)</Text>
                    </Button>
                  </Flex> */}
                </Box>
                <Flex flexDir="column" alignItems={'flex-end'}>
                  <Box>
                    <Text color="white" fontWeight={'bold'} fontSize="0.5rem">
                      ~$45.07
                    </Text>
                  </Box>
                  <Box paddingLeft={'1rem'}>
                    <Input
                      placeholder="0.00"
                      value={'20.203'}
                      color="white"
                      fontWeight={'bold'}
                      textAlign="end"
                      borderWidth="unset"
                      focusBorderColor="unset"
                      border="unset"
                      outline={'unset'}
                      shadow="unset"
                      fontSize={{
                        base: '0.9rem',
                        md: '1.3rem',
                      }}
                      padding={'unset'}
                    />
                  </Box>
                </Flex>
              </Flex>

              <Flex
                flex="1"
                mb="0.3rem"
                bg="black"
                justifyContent={'space-between'}
                alignItems="center"
                px={{ base: '0.5rem', md: '0.8rem' }}
                borderRadius="0.5rem"
                py="0.8rem"
              >
                <Box>
                  <Button
                    padding={"unset"}
                    margin="unset"
                    bg="unset"
                    _hover={"unset"}
                    _active="unset"
                    _focus={"unset"}>
                    <Flex
                      cursor={'pointer'}
                      rounded="full"
                      py="0.4rem"
                      background={'#394B50'}
                      alignItems="center"
                      _hover={{ background: '#3F2F42' }}
                      px="0.5rem"
                      justifyContent="space-between"
                    >
                      <Avatar
                        name="EKO"
                        src="/assets/eko.png"
                        border={'unset'}
                        bg="ekoswap.silver"
                        size={'xs'}
                      />
                      <Flex
                        ml="0.5rem"
                        color="white"
                        alignItems={'center'}
                        fontWeight="bold"
                        fontSize={'1.3rem'}
                      >
                        <Text
                          color={'white'}
                          fontWeight="bold"
                          fontSize={"xs"}
                          userSelect="none"
                        >
                          EKO
                        </Text>
                        <RiArrowDropDownLine />
                      </Flex>
                    </Flex>
                  </Button>
                  <Flex alignItems={'center'} margin="unset" padding={"unset"}>
                    <Text
                      color="white"
                      fontWeight={'normal'}
                      fontSize="0.5rem"
                      whiteSpace={'nowrap'}
                    >
                      In Wallet: 22ETH
                    </Text>
                    <Button
                      padding={'unset'}
                      bg="unset"
                      _hover={'unset'}
                      _active="unset"
                      fontSize="0.4rem"
                    >
                      <Text color={'ekoswap.secondary'}>(Max)</Text>
                    </Button>
                  </Flex>
                </Box>
                <Flex flexDir="column" alignItems={'flex-end'}>
                  <Box>
                    <Text color="white" fontWeight={'bold'} fontSize="0.5rem">
                      ~$45.07
                    </Text>
                  </Box>
                  <Box paddingLeft={'1rem'}>
                    <Input
                      placeholder="0.00"
                      value={'20.203'}
                      color="white"
                      fontWeight={'bold'}
                      textAlign="end"
                      borderWidth="unset"
                      focusBorderColor="unset"
                      border="unset"
                      outline={'unset'}
                      shadow="unset"
                      fontSize={{
                        base: '0.9rem',
                        md: '1.3rem',
                      }}
                      padding={'unset'}
                    />
                  </Box>
                </Flex>
              </Flex>

              <Flex position={'absolute'} top="35%" left={'43%'} zIndex="10">
                <Button
                  bg="ekoswap.silver"
                  color="white"
                  fontWeight={'bold'}
                  fontSize="1rem"
                  outline="none"
                  border={'none'}
                  shadow="unset"
                  _focus={'unset'}
                  _active="unset"
                  _hover={'unset'}
                  py="0.5rem"
                >
                  <Text>
                    <GiVerticalFlip color="black" />
                  </Text>
                </Button>
              </Flex>
            </Flex>

            <Flex
              px={{ base: '0.5rem', md: '0.8rem' }}
              py={{ base: '0.5rem', md: '0.8rem' }}
              bg="black"
              borderRadius={'0.5rem'}
              justifyContent={'space-between'}
              color="white"
              fontWeight={'bold'}
              fontSize={'0.8rem'}
            >
              <Text>1 USDT</Text>
              <Text>=</Text>
              <Text>0.005ETH</Text>
            </Flex>

            <Flex mt="1rem">
              <Button
                w="full"
                variant="outline"
                bg="ekoswap.secondary"
                color="white"
                fontWeight={'bold'}
                fontSize="1.3rem"
                outline="none"
                border={'none'}
                shadow="unset"
                _focus={'unset'}
                _active="unset"
                _hover={'unset'}
                py="1rem"
              >
                Swap
              </Button>
            </Flex>
          </Flex>
        </Box>


      </Box>
    </Box >
  );
};

export default Swap;
