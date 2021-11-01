import { RootStackParamList } from 'navigations/RootNavigation';
import React from 'react';
import i18n from 'translations';
import { StackNavigationProp } from '@react-navigation/stack';
import SopraBankingResponse from '../components/SopraBankingResponse';
import { RouteProp } from '@react-navigation/native';

type SopraBankingResponseNavigationProps = StackNavigationProp<
  RootStackParamList,
  'SopraBankingResponseScreen'
>;

type SopraBankingResponseRouteProps = RouteProp<
  RootStackParamList,
  'SopraBankingResponseScreen'
>;

interface SopraBankingResponseScreenProps {
  navigation: SopraBankingResponseNavigationProps;
  route: SopraBankingResponseRouteProps;
}

const SopraBankingResponseScreen: React.FC<SopraBankingResponseScreenProps> = ({
  navigation,
  route: {
    params: { variant },
  },
}) => {
  const isSuccess = variant === 'success';

  return (
    <SopraBankingResponse
      variant={variant}
      CTATitle={i18n.t(
        isSuccess ? 'drawerMenu.close' : 'aggregations.webview.retry',
      )}
      title={i18n.t(
        isSuccess
          ? 'aggregations.webview.aggregationSucceeds'
          : 'aggregations.webview.errorOnAggregation',
      )}
      onPress={() => navigation.navigate('AggregatedAccounts')}
    />
  );
};

export default SopraBankingResponseScreen;
