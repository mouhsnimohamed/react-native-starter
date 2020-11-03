import React from 'react';
import { AppBaseView, PrimaryText } from '../../../components';
import LogOut from '../../../components/LogOut';

const Beneficiaries = () => {
  return (
    <AppBaseView>
      <PrimaryText isPrimary bold>
        Welcome, you're in Beneficiaries Screen
      </PrimaryText>
      <LogOut />
    </AppBaseView>
  );
};

export default Beneficiaries;
