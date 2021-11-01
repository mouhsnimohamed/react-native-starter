import React from 'react';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from 'navigations/RootNavigation';
import {
  ActionContainer,
  AppBaseView,
  BorderView,
  PrimaryButton,
  PrimaryText,
  Root,
} from 'components';
import { ScrollView } from 'react-native-gesture-handler';
import { theme } from 'components/styles/theme';
import i18n from 'translations';
import styled from 'styled-components/native';
import assets from 'assets/svg';
import addAccessibilityLabel from 'utils/addAccessibilityLabel';
import { useDispatch } from 'react-redux';
import { getBanksAction } from 'modules/aggregation/aggregation.actions';
interface ConsentementProps {
  navigation: StackNavigationProp<RootStackParamList, 'Consentement'>;
}
const Consentement: React.FC<ConsentementProps> = ({ navigation }) => {
  const dispatch = useDispatch();
  return (
    <Root>
      <ScrollView
        keyboardShouldPersistTaps="always"
        keyboardDismissMode="on-drag">
        <AppBaseView justifyContent="flex-start">
          <PrimaryText
            style={{ marginTop: 20, marginBottom: 20 }}
            size={theme.fontSize.medium}>
            {i18n.t('aggregations.consentement.firstTitle')}
          </PrimaryText>
          <CustomBorderView
            radius={10}
            pTop={20}
            pLeft={20}
            pRight={20}
            pBottom={10}>
            <Item>
              <PrimaryText semiBold isPrimary align="left">
                {i18n.t('aggregations.consentement.item_1')}
              </PrimaryText>
            </Item>
            <Item>
              <IconContainer>
                <assets.GREEN_ARROW />
              </IconContainer>
              <PrimaryText isPrimary align="left">
                {i18n.t('aggregations.consentement.item_2')}
              </PrimaryText>
            </Item>
            <Item>
              <IconContainer>
                <assets.GREEN_ARROW />
              </IconContainer>
              <PrimaryText isPrimary align="left">
                {i18n.t('aggregations.consentement.item_3')}
              </PrimaryText>
            </Item>
            <Item>
              <IconContainer>
                <assets.GREEN_ARROW />
              </IconContainer>
              <PrimaryText isPrimary align="left">
                {i18n.t('aggregations.consentement.item_4')}
              </PrimaryText>
            </Item>
          </CustomBorderView>
          <ActionContainer>
            <PrimaryButton
              {...addAccessibilityLabel('navigateAggregation')}
              title={i18n.t('common.validate')}
              onPress={() => {
                dispatch(getBanksAction());
                navigation.navigate('Aggregation');
              }}
            />
          </ActionContainer>
        </AppBaseView>
      </ScrollView>
    </Root>
  );
};
export default Consentement;
const CustomBorderView = styled(BorderView)`
  align-self: stretch;
`;

const Item = styled.View`
  flex: 1;
  margin-bottom: 15px;
  flex-direction: row;
`;
const IconContainer = styled.View`
  margin-right: 10px;
  margin-top: 6px;
`;
