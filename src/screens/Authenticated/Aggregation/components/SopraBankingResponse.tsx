import React from 'react';
import {
  AppBaseView,
  ConfirmationStatus,
  Root,
  PrimaryButton,
  ActionContainer,
} from 'components';
import { GestureResponderEvent } from 'react-native';
import styled from 'styled-components/native';

interface SopraBankingResponse {
  title: string;
  CTATitle: string;
  variant: 'success' | 'error';
  onPress: (event: GestureResponderEvent) => void;
}

const SopraBankingResponse = ({
  title,
  variant,
  CTATitle,
  onPress,
}: SopraBankingResponse) => {
  return (
    <Root>
      <AppBaseView justifyContent="flex-end">
        <RespenseContainer>
          <ConfirmationStatus variant={variant} title={title} />
          <ActionContainer mTop={0} mBottom={0}>
            <PrimaryButton title={CTATitle} onPress={onPress} />
          </ActionContainer>
        </RespenseContainer>
      </AppBaseView>
    </Root>
  );
};

export default SopraBankingResponse;

const RespenseContainer = styled.View`
  height: 62%;
  justify-content: space-between;
  align-self: stretch;
`;
