import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

// Telas
import Multi from './src/Home/multi';
import Estudos from './src/Estudos/Home/estudos';
import Notas from './src/Estudos/Notas/notas';
import Provas from './src/Estudos/Provas/provas';
import TodoApp from './src/Tarefas/TodoApp';
import HomeScreen from './src/SaudeFisica/Home/HomeScreen';
import AbdomenScreen from './src/SaudeFisica/screen/AbdomenScreen';
import AddExerciseScreen from './src/SaudeFisica/screen/AddExerciseScreen';
import AlongamentoScreen from './src/SaudeFisica/screen/AlongamentoScreen';
import BracosScreen from './src/SaudeFisica/screen/BracosScreen';
import CardioScreen from './src/SaudeFisica/screen/CardioScreen';
import CostasScreen from './src/SaudeFisica/screen/CostasScreen';
import MinhasRotinasScreen from './src/SaudeFisica/screen/MinhasRotinasScreen';
import NewTrainingScreen from './src/SaudeFisica/screen/NewTrainingScreen';
import PeitoScreen from './src/SaudeFisica/screen/PeitoScreen';
import PernasScreen from './src/SaudeFisica/screen/PernasScreen';
import RotinaDetalhesScreen from './src/SaudeFisica/screen/RotinaDetalhesScreen';
import TrainingSelectionScreen from './src/SaudeFisica/screen/TrainingSelectionScreen';

interface Exercise {
  exerciseName: string;
  sets: string;
  reps: string;
  load: string;
}

type RootStackParamList = {
  Home: undefined;
  TrainingSelection: undefined;
  Costas: undefined;
  Peito: undefined;
  Pernas: undefined;
  Bracos: undefined;
  Abdômen: undefined;
  Cardio: undefined;
  Alongamento: undefined;
  AddExercise: { trainingType: string; exercises?: Exercise[] };
  NewTraining: { trainingType: string; exercises: Exercise[] };
  MinhasRotinas: undefined;
  RotinaDetalhes: { exercise: Exercise };
};

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
        <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'Saúde Física' }} />
        <Stack.Screen name="TrainingSelection" component={TrainingSelectionScreen} options={{ title: 'Seleção de Treino' }} />
        <Stack.Screen name="Costas" component={CostasScreen} options={{ title: 'Treino de Costas' }} />
        <Stack.Screen name="Peito" component={PeitoScreen} options={{ title: 'Treino de Peito' }} />
        <Stack.Screen name="Pernas" component={PernasScreen} options={{ title: 'Treino de Pernas' }} />
        <Stack.Screen name="Bracos" component={BracosScreen} options={{ title: 'Treino de Braços' }} />
        <Stack.Screen name="Abdômen" component={AbdomenScreen} options={{ title: 'Treino de Abdômen' }} />
        <Stack.Screen name="Cardio" component={CardioScreen} options={{ title: 'Treino de Cardio' }} />
        <Stack.Screen name="Alongamento" component={AlongamentoScreen} options={{ title: 'Treino de Alongamento' }} />
        <Stack.Screen name="AddExercise" component={AddExerciseScreen} options={{ title: 'Adicionar Exercício' }} />
        <Stack.Screen name="NewTraining" component={NewTrainingScreen} options={{ title: 'Novo Treino' }} />
        <Stack.Screen name="MinhasRotinas" component={MinhasRotinasScreen} options={{ title: 'Minhas Rotinas' }} />
        <Stack.Screen
          name="RotinaDetalhes"
          component={RotinaDetalhesScreen as React.ComponentType}
          options={{ title: 'Detalhes da Rotina' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
