import React from 'react';
import styled from 'styled-components/native';

const logo = require('../assets/images/logo.png');

const Logo: React.FC = () => <Image source={logo} />;

export default Logo;

const Image = styled.Image`
  width: 245;
  height: 44.5;
`;

export const LogoContainer = styled.View`
  margin-bottom: 70px;
`;
