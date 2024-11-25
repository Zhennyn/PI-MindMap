import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';  // Certifique-se de que esta dependência está instalada

const exercises: string[] = [
  'Alongamento de pernas - 3x30s',
  'Alongamento de braços - 3x30s',
  'Alongamento de tronco - 3x30s',
];

const AlongamentoScreen: React.FC = () => {
  return (
    <LinearGradient colors={['#1e1e1e', '#2c2c2c']} style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <Text style={styles.title}>Treino de Alongamento</Text>
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
    justifyContent: 'flex-start', // Garantir que o conteúdo esteja alinhado ao topo
    alignItems: 'center',
    paddingTop: 20, // Espaçamento no topo da tela
  },
  scrollContent: {
    paddingHorizontal: 20,
    paddingBottom: 20, // Adiciona espaçamento no fundo
    alignItems: 'center',
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

export default AlongamentoScreen;
