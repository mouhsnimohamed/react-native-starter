import React from 'react';
import styled from 'styled-components/native';
import { Logo } from 'components';
import i18n from 'translations';

const SplashScreen: React.FC = () => {
  return (
    <Container>
      <SplashTitle>{i18n.t('splash.title')}</SplashTitle>
      <Logo />
    </Container>
  );
};

const Container = styled.View`
  flex: 1;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const SplashTitle = styled.Text`
  color: #003D7C;
  font-family: Segoe UI;
  font-style: normal;
  font-weight: bold;
  font-size: 20px;
  line-height: 27px;
  margin-bottom: 50px;
`;

export default SplashScreen;
