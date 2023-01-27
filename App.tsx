import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import StackNavigation from './src/screens/Navigations';

const App = () => {
  return (
    <NavigationContainer>
      <StackNavigation />
    </NavigationContainer>
    // <Naming />
  );
};

export default App;
