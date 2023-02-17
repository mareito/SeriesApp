import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {MainNavigator} from './src/application/navigation/MainNavigator';
import {Provider} from 'react-redux';
import {store} from './src/infrastructure/store/store';

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <MainNavigator />
      </NavigationContainer>
    </Provider>
  );
};

export default App;
