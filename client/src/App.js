import {
  ChakraProvider,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  Button
} from '@chakra-ui/react';
import Info from "./components/Position/Info"
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { theme } from './chakra-utils/theme';
import Home from './components/Home/Home';
import Swap from './components/Swap/Swap';
import Create from './components/Pool/Create';

/*Contexts*/
import { WalletContextProvider } from "./context/WalletContext"
import { RModalContextProvider } from './context/RModalContext';

function App() {

  const {
    isOpen: isRModalOpen,
    onOpen: openRModal,
    onClose: closeRModal,
  } = useDisclosure();


  return (
    <ChakraProvider {...{ theme }}>
      <WalletContextProvider value={{ name: 'samuel' }}>
        <RModalContextProvider
          value={{ isRModalOpen, openRModal, closeRModal }}
        >
          <Router>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/swap" element={<Swap />} />
              <Route path="/info" element={<Info />} />
              <Route path="/pool/create" element={<Create />} />
            </Routes>
          </Router>

          <Modal isOpen={isRModalOpen} onClose={closeRModal}>
            <ModalOverlay />
            <ModalContent>
              <ModalHeader>Modal Title</ModalHeader>
              <ModalCloseButton />
              <ModalBody>
                this is modal body
              </ModalBody>

              <ModalFooter>
                <Button colorScheme='blue' mr={3} onClick={closeRModal}>
                  Close
                </Button>
                <Button variant='ghost'>Secondary Action</Button>
              </ModalFooter>
            </ModalContent>
          </Modal>
        </RModalContextProvider>
      </WalletContextProvider>
    </ChakraProvider>
  );
}

export default App;
