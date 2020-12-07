import React from 'react';
import styled from 'styled-components/native';

const logo = require('../assets/images/rn-logo.png');

const Logo: React.FC = () => <Image source={logo} />;

export default Logo;

const Image = styled.Image`
  width: 245px;
  height: 44.5px;
`;

export const LogoContainer = styled.View`
  margin-bottom: 70px;
`;
