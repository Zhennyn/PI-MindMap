import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

const exercises: string[] = [
  'Supino reto - 3x12',
  'Supino inclinado - 3x10',
  'Crucifixo - 3x12',
];

const PeitoScreen: React.FC = () => {
  return (
    <LinearGradient colors={['#1e1e1e', '#2c2c2c']} style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <Text style={styles.title}>Treino de Peito</Text>
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
    flex: 1,  // Garantir que o LinearGradient ocupe toda a tela
  },
  scrollContent: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
    flexGrow: 1,  // Garante que o conteúdo dentro do ScrollView ocupe o espaço necessário
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

export default PeitoScreen;
