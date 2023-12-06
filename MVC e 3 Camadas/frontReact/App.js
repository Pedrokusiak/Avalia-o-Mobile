import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import CadastroProduto from './src/components/CadastroProduto';
import ListaProdutos from './src/components/ListaProdutos';


const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Cadastro" component={CadastroProduto} />
        <Tab.Screen name="Lista" component={ListaProdutos} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;
