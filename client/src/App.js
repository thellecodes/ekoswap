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
  Text
} from '@chakra-ui/react';
import Info from "./components/Position/Info"
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { theme } from './chakra-utils/theme';
import Home from './components/Home/Home';
import Swap from './components/Swap/Swap';
import Create from './components/Pool/Create';
import Increase from "./components/Pool/Increase"

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
              <Route path="/pool/increase" element={<Increase />} />
            </Routes>
          </Router>

          <Modal isOpen={isRModalOpen} onClose={closeRModal}>
            <ModalOverlay />
            <ModalContent
              mx={{ base: "1.2rem", md: "0.5rem" }}
              mt={{ base: "6rem", md: "10rem" }}
            >
              <ModalHeader><Text fontSize={"xs"}>Select a token</Text></ModalHeader>

              <ModalCloseButton />
              <ModalBody>

              </ModalBody>

              <ModalFooter></ModalFooter>
            </ModalContent>
          </Modal>
        </RModalContextProvider>
      </WalletContextProvider>
    </ChakraProvider>
  );
}

export default App;
