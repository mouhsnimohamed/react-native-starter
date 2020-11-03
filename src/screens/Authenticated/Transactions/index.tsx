import React from 'react';
import { AppBaseView, PrimaryText } from '../../../components';
import LogOut from '../../../components/LogOut';

const Transactions = () => {
  return (
    <AppBaseView>
      <PrimaryText isPrimary bold>
        Welcome, you're in Transactions Screen
      </PrimaryText>
      <LogOut />
    </AppBaseView>
  );
};

export default Transactions;
