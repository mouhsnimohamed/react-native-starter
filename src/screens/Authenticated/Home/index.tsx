import React from 'react';
import { Text, Button } from 'react-native';

import { HomeProps } from './types';

const Home: React.FC<HomeProps> = ({ navigation }) => {
  return (
    <Container>
      <Text>Home Screen</Text>
      <Button
        onPress={() => navigation.navigate('Details', { id: 'abc-123' })}
        title="Go to Details"
      />
    </Container>
  );
};

export default Home;

import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.background};
  justify-content: center;
  align-items: center;
`;
