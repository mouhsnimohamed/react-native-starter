import React from 'react';
import { Provider } from 'react-redux';
import store from 'redux/store';
import NavigatorView from 'navigations/RootNavigation';
import { theme, ThemeProvider } from 'components/styles/theme';

const App = () => {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <NavigatorView />
      </ThemeProvider>
    </Provider>
  );
};

export default App;
