import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {MainNavigator} from './src/application/navigation/MainNavigator';

const App = () => {
  return (
    <NavigationContainer>
      <MainNavigator />
    </NavigationContainer>
  );
};

export default App;
