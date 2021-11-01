import React, { useLayoutEffect } from 'react';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from 'navigations/RootNavigation';
import {
  AppBaseView,
  BorderView,
  PlusAction,
  PrimaryText,
  Root,
} from 'components';
import styled from 'styled-components/native';
import { theme } from 'components/styles/theme';
import i18n from 'translations';
import Analytics from 'appcenter-analytics';
import { IaggregatedAccount } from 'modules/aggregation/aggregation.types';
import { FlatList, ListRenderItem } from 'react-native';
import AccountItem from '../components/AccountItem';
import { getAggregatedAccountsAction } from 'modules/aggregation/aggregation.actions';
import { useDispatch } from 'react-redux';
import { useTypedSelector } from 'redux/root.reducers';
import { aggregationSelector } from 'modules/aggregation/aggregation.selectors';
import RefreshButton from '../components/RefreshButton';

interface AggregatedAccountsProps {
  navigation: StackNavigationProp<RootStackParamList, 'AggregatedAccounts'>;
}
const AggregatedAccounts: React.FC<AggregatedAccountsProps> = ({
  navigation,
}) => {
  const dispatch = useDispatch();
  const getAccounts = () => dispatch(getAggregatedAccountsAction());

  // Add HeaderRight to screen
  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => <RefreshButton onPress={getAccounts} />,
    });
  }, [navigation]);

  useLayoutEffect(() => {
    getAccounts();
  }, []);

  const { accounts } = useTypedSelector(aggregationSelector);

  const renderItem: ListRenderItem<IaggregatedAccount> = ({ item }) => {
    return <AccountItem item={item} />;
  };
  const addAccount = async () => {
    navigation.navigate('Consentement');
    await Analytics.trackEvent('Aggregation.AddAccounts Clicked');
  };

  const total = accounts.reduce(
    (accumulator, account) =>
      accumulator + account.balances[0]?.amount.value ?? 0,
    0,
  );
  return (
    <Root>
      <AppBaseView justifyContent="flex-start">
        <StretchBorderView
          pBottom={15}
          pTop={20}
          pLeft={20}
          pRight={20}
          mTop={0}
          mBottom={10}>
          <PrimaryText isPrimary semiBold align="left">
            {i18n.t('aggregations.totalAmount')}
          </PrimaryText>
          <PrimaryText
            isSecondary={total >= 0}
            isError={total < 0}
            bold
            size={theme.fontSize.extra_large}
            align="left"
            style={{ marginTop: 5 }}>
            {`${total.toFixed(2)} €`}
          </PrimaryText>
        </StretchBorderView>
        <CustomFlatList
          data={accounts}
          renderItem={renderItem}
          keyExtractor={(item) => item.resourceId}
          ListEmptyComponent={
            <PrimaryText isSecondary bold size={theme.fontSize.large}>
              {i18n.t('aggregations.noAccountFound')}
            </PrimaryText>
          }
        />
        <PlusAction onPress={addAccount} />
      </AppBaseView>
    </Root>
  );
};
export default AggregatedAccounts;

const CustomFlatList = styled(
  FlatList as new () => FlatList<IaggregatedAccount>,
)`
  align-self: stretch;
`;
const StretchBorderView = styled(BorderView)`
  align-self: stretch;
`;
