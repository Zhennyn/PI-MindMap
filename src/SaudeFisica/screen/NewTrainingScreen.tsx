import React from 'react';
import { View, Text, StyleSheet, ScrollView, Button } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RouteProp } from '@react-navigation/native';

interface Exercise {
  exerciseName: string;
  sets: string;
  reps: string;
  load: string;
}

type RootStackParamList = {
  AddExercise: { trainingType: string; exercises: Exercise[] };
  NewTraining: { trainingType: string; exercises: Exercise[] };
};

type NewTrainingScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'NewTraining'>;
type NewTrainingScreenRouteProp = RouteProp<RootStackParamList, 'NewTraining'>;

interface NewTrainingScreenProps {
  navigation: NewTrainingScreenNavigationProp;
  route: NewTrainingScreenRouteProp;
}

const NewTrainingScreen: React.FC<NewTrainingScreenProps> = ({ route, navigation }) => {
  const { trainingType = 'Treino', exercises = [] } = route.params || {};

  const handleAddMoreExercise = () => {
    navigation.navigate('AddExercise', { trainingType, exercises });
  };

  return (
    <LinearGradient colors={['#1e1e1e', '#2c2c2c', '#3a3a3a']} style={styles.background}>
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.title}>Novo Treino para {trainingType}</Text>
        {exercises.length === 0 ? (
          <Text style={styles.exerciseText}>Nenhum exercício adicionado.</Text>
        ) : (
          exercises.map((exercise, index) => (
            <View key={index} style={styles.exerciseContainer}>
              <Text style={styles.exerciseText}>Exercício: {exercise.exerciseName}</Text>
              <Text style={styles.exerciseText}>Séries: {exercise.sets}</Text>
              <Text style={styles.exerciseText}>Repetições: {exercise.reps}</Text>
              <Text style={styles.exerciseText}>Carga: {exercise.load} kg</Text>
            </View>
          ))
        )}
        <View style={styles.buttonContainer}>
          <Button title="Adicionar Mais Exercícios" onPress={handleAddMoreExercise} />
        </View>
      </ScrollView>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
  },
  container: {
    flexGrow: 1,
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
    color: '#fff',
  },
  exerciseContainer: {
    backgroundColor: '#444',
    padding: 15,
    marginVertical: 10,
    borderRadius: 5,
  },
  exerciseText: {
    color: '#fff',
    fontSize: 18,
  },
  buttonContainer: {
    marginTop: 20,
  },
});

export default NewTrainingScreen;
