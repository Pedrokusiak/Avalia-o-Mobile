import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import CadastroProdutoScreen from './src/screens/CadastroProdutoScreen';
import ListaProdutosScreen from './src/screens/ListaProdutosScreen';

const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Cadastro" component={CadastroProdutoScreen} />
        <Tab.Screen name="Lista" component={ListaProdutosScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;
