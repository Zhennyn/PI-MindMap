import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { RouteProp } from '@react-navigation/native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

interface ExerciseDetail {
  name: string;
  series: number;
  reps: string | number;
  weight: string;
}

interface Exercise {
  title: string;
  lastPerformed: string;
  details: ExerciseDetail[];
}

type RootStackParamList = {
  RotinaDetalhes: { exercise: Exercise };
};

type RotinaDetalhesScreenRouteProp = RouteProp<RootStackParamList, 'RotinaDetalhes'>;
type RotinaDetalhesScreenNavigationProp = NativeStackScreenProps<RootStackParamList, 'RotinaDetalhes'>['navigation'];

interface RotinaDetalhesScreenProps {
  route: RotinaDetalhesScreenRouteProp;
  navigation: RotinaDetalhesScreenNavigationProp;
}

const RotinaDetalhesScreen: React.FC<RotinaDetalhesScreenProps> = ({ route }) => {
  const { exercise } = route.params;

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>{exercise.title}</Text>
      <Text style={styles.lastPerformed}>Última execução: {exercise.lastPerformed}</Text>
      <View style={styles.details}>
        {exercise.details.map((detail, index) => (
          <View key={index} style={styles.detail}>
            <Text style={styles.detailName}><Text style={styles.bold}>Nome:</Text> {detail.name}</Text>
            <Text style={styles.detailInfo}><Text style={styles.bold}>Séries:</Text> {detail.series}</Text>
            <Text style={styles.detailInfo}><Text style={styles.bold}>Repetições:</Text> {detail.reps}</Text>
            <Text style={styles.detailInfo}><Text style={styles.bold}>Carga:</Text> {detail.weight}</Text>
          </View>
        ))}
      </View>
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
    fontWeight: 'bold',
  },
  lastPerformed: {
    fontSize: 16,
    color: '#aaa',
    marginBottom: 20,
  },
  details: {
    marginTop: 20,
  },
  detail: {
    marginBottom: 20,
  },
  detailName: {
    fontSize: 20,
    color: '#fff',
    marginBottom: 5,
  },
  detailInfo: {
    fontSize: 16,
    color: '#ccc',
  },
  bold: {
    fontWeight: 'bold',
  },
});

export default RotinaDetalhesScreen;
