import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TextInput, Button } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

interface Exercise {
  name: string;
  load: string;
}

const initialExercises: Exercise[] = [
  { name: 'Agachamento livre - 3x12', load: '0' },
  { name: 'Leg press - 3x10', load: '0' },
  { name: 'Cadeira extensora - 3x12', load: '0' },
];

const PernasScreen: React.FC = () => {
  const [exercises, setExercises] = useState<Exercise[]>(initialExercises);
  const [newExercise, setNewExercise] = useState<string>('');
  const [newLoad, setNewLoad] = useState<string>('');

  const addExercise = () => {
    if (newExercise.trim() === '' || newLoad.trim() === '') {
      alert('Por favor, insira o nome do exercício e a carga.');
      return;
    }
    setExercises([...exercises, { name: newExercise, load: newLoad }]);
    setNewExercise('');
    setNewLoad('');
  };

  return (
    <LinearGradient colors={['#1e1e1e', '#2c2c2c']} style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <Text style={styles.title}>Treino de Pernas</Text>
        {exercises.map((exercise, index) => (
          <Text key={index} style={styles.text}>
            {`${index + 1}. ${exercise.name} - Carga: ${exercise.load} kg`}
          </Text>
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
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,  // Garante que o LinearGradient ocupe toda a tela
  },
  scrollContent: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
    flexGrow: 1,  // Garante que o ScrollView ocupe o espaço necessário
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#FFFFFF',
    marginBottom: 20,
    textAlign: 'center',
  },
  text: {
    color: '#FFFFFF',
    fontSize: 16,
    marginBottom: 10,
    textAlign: 'center',
  },
  form: {
    marginTop: 20,
    width: '100%', // Ajusta a largura do formulário
    paddingHorizontal: 20,
  },
  input: {
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
  },
});

export default PernasScreen;
