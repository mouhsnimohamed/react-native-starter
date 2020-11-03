import React from 'react';
import { AppBaseView, PrimaryText } from '../../../components';
import LogOut from '../../../components/LogOut';

const Settings = () => {
  return (
    <AppBaseView>
      <PrimaryText isPrimary bold>
        Welcome, you're in Settings Screen
      </PrimaryText>
      <LogOut />
    </AppBaseView>
  );
};

export default Settings;
