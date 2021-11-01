import assets from 'assets/svg';
import React from 'react';
import { GestureResponderEvent } from 'react-native';
import styled from 'styled-components/native';

type RefreshButtonPropsType = {
  onPress: (event: GestureResponderEvent) => void;
};
const RefreshButton = ({ onPress }: RefreshButtonPropsType) => (
  <RefreshContainer onPress={onPress}>
    <assets.REFRESH_ACCOUNTS />
  </RefreshContainer>
);

const RefreshContainer = styled.TouchableOpacity`
  padding-vertical: 10px;
  padding-horizontal: 20px;
`;
export default RefreshButton;
