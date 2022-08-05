import {
  Box,
  AvatarGroup,
  Avatar,
  Accordion,
  AccordionItem,
  AccordionPanel,
  AccordionButton,
  AccordionIcon,
  Grid,
  GridItem,
  Flex,
  Text,
  Button,
} from '@chakra-ui/react';
import Link, { InternalLink } from '../../styled/Links';

const StakingContainer = ({ data }) => {
  const inPosition = data.inPosition;
  return (
    <>
      <Accordion allowMultiple mb={5} border="unset">
        <AccordionItem border={'unset'} bg="unset">
          {({ isExpanded }) => (
            <Box
              bg={isExpanded ? 'ekoswap.silver' : 'ekoswap.brown'}
              borderRadius={{
                base: '1rem',
                md: '1.2rem',
              }}
              flex="1"
              alignItems={'center'}
            >
              <AccordionButton
                outline={'none'}
                shadow="unset"
                _active={{
                  bg: 'unset',
                }}
                _hover={{
                  bg: 'unset',
                }}
                flex="1"
                alignItems={'center'}
              >
                <Box
                  flex="1"
                  textAlign="left"
                  borderBottom={isExpanded ? '1px' : ''}
                  borderBottomColor={isExpanded ? 'black' : ''}
                  paddingBottom={isExpanded ? '2rem' : '1rem'}
                  alignItems="center"
                >
                  <Grid
                    mt={'1rem'}
                    gridTemplateColumns={{ base: 'auto 1fr', lg: '150px 1fr' }}
                    gap={{ base: '0em', md: '1em' }}
                    fontWeight="bold"
                  >
                    <GridItem>
                      <AvatarGroup size="md" max={2}>
                        <Avatar
                          name="EKO"
                          src="/assets/eko.png"
                          border={'unset'}
                          bg="ekoswap.silver"
                        />
                        <Avatar
                          name="ETH"
                          src="/assets/eth.png"
                          border={'unset'}
                          bg="ekoswap.silver"
                        />
                      </AvatarGroup>
                    </GridItem>
                    <GridItem>
                      <Grid
                        gridTemplateColumns={{
                          lg: '1fr 180px',
                          base: '1fr 1fr',
                        }}
                        gap="1"
                        color="blackAlpha.700"
                        fontWeight="bold"
                      >
                        <GridItem>
                          <Flex
                            justifyContent={'space-between'}
                            direction={{
                              base: 'column',
                              md: 'row',
                            }}
                            paddingLeft={{
                              base: '1.5rem',
                            }}
                          >
                            <Flex
                              direction={{
                                base: 'row',
                                md: 'column',
                              }}
                              alignItems={{
                                base: 'center',
                                md: 'flex-start',
                              }}
                              width={{ base: '10rem', md: 'auto' }}
                              justifyContent={'space-between'}
                            >
                              <Text
                                color={isExpanded ? 'black' : 'ekoswap.primary'}
                                mr="1rem"
                                fontSize={{
                                  base: '0.8rem',
                                  md: '1.5rem',
                                }}
                              >
                                $56M
                              </Text>
                              <Text
                                display="block"
                                fontSize="xs"
                                color={isExpanded ? 'black' : 'white'}
                              >
                                TVL
                              </Text>
                            </Flex>

                            <Flex
                              direction={{
                                base: 'row',
                                md: 'column',
                              }}
                              alignItems={{
                                base: 'center',
                                md: 'flex-start',
                              }}
                              width={{ base: '10rem', md: 'auto' }}
                              justifyContent={'space-between'}
                            >
                              <Text
                                color={isExpanded ? 'black' : 'ekoswap.primary'}
                                mr="1rem"
                                fontSize={{
                                  base: '0.8rem',
                                  md: '1.5rem',
                                }}
                              >
                                159.5%
                              </Text>
                              <Text
                                display="block"
                                fontSize="xs"
                                color={isExpanded ? 'black' : 'white'}
                              >
                                APR
                              </Text>
                            </Flex>

                            <Flex
                              direction={{
                                base: 'row',
                                md: 'column',
                              }}
                              alignItems={{
                                base: 'center',
                                md: 'flex-start',
                              }}
                              mr="1rem"
                              width={{ base: '10rem', md: 'auto' }}
                              justifyContent={'space-between'}
                            >
                              <Text
                                color={isExpanded ? 'black' : 'ekoswap.primary'}
                                fontSize={{
                                  base: '0.8rem',
                                  md: '1.5rem',
                                }}
                              >
                                $EKT 400K
                              </Text>
                              <Text
                                display="block"
                                fontSize="xs"
                                color={isExpanded ? 'black' : 'white'}
                              >
                                Reward
                              </Text>
                            </Flex>
                            {inPosition ? (
                              <Flex
                                direction={{
                                  base: 'row',
                                  md: 'column',
                                }}
                                alignItems={{
                                  base: 'center',
                                  md: 'flex-start',
                                }}
                                width={{ base: '10rem', md: 'auto' }}
                                justifyContent={'space-between'}
                              >
                                <Text
                                  color={
                                    isExpanded ? 'black' : 'ekoswap.primary'
                                  }
                                  fontSize={{
                                    base: '0.8rem',
                                    md: '1.5rem',
                                  }}
                                >
                                  $EKT 2,400
                                </Text>
                                <Text
                                  display="block"
                                  fontSize="xs"
                                  color={isExpanded ? 'black' : 'white'}
                                >
                                  Earned
                                </Text>
                              </Flex>
                            ) : (
                              <Flex
                                width={{ base: '10rem', md: '5rem' }}
                                alignItems="center"
                              >
                                <Text
                                  fontWeight="bold"
                                  color={isExpanded ? 'black' : 'white'}
                                  mb="0.5rem"
                                >
                                  -
                                </Text>
                              </Flex>
                            )}
                          </Flex>
                        </GridItem>
                        <GridItem
                          display={{
                            base: 'none',
                            lg: 'inline-block',
                          }}
                        >
                          <Flex
                            justifyContent={'flex-end'}
                            alignItems="center"
                            pr="1rem"
                            textDecoration="unset"
                          >
                            {inPosition ? (
                              <InternalLink
                                to="/"
                                display={{
                                  base: 'none',
                                  lg: 'inline-block',
                                }}
                                style={{
                                  textDecoration: 'none',
                                }}
                              >
                                <Button
                                  variant="solid"
                                  bgGradient="linear(to-r, ekoswap.primary, ekoswap.secondary)"
                                  _hover={{
                                    bg: 'ekoswap.secondary',
                                    color: 'white',
                                  }}
                                >
                                  <Text
                                    fontWeight={'bold'}
                                    fontSize="1rem"
                                    textTransform={'uppercase'}
                                    color="white"
                                  >
                                    Info
                                  </Text>
                                </Button>
                              </InternalLink>
                            ) : (
                              <InternalLink
                                to="/addliquidity"
                                display={{
                                  base: 'none',
                                  lg: 'inline-block',
                                }}
                                style={{
                                  textDecoration: 'none',
                                }}
                              >
                                <Button
                                  variant="solid"
                                  bgGradient="linear(to-r, ekoswap.primary, ekoswap.secondary)"
                                  _hover={{
                                    bg: 'ekoswap.secondary',
                                    color: 'white',
                                  }}
                                >
                                  <Text
                                    fontWeight={'bold'}
                                    fontSize="1rem"
                                    textTransform={'uppercase'}
                                    color="white"
                                  >
                                    + Add Liquidity
                                  </Text>
                                </Button>
                              </InternalLink>
                            )}
                          </Flex>
                        </GridItem>
                      </Grid>
                    </GridItem>
                  </Grid>
                </Box>
                <AccordionIcon />
              </AccordionButton>
              <AccordionPanel pb={4}>
                <Flex py={'2rem'}>
                  <Box w="350px">
                    <Text
                      fontWeight={'bold'}
                      fontSize={{
                        base: '1rem',
                        md: '1.2rem',
                      }}
                    >
                      Your Deposit
                    </Text>
                    <Flex
                      alignItems={{
                        base: 'flex-start',
                        lg: 'flex-end',
                      }}
                      flexDir={{
                        base: 'column',
                        lg: 'row',
                      }}
                    >
                      <Text
                        fontWeight={'bold'}
                        mt="1rem"
                        fontSize={{
                          base: '1.5rem',
                          lg: '2rem',
                        }}
                      >
                        $EKT 25,599
                      </Text>
                      <Text
                        fontSize={'xs'}
                        fontWeight="bold"
                        color={'ekoswap.secondary'}
                      >
                        $204.57
                      </Text>
                    </Flex>
                  </Box>
                  <Flex flex="1" justifyContent="space-between">
                    <Flex direction="column">
                      <Box>
                        <Text
                          fontWeight="bold"
                          fontSize={{
                            base: '1rem',
                            md: '1.2rem',
                          }}
                        >
                          Share
                        </Text>
                      </Box>
                      <Flex
                        alignItems={{
                          base: 'flex-start',
                          lg: 'flex-end',
                        }}
                        flexDir={{
                          base: 'column',
                          lg: 'row',
                        }}
                      >
                        <Text
                          fontWeight="bold"
                          mt="1rem"
                          fontSize={{
                            base: '1.5rem',
                            lg: '2rem',
                          }}
                        >
                          0.007%
                        </Text>
                      </Flex>
                    </Flex>

                    <Flex
                      direction="column"
                      pl={{
                        base: '1rem',
                        lg: 'unset',
                      }}
                    >
                      <Box>
                        <Text
                          fontWeight="bold"
                          fontSize={{
                            base: '1rem',
                            md: '1.2rem',
                          }}
                        >
                          Earnings
                        </Text>
                      </Box>
                      <Flex
                        alignItems={{
                          base: 'flex-start',
                          lg: 'flex-end',
                        }}
                        flexDir={{
                          base: 'column',
                          lg: 'row',
                        }}
                      >
                        <Text
                          fontWeight="bold"
                          mt="1rem"
                          fontSize={{
                            base: '1.5rem',
                            lg: '2rem',
                          }}
                          bgGradient="linear(to-l, ekoswap.secondary, black)"
                          bgClip={'text'}
                        >
                          $EKT 2.6789
                        </Text>
                        <Text
                          fontSize={'xs'}
                          fontWeight="bold"
                          color={'ekoswap.secondary'}
                        >
                          $204.57
                        </Text>
                      </Flex>
                    </Flex>
                  </Flex>
                </Flex>

                {inPosition ? (
                  <Flex py="1rem">
                    <InternalLink
                      to="/addliquidity"
                      display={{
                        lg: 'inline-block',
                      }}
                      style={{
                        textDecoration: 'none',
                      }}
                    >
                      <Button
                        variant="solid"
                        bg="ekoswap.primary"
                        color="ekoswap.secondary"
                        _hover={{
                          bg: 'ekoswap.secondary',
                          color: 'white',
                        }}
                      >
                        <Text
                          fontWeight={'bold'}
                          fontSize="1rem"
                          textTransform={'Capitalize'}
                        >
                          + Add Liquidity
                        </Text>
                      </Button>
                    </InternalLink>
                  </Flex>
                ) : null}
              </AccordionPanel>
            </Box>
          )}
        </AccordionItem>
      </Accordion>
    </>
  );
};

export default StakingContainer;
