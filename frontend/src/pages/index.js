import React, { useMemo } from 'react';
import { Box, useColorMode } from '@chakra-ui/core';
import { StaticKitProvider } from '@statickit/react';
import mitt from 'mitt';

// styles
import '../assets/styles/global.css';

// components
import { Nav } from '../components/Nav';
import { Form } from '../components/Form';
import { Footer } from '../components/Footer';

// hooks
import { useWeb3Provider } from '../hooks/useWeb3Provider';
import { useAnimatedLogo } from '../hooks/useAnimatedLogo';
import { useAnimateLogoAtStart } from '../hooks/useAnimateLogoAtStart';

const HomePage = () => {
  // Chakra hooks
  const { colorMode } = useColorMode();

  // Custom hooks
  const web3Provider = useWeb3Provider();
  const { boxContainerRef, animationContainerRef, logoAnimation } = useAnimatedLogo(colorMode);
  useAnimateLogoAtStart(logoAnimation);

  // Constants
  const emitter = useMemo(() => mitt(), []);

  return (
    <Box minHeight="100vh" w="100%">
      <StaticKitProvider site="be233dcfc478">
        <Nav
          animationRef={animationContainerRef}
          boxRef={boxContainerRef}
          emitter={emitter}
          web3Provider={web3Provider}
        />
      </StaticKitProvider>
      <Box m="0 auto" maxWidth="612px" pt={32} width="100%">
        <Form emitter={emitter} logoAnimation={logoAnimation} web3Provider={web3Provider} />
      </Box>
      <Footer />
    </Box>
  );
};

export default HomePage;
