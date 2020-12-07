import React from 'react';
import { AppBaseView, LogOut, PrimaryText } from 'components';

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
