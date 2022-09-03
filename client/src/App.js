import { ChakraProvider } from '@chakra-ui/react';
import Info from "./components/Position/Info"
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { theme } from './chakra-utils/theme';
import Home from './components/Home/Home';
import Swap from './components/Swap/Swap';


function App() {
  return (
    <ChakraProvider {...{ theme }}>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/swap" element={<Swap />} />
          <Route path="/info" element={<Info />} />
        </Routes>
      </Router>
    </ChakraProvider>
  );
}

export default App;
