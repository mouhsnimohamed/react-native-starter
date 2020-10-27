import React from 'react';
import styled from 'styled-components/native';
import { Text, Button, TextInput } from 'react-native';

const Signin: React.FC = () => {
  return (
    <Container>
      <Text>Sign in Screen</Text>
      <TextInput placeholder="user name" />
      <TextInput
        placeholder="password"
        secureTextEntry={true}
        placeholderTextColor="#9a73ef"
      />
      <Button
        onPress={() => {
          alert('test');
        }}
        title="Sign in"
      />
    </Container>
  );
};

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.background};
  justify-content: center;
  align-items: center;
`;

export default Signin;
