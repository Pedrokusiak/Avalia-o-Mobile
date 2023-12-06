import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import UserView from './src/view/UserView';

const App = () => {
  return (
    <NavigationContainer> 
      <UserView/>
    </NavigationContainer>
  );
};

export default App;
