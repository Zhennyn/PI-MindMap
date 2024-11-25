import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, ScrollView } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

interface Exercise {
  exerciseName: string;
  sets: string;
  reps: string;
  load: string;
}

type RootStackParamList = {
  NewTraining: {
    trainingType: string;
    exercises: Exercise[];
  };
  AddExercise: {
    trainingType: string;
    exercises?: Exercise[];
  };
};

type Props = NativeStackScreenProps<RootStackParamList, 'AddExercise'>;

const AddExerciseScreen: React.FC<Props> = ({ navigation, route }) => {
  const { trainingType, exercises = [] } = route.params;

  const [exerciseName, setExerciseName] = useState('');
  const [sets, setSets] = useState('');
  const [reps, setReps] = useState('');
  const [load, setLoad] = useState('');

  const handleAddExercise = () => {
    if (exerciseName.trim() === '' || sets.trim() === '' || reps.trim() === '' || load.trim() === '') {
      alert('Por favor, preencha todos os campos.');
      return;
    }

    const newExercise: Exercise = { exerciseName, sets, reps, load };
    const updatedExercises: Exercise[] = [...exercises, newExercise];

    // Limpar os campos após adicionar o exercício
    setExerciseName('');
    setSets('');
    setReps('');
    setLoad('');

    navigation.navigate('NewTraining', { trainingType, exercises: updatedExercises });
  };

  return (
    <LinearGradient colors={['#1e1e1e', '#2c2c2c', '#3a3a3a']} style={styles.background}>
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.title}>Adicionar Novo Exercício para {trainingType}</Text>
        <TextInput
          style={styles.input}
          placeholder="Nome do Exercício"
          value={exerciseName}
          onChangeText={setExerciseName}
        />
        <TextInput
          style={styles.input}
          placeholder="Séries"
          value={sets}
          keyboardType="numeric"
          onChangeText={setSets}
        />
        <TextInput
          style={styles.input}
          placeholder="Repetições"
          value={reps}
          keyboardType="numeric"
          onChangeText={setReps}
        />
        <TextInput
          style={styles.input}
          placeholder="Carga (kg)"
          value={load}
          keyboardType="numeric"
          onChangeText={setLoad}
        />
        <Button title="Adicionar Exercício" onPress={handleAddExercise} />
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
  input: {
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
  },
});

export default AddExerciseScreen;
