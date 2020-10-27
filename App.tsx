import React from 'react';
import { Provider } from 'react-redux';
import store from './src/redux/store';
import NavigatorView from './src/navigations/RootNavigation';
import { theme, ThemeProvider } from './src/components/styles/theme';

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
