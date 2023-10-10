import logo from './logo.svg';
import './App.css';
import { Button, ChakraProvider } from '@chakra-ui/react';
import { Spotify } from 'spotify-web-api-js';
function App() {
  return (
    <ChakraProvider>
      <div style={{ opacity: 0.8 }}>
        <img src={logo} className="App-logo" alt="logo" />
        <Button colorScheme="blue">Button</Button>
      </div>
    </ChakraProvider>
  );
}

export default App;
