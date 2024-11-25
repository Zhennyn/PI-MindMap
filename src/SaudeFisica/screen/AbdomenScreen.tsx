import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

const AbdomenScreen: React.FC = () => {
  return (
    <LinearGradient colors={['#1e1e1e', '#2c2c2c']} style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <Text style={styles.title}>Treino de Abdômen</Text>
        <Text style={styles.text}>1. Abdominal crunch - 3x15</Text>
        <Text style={styles.text}>2. Elevação de pernas - 3x12</Text>
        <Text style={styles.text}>3. Prancha - 3x30s</Text>
      </ScrollView>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingTop: 20,
  },
  scrollContent: {
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingBottom: 20,
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

export default AbdomenScreen;
