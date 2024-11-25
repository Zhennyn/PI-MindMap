import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

const exercises: string[] = [
  'Corrida - 20 min',
  'Pular corda - 10 min',
  'Burpees - 3x15',
];

const CardioScreen: React.FC = () => {
  return (
    <LinearGradient colors={['#1e1e1e', '#2c2c2c']} style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.title}>Treino de Cardio</Text>
      </View>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        {exercises.map((exercise, index) => (
          <Text key={index} style={styles.text}>
            {`${index + 1}. ${exercise}`}
          </Text>
        ))}
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
});

export default CardioScreen;
