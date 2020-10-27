import React from 'react';
import { Text, Button, View } from 'react-native';
import { useDispatch } from 'react-redux';

// import { signout } from '~/modules/auth/duck';
// import {Container} from './styles';

const Profile: React.FC = () => {
  const dispatch = useDispatch();
  return (
    <View>
      <Text>Profile Screen</Text>
      <Button
        onPress={() => {
          alert('test');
        }}
        title="Sign off"
      />
    </View>
  );
};

export default Profile;
