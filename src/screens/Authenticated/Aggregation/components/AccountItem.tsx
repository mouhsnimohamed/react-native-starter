import { Card, PrimaryText } from 'components';
import { IaggregatedAccount } from 'modules/aggregation/aggregation.types';
import React, { useRef } from 'react';
import styled from 'styled-components/native';
import i18n from 'translations';
import { Image, View } from 'react-native';
import DotsMenu from 'assets/svg/DotsMenu';
import DrawerSetting from 'assets/svg/drawerSetting';
import RefreshAccountSvg from 'assets/svg/refreshAccount';
import DeleteAccount from 'assets/svg/deleteAccount';
import { theme } from 'components/styles/theme';
import RBSheet from 'components/RBSheet';

export interface IAccountItem {
  item: IaggregatedAccount;
}
const RenderContents = () => {
  return (
    <>
      <DrawerSettingView>
        <DrawerSetting />
        <PrimaryText
          style={{ textAlign: 'left', marginLeft: 10 }}
          isPrimary
          size={theme.fontSize.large + 3}>
          {i18n.t('aggregations.drawerBottomMenu.detail')}
        </PrimaryText>
      </DrawerSettingView>
      <DrawerSettingView>
        <RefreshAccountSvg />
        <PrimaryText
          style={{ textAlign: 'left', marginLeft: 10 }}
          isPrimary
          size={theme.fontSize.large + 3}>
          {i18n.t('aggregations.drawerBottomMenu.refresh')}
        </PrimaryText>
      </DrawerSettingView>
      <DrawerSettingView>
        <DeleteAccount />
        <PrimaryText
          style={{ textAlign: 'left', marginLeft: 10 }}
          isPrimary
          size={theme.fontSize.large + 3}>
          {i18n.t('aggregations.drawerBottomMenu.delete')}
        </PrimaryText>
      </DrawerSettingView>
    </>
  );
};
export default function AccountItem({ item }: IAccountItem) {
  const refRBSheet = useRef();
  return (
    <>
      <Card>
        <Name>
          <Icon>
            <Image
              source={{ uri: item.aspsp.icon }}
              style={{ width: 48, height: 48, borderRadius: 24 }}
            />
          </Icon>
          <View>
            <PrimaryText isPrimary bold align="left">
              {`${item.name}`}
            </PrimaryText>
            <PrimaryText
              isSecondary={item.balances[0]?.creditDebitIndicator === 'CREDIT'}
              isError={item.balances[0]?.creditDebitIndicator === 'DEBIT'}
              bold
              align="left">
              {`${item.balances[0]?.amount.value} €`}
            </PrimaryText>
          </View>
          <IconView onPress={() => refRBSheet.current.open()}>
            <DotsMenu />
          </IconView>

          <RBSheet
            ref={refRBSheet}
            closeOnDragDown={true}
            closeOnPressMask={false}
            height={160}
            openDuration={500}
            customStyles={{
              wrapper: {
                backgroundColor: 'transparent',
              },
              draggableIcon: {
                backgroundColor: '#000',
              },
              container: {
                borderTopEndRadius: 20,
                borderTopStartRadius: 20,
              },
            }}>
            <RenderContents />
          </RBSheet>
        </Name>

        <PrimaryText style={{ marginBottom: 8 }} isPrimary bold align="left">
          {i18n.t(`aggregations.accountTypes.${item.cashAccountType}`)}
        </PrimaryText>
        <PrimaryText isPrimary semiBold align="left">
          {i18n.t('aggregations.iban')}
          {' : '}
          <PrimaryText align="left">
            {item.references.filter((ref) => ref.type === 'IBAN')?.[0]?.id}
          </PrimaryText>
        </PrimaryText>
      </Card>
    </>
  );
}

const Name = styled.View`
  flex: 1;
  flex-direction: row;
  margin-bottom: 8px;
`;
const Icon = styled.View`
  margin-right: 8px;
`;
const IconView = styled.TouchableOpacity`
  position: absolute;
  right: 0;
  height: 18px;
  width: 12px;
`;
const DrawerSettingView = styled.View`
  flex: 1;
  flex-direction: row;
  margin-left: 30px;
  margin-top: 10px;
  max-height: 28px;
`;
