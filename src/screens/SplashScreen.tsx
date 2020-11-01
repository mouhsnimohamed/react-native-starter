import React from 'react';
import styled from 'styled-components/native';
import { Logo } from '../components';

const SplashScreen: React.FC = () => {
  return (
    <Container>
      <Logo />
    </Container>
  );
};

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export default SplashScreen;
