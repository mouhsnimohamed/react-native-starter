import React from 'react';
import { WebView } from 'react-native-webview';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from 'navigations/RootNavigation';
import { Root, Spinner } from 'components';
import styled from 'styled-components/native';
import i18n from 'translations';
import SopraBankingResponse from '../components/SopraBankingResponse';
import { useTypedSelector } from 'redux/root.reducers';
import { aggregationSelector } from 'modules/aggregation/aggregation.selectors';
import { WebViewProgressEvent } from 'react-native-webview/lib/WebViewTypes';
import getParams from 'helpers/extractUrlParams';
import { useDispatch } from 'react-redux';
import { confirmConsentAction } from 'modules/aggregation/aggregation.actions';

interface SopraBankingProps {
  navigation: StackNavigationProp<RootStackParamList, 'SopraBanking'>;
}
const SopraBanking: React.FC<SopraBankingProps> = ({ navigation }) => {
  const { sopraBankingURI } = useTypedSelector(aggregationSelector);

  const dispatch = useDispatch();
  const RESPONSE_URL = 'https://appmobile-rec.bmce-euroservices.com';

  const changedUrlListener = ({ nativeEvent }: WebViewProgressEvent) => {
    const { url } = nativeEvent;
    if (url.startsWith(RESPONSE_URL)) {
      const params = getParams(url);
      if (params.credentialsId && params.state) {
        dispatch(confirmConsentAction(params));
        navigation.navigate('SopraBankingResponseScreen', {
          variant: 'success',
        });
      } else {
        navigation.navigate('SopraBankingResponseScreen', {
          variant: 'error',
        });
      }
    }
  };

  return (
    <Root>
      <WebViewHeight>
        <WebView
          source={{
            uri: `${sopraBankingURI}`,
          }}
          automaticallyAdjustContentInsets={false}
          javaScriptEnabledAndroid={true}
          domStorageEnabled={true}
          javaScriptCanOpenWindowsAutomatically={true}
          originWhitelist={['*']}
          onLoadProgress={changedUrlListener}
          startInLoadingState={true}
          renderLoading={() => <Spinner isLoading={true} />}
          renderError={() => (
            <ErrotContainer>
              <SopraBankingResponse
                variant="error"
                title={i18n.t('aggregations.webview.errorOnLoad')}
                CTATitle={i18n.t('aggregations.webview.retry')}
                onPress={() => navigation.goBack()}
              />
            </ErrotContainer>
          )}
        />
      </WebViewHeight>
    </Root>
  );
};

export default SopraBanking;

const WebViewHeight = styled.View`
  flex: 1;
`;

const ErrotContainer = styled.View`
  bottom: 0;
  flex: 1;
  justify-content: center;
  left: 0;
  position: absolute;
  right: 0;
  top: 0;
`;
