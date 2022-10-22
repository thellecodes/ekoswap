import { Box } from '@chakra-ui/react';
import NavBar from './NavBar';
import '../../App.css';
import TopHero from './TopHero';
import StakingContainer from './StakingContainer';

const Home = () => {
  const stakes = [
    {
      inPosition: true,
      tokenA: 'ETH',
      tokenB: 'EKO',
      values: {
        tvl: '$56M',
        apr: '159.5%',
        reward: '400',
        earned: '2,400',
      },
    },
    {
      inPosition: false,
      tokenA: 'ETH',
      tokenB: 'EKO',
      values: {
        tvl: '$56M',
        apr: '159.5%',
        reward: '400',
        earned: '2,400',
      },
    },
    {
      inPosition: false,
      tokenA: 'ETH',
      tokenB: 'EKO',
      values: {
        tvl: '$56M',
        apr: '159.5%',
        reward: '400',
        earned: '2,400',
      },
    },
  ];

  const getPool = (token0, token1) => {

  }

  return (
    <Box paddingBottom={'50vh'}>
      <NavBar />
      <TopHero type={'Staking'} path={"home"} />
      {stakes.map((data, key) => (
        <Box
          {...{ key }}
          w={{ base: '100%' }}
          px={{ base: '2rem', md: '4rem' }}
          top={'0%'}
          left={{ base: '0%', lg: '9%' }}
          translateX="50%"
          maxW="1250px"
          minW="20rem"
          mx="auto"
        >
          <StakingContainer {...{ data }} />
        </Box>
      ))}
    </Box>
  );
};

export default Home;
