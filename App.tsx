import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

// Telas
import Multi from './src/Home/multi';
import Estudos from './src/Estudos/Home/estudos';
import Notas from './src/Estudos/Notas/notas';
import Provas from './src/Estudos/Provas/provas';
import TodoApp from './src/Tarefas/TodoApp';

const Stack = createStackNavigator();

const Navigation: React.FC = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Multi"
        screenOptions={{
          headerStyle: {
            backgroundColor: 'black', // Cor de fundo do cabeçalho
          },
          headerTintColor: '#fff', // Cor do texto e ícones
          headerTitleStyle: {
            fontWeight: 'bold', // Texto em negrito
          },
        }}
      >
        <Stack.Screen options={{ headerShown: false }} name="Multi" component={Multi} />
        <Stack.Screen name="Estudos" component={Estudos} />
        <Stack.Screen name="Notas" component={Notas} />
        <Stack.Screen name="Provas" component={Provas} />
        <Stack.Screen name="Tarefas" component={TodoApp} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
