import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TextInput, Button } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

interface Exercise {
  name: string;
  load: string;
}

const initialExercises: Exercise[] = [
  { name: 'Corrida - 20 min', load: '0' },
  { name: 'Pular corda - 10 min', load: '0' },
  { name: 'Burpees - 3x15', load: '0' },
];

const CardioScreen: React.FC = () => {
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
      <View style={styles.headerContainer}>
        <Text style={styles.title}>Treino de Cardio</Text>
      </View>
      <ScrollView contentContainerStyle={styles.scrollContent}>
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
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  headerContainer: {
    marginTop: 50, // Ajuste para garantir que o título não fique colado no topo
    marginBottom: 20,
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#FFFFFF',
    textAlign: 'center',
  },
  scrollContent: {
    paddingHorizontal: 20,
    alignItems: 'center',
    paddingBottom: 30, // Adiciona um pouco de espaçamento no final da lista
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

export default CardioScreen;
