import React from 'react';
import { AppBaseView, PrimaryText, LogOut } from 'components';

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
