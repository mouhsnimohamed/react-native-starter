import React from 'react';
import { AppBaseView, PrimaryText, LogOut } from 'components';

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
