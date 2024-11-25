import React from 'react';
import { ScrollView, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

interface ExerciseDetail {
  name: string;
  series: number;
  reps: string | number;
  weight: string;
}

interface Exercise {
  title: string;
  description: string;
  lastPerformed: string;
  details: ExerciseDetail[];
}

const exercises: Exercise[] = [
  {
    title: "Costas",
    description: "Exercícios para fortalecer a musculatura das costas.",
    lastPerformed: "2024-11-22",
    details: [
      { name: "Puxada Frente", series: 4, reps: 12, weight: "60kg" },
      { name: "Remada Curvada", series: 4, reps: 10, weight: "70kg" },
      { name: "Pullover", series: 3, reps: 12, weight: "40kg" },
      { name: "Levantamento Terra", series: 4, reps: 8, weight: "90kg" }
    ]
  },
  {
    title: "Peito",
    description: "Exercícios para desenvolver a musculatura peitoral.",
    lastPerformed: "2024-11-21",
    details: [
      { name: "Supino Reto", series: 4, reps: 12, weight: "80kg" },
      { name: "Crucifixo", series: 3, reps: 10, weight: "20kg" },
      { name: "Supino Inclinado", series: 4, reps: 12, weight: "70kg" },
      { name: "Peck Deck", series: 3, reps: 15, weight: "50kg" }
    ]
  },
  {
    title: "Pernas",
    description: "Exercícios para fortalecer e tonificar as pernas.",
    lastPerformed: "2024-11-20",
    details: [
      { name: "Agachamento", series: 4, reps: 12, weight: "100kg" },
      { name: "Leg Press", series: 3, reps: 15, weight: "200kg" },
      { name: "Cadeira Extensora", series: 4, reps: 12, weight: "60kg" },
      { name: "Cadeira Flexora", series: 4, reps: 12, weight: "50kg" }
    ]
  },
  {
    title: "Braços",
    description: "Exercícios para fortalecer bíceps, tríceps e antebraços.",
    lastPerformed: "2024-11-19",
    details: [
      { name: "Rosca Direta", series: 4, reps: 12, weight: "30kg" },
      { name: "Tríceps Testa", series: 3, reps: 12, weight: "25kg" },
      { name: "Rosca Concentrada", series: 4, reps: 10, weight: "15kg" },
      { name: "Tríceps Corda", series: 3, reps: 15, weight: "20kg" }
    ]
  },
  {
    title: "Abdômen",
    description: "Exercícios para fortalecer a região abdominal.",
    lastPerformed: "2024-11-18",
    details: [
      { name: "Abdominal Reto", series: 4, reps: 20, weight: "0kg" },
      { name: "Prancha", series: 3, reps: "1 min", weight: "0kg" },
      { name: "Abdominal Oblíquo", series: 4, reps: 15, weight: "0kg" },
      { name: "Elevação de Pernas", series: 3, reps: 12, weight: "0kg" }
    ]
  },
  {
    title: "Cardio",
    description: "Exercícios para melhorar o condicionamento cardiovascular.",
    lastPerformed: "2024-11-17",
    details: [
      { name: "Corrida", series: 1, reps: "30 min", weight: "0kg" },
      { name: "Bicicleta", series: 1, reps: "20 min", weight: "0kg" },
      { name: "Caminhada", series: 1, reps: "40 min", weight: "0kg" },
      { name: "Pular Corda", series: 1, reps: "15 min", weight: "0kg" }
    ]
  },
  {
    title: "Alongamento",
    description: "Exercícios para alongar e relaxar a musculatura.",
    lastPerformed: "2024-11-16",
    details: [
      { name: "Alongamento Perna", series: 3, reps: "30 seg", weight: "0kg" },
      { name: "Alongamento Braço", series: 3, reps: "30 seg", weight: "0kg" },
      { name: "Alongamento Tronco", series: 3, reps: "30 seg", weight: "0kg" },
      { name: "Alongamento Pescoço", series: 3, reps: "30 seg", weight: "0kg" }
    ]
  },
];

type RootStackParamList = {
  RotinaDetalhes: { exercise: Exercise };
  MinhasRotinas: undefined;
};

type MinhasRotinasScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'MinhasRotinas'
>;

interface MinhasRotinasScreenProps {
  navigation: MinhasRotinasScreenNavigationProp;
}

const MinhasRotinasScreen: React.FC<MinhasRotinasScreenProps> = ({ navigation }) => {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Minhas Rotinas</Text>
      {exercises.map((exercise, index) => (
        <TouchableOpacity key={index} style={styles.section} onPress={() => navigation.navigate('RotinaDetalhes', { exercise })}>
          <Text style={styles.sectionTitle}>{exercise.title}</Text>
          <Text style={styles.sectionText}>{exercise.description}</Text>
          <Text style={styles.sectionDate}>Última execução: {exercise.lastPerformed}</Text>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1e1e1e',
    padding: 16,
  },
  title: {
    color: '#fff',
    fontSize: 24,
    marginBottom: 20,
  },
  section: {
    marginVertical: 8,
    padding: 16,
    backgroundColor: '#333',
    borderRadius: 8,
  },
  sectionTitle: {
    fontSize: 24,
    color: '#fff',
    marginBottom: 8,
  },
  sectionText: {
    fontSize: 16,
    color: '#ccc',
  },
  sectionDate: {
    fontSize: 14,
    color: '#aaa',
    marginTop: 8,
  },
});

export default MinhasRotinasScreen;
