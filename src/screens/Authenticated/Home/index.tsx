import React from 'react';
import { Text, Button, SafeAreaView } from 'react-native';

import { HomeProps } from './types';
// import { Container } from './styles';

const Home: React.FC<HomeProps> = ({ navigation }) => {
  return (
    <SafeAreaView>
      <Text>Home Screen</Text>
      <Button
        onPress={() => navigation.navigate('Details', { id: 'abc-123' })}
        title="Go to Details"
      />
    </SafeAreaView>
  );
};

export default Home;
