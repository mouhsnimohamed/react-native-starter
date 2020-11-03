import React from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components/native';
import { PrimaryButton } from '.';
import { SignOutAction } from '../modules/auth/auth.actions';

export default function LogOut() {
  const dispatch = useDispatch();
  const handlelogOut = () => {
    dispatch(SignOutAction());
  };
  return (
    <View>
      <PrimaryButton onPress={handlelogOut} title="log out" />
    </View>
  );
}

const View = styled.View`
  padding-top: 30px;
  padding-bottom: 15px;
  width: 70%;
`;
