import React, { useEffect, useState } from 'react';
import { AppBaseView, Root, PrimaryText, TextInput } from 'components';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from 'navigations/RootNavigation';
import i18n from 'translations';
import BankItem from './components/BankItem';
import { theme } from 'components/styles/theme';
import { ListRenderItem } from 'react-native';
import styled from 'styled-components/native';
import { BankType } from 'modules/aggregation/aggregation.types';
import addAccessibilityLabel from 'utils/addAccessibilityLabel';
import { useTypedSelector } from 'redux/root.reducers';
import { aggregationSelector } from 'modules/aggregation/aggregation.selectors';

interface AggregationProps {
  navigation: StackNavigationProp<RootStackParamList, 'Aggregation'>;
}

const Aggregation: React.FC<AggregationProps> = ({ navigation }) => {
  const renderItem: ListRenderItem<BankType> = ({ item }) => {
    return <BankItem item={item} />;
  };
  const { banks } = useTypedSelector(aggregationSelector);
  const [bankFilterValue, setBankFilterValue] = useState('');

  const filteredBanks = banks.filter(
    (item) =>
      item.name.toLowerCase().indexOf(bankFilterValue.toLowerCase()) > -1,
  );
  return (
    <Root>
      <AppBaseView justifyContent={'flex-start'}>
        <PrimaryText
          semiBold
          isPrimary
          align="left"
          style={{ marginBottom: 15 }}
          size={18}>
          {i18n.t('aggregations.titleView')}
        </PrimaryText>
        <TextInput
          {...addAccessibilityLabel('filterBanks')}
          name="filterBanks"
          style={{ marginBottom: 5 }}
          onChangeText={setBankFilterValue}
          placeholder={i18n.t('aggregations.filterBanks')}
        />
        <FlatList<any>
          data={filteredBanks}
          keyExtractor={(item: BankType) => item.id}
          renderItem={renderItem}
          ListEmptyComponent={
            <PrimaryText isSecondary bold size={theme.fontSize.large}>
              {i18n.t('aggregations.noAccountFound')}
            </PrimaryText>
          }
        />
      </AppBaseView>
    </Root>
  );
};
const FlatList = styled.FlatList`
  align-self: stretch;
`;
export default Aggregation;
