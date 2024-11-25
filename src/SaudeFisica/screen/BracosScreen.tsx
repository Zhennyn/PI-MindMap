import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

const exercises: string[] = [
  'Rosca direta - 3x12',
  'Rosca concentrada - 3x10',
  'Tríceps francês - 3x12',
];

const BracosScreen: React.FC = () => {
  return (
    <LinearGradient colors={['#1e1e1e', '#2c2c2c']} style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <Text style={styles.title}>Treino de Braços</Text>
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
  },
  scrollContent: {
    flexGrow: 1,  // Permite o conteúdo ocupar o espaço disponível
    justifyContent: 'flex-start', // Começar o conteúdo no topo
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingBottom: 20, // Garantir espaçamento no fundo
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
});

export default BracosScreen;
