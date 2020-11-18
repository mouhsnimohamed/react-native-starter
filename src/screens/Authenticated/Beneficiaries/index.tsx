import React from 'react';
import { AppBaseView, LogOut, PrimaryText } from 'components';

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
