import { Box, Flex, Text, Button } from '@chakra-ui/react';
import { AiFillPlusCircle } from 'react-icons/ai';

const TopHero = ({ type, path, action }) => {
  return (
    <Flex
      direction={'column'}
      px={{ base: '2rem', md: '4rem' }}
      mx="auto"
      pt="6rem"
      maxW="1250px"
      minW="20rem"
      my={{ base: '1rem', md: '2rem' }}
      justify={'center'}
    >
      <Flex justifyContent="space-between" border="red" alignItems="center">
        <Box>
          <Text fontSize={'20px'} fontWeight="bold">
            {type}
          </Text>
        </Box>

        <Box>
          {path != 'home' ? null : (
            <Button
              rightIcon={<AiFillPlusCircle color="#233CEC" />}
              px={3}
              bg={'#ffffff'}
            >
              <Text fontSize={12}>{action ? action : 'Create Pool'}</Text>
            </Button>
          )}
        </Box>
      </Flex>
    </Flex>
  );
};

export default TopHero;
