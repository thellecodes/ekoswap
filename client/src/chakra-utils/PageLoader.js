import { Flex, Spinner } from '@chakra-ui/react';
import NavBar from '../components/Home/NavBar';

const PageLoader = () => {
	return (
		<Flex justify='center' align='center' w='full' h='100vh'>
			<Navbar />
			<Spinner
				mt='10ch'
				speed='0.75s'
				emptyColor='theme.dark.500'
				color='theme.accent.100'
				size='xl'
				thickness='5px'
			/>
		</Flex>
	);
};

export default PageLoader;