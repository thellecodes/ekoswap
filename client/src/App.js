import React, { lazy, Suspense } from 'react';
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
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { theme } from './chakra-utils/theme';

/*Contexts*/
import { WalletContextProvider } from "./context/WalletContext"
import { RModalContextProvider } from './context/RModalContext';
import PageLoader from './components/PageLoader';

function App() {

  const {
    isOpen: isRModalOpen,
    onOpen: openRModal,
    onClose: closeRModal,
  } = useDisclosure();


  return (
    <ChakraProvider {...{ theme }}>
      <WalletContextProvider value={{ name: 'samuel' }}>
        <RModalContextProvider value={{ isRModalOpen, openRModal, closeRModal }} >
          <Router>
            <Routes>
              <Route path="/"
                element={
                  <Suspense fallback={<PageLoader />}>
                    {React.createElement(lazy(() => import('./components/Home/Home')))}
                  </Suspense>
                }
              />
              <Route path="/swap"
                element={
                  <Suspense fallback={<PageLoader />}>
                    {React.createElement(lazy(() => import('./components/Swap/Swap')))}
                  </Suspense>
                }
              />
              <Route path="/info"
                element={
                  <Suspense fallback={<PageLoader />}>
                    {React.createElement(lazy(() => import('./components/Position/Info')))}
                  </Suspense>
                }
              />
              <Route path="/pool/create"
                element={
                  <Suspense fallback={<PageLoader />}>
                    {React.createElement(lazy(() => import('./components/Pool/Create')))}
                  </Suspense>
                }
              />
              <Route path="/pool/increase"
                element={
                  <Suspense fallback={<PageLoader />}>
                    {React.createElement(lazy(() => import('./components/Pool/Increase')))}
                  </Suspense>
                }
              />
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
