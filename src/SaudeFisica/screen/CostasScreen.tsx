import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TextInput, Button } from 'react-native';

interface Exercise {
  name: string;
  sets: number;
  reps: number;
  load: string;
}

const CostasScreen: React.FC = () => {
  const [exercises, setExercises] = useState<Exercise[]>([
    { name: 'Puxada alta', sets: 3, reps: 12, load: '' },
    { name: 'Remada curvada', sets: 3, reps: 10, load: '' },
    { name: 'Levantamento terra', sets: 3, reps: 8, load: '' },
  ]);

  const [newExercise, setNewExercise] = useState<string>('');
  const [newLoad, setNewLoad] = useState<string>('');

  const addExercise = () => {
    if (newExercise.trim() === '' || newLoad.trim() === '') {
      alert('Por favor, insira o nome do exercício e a carga.');
      return;
    }
    const newExercises = [
      ...exercises,
      { name: newExercise, sets: 3, reps: 12, load: newLoad },
    ];
    setExercises(newExercises);
    setNewExercise('');
    setNewLoad('');
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Treino de Costas</Text>

      {exercises.map((exercise, index) => (
        <View key={index} style={styles.exerciseContainer}>
          <Text style={styles.text}>
            {`${exercise.name} - ${exercise.sets}x${exercise.reps} - Carga: ${exercise.load}kg`}
          </Text>
        </View>
      ))}

      <View style={styles.form}>
        <TextInput
          style={styles.input}
          placeholder="Novo exercício"
          value={newExercise}
          onChangeText={setNewExercise}
        />
        <TextInput
          style={styles.input}
          placeholder="Carga (kg)"
          value={newLoad}
          keyboardType="numeric"
          onChangeText={setNewLoad}
        />
        <Button title="Adicionar exercício" onPress={addExercise} />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#2c2c2c',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 20,
    textAlign: 'center',
  },
  exerciseContainer: {
    backgroundColor: '#444',
    padding: 15,
    marginVertical: 10,
    borderRadius: 5,
  },
  text: {
    color: '#fff',
    fontSize: 16,
  },
  form: {
    marginTop: 20,
  },
  input: {
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
  },
});

export default CostasScreen;
