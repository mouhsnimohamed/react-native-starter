import React from 'react';
import styled from 'styled-components/native';

const logo = require('../assets/images/logo.png');

const SplashScreen: React.FC = () => {
  return (
    <Container>
      <Image source={logo} />
    </Container>
  );
};

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const Image = styled.Image`
  width: 245;
  height: 44.5;
`;

export default SplashScreen;
