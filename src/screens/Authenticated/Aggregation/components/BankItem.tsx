import React from 'react';
import { Card, PrimaryText } from 'components';
import styled from 'styled-components/native';
import NavigateToCompte from 'assets/svg/navigateToCompte';
import { View } from 'react-native';
import { BankType } from 'modules/aggregation/aggregation.types';
import { useDispatch } from 'react-redux';
import { consentBankAction } from 'modules/aggregation/aggregation.actions';
export interface BankItem {
  item: BankType;
}
const BankItem = ({ item }: BankItem) => {
  const dispatch = useDispatch();
  const consentBank = () => dispatch(consentBankAction(item.id));
  return (
    <Card
      mTop={12}
      pTop={10}
      pBottom={1}
      mBottom={10}
      style={{ minHeight: 80 }}>
      <CompanyView onPress={consentBank}>
        <IconImg
          source={{
            uri: item.icon,
          }}
        />
        <PrimaryText
          style={{ paddingTop: 16, paddingLeft: 5 }}
          isPrimary
          semiBold
          align="left">
          {item.name}
        </PrimaryText>
        <View style={{ paddingTop: 12, paddingRight: 10 }}>
          <NavigateToCompte />
        </View>
      </CompanyView>
    </Card>
  );
};
export default BankItem;

const CompanyView = styled.TouchableOpacity`
  flex: 1;
  flex-direction: row;
  margin-bottom: 8px;
`;
const IconImg = styled.Image`
  width: 30px;
  height: 30px;
  border-radius: 60px;
  text-align: center;
  line-height: 80px;
  padding: 30px;
  margin-right: 8px;
`;
