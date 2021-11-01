import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { RootStackParamList } from 'navigations/RootNavigation';
import { theme } from 'components/styles/theme';
import i18n from 'translations';
import { HeaderBack } from 'components';
import Aggregation from '.';
import Consentement from './Consentement';
import AggregatedAccounts from './AggregatedAccounts';
import SopraBanking from './SopraBanking';
import SopraBankingResponseScreen from './SopraBankingResponseScreen';

const Stack = createStackNavigator<RootStackParamList>();
const AggregationStackNavigator: React.FC = () => {
  return (
    <Stack.Navigator
      initialRouteName="AggregatedAccounts"
      screenOptions={{
        headerStyle: {
          backgroundColor: theme.colors.primary,
        },
        headerTintColor: theme.colors.white,
        headerTitleStyle: {
          alignSelf: 'center',
        },
        headerBackTitleVisible: false,
        headerBackImage: () => <HeaderBack />,
      }}>
      <Stack.Screen
        options={{ title: i18n.t('headerTitles.aggregation.accounts') }}
        name="Aggregation"
        component={Aggregation}
      />
      <Stack.Screen
        options={{ title: i18n.t('headerTitles.aggregation.consentement') }}
        name="Consentement"
        component={Consentement}
      />
      <Stack.Screen
        options={{
          title: i18n.t('headerTitles.aggregation.accounts'),
          // headerRight: () => <RefreshAccounts />,
        }}
        name="AggregatedAccounts"
        component={AggregatedAccounts}
      />
      <Stack.Screen
        options={{
          title: i18n.t('headerTitles.aggregation.consentement'),
        }}
        name="SopraBanking"
        component={SopraBanking}
      />
      <Stack.Screen
        options={{
          title: i18n.t('headerTitles.aggregation.consentement'),
        }}
        name="SopraBankingResponseScreen"
        component={SopraBankingResponseScreen}
      />
    </Stack.Navigator>
  );
};

export default AggregationStackNavigator;
