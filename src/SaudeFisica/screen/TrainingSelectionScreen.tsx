import React, { useState } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { LinearGradient } from 'expo-linear-gradient';

type Training = {
  label: string;
  value: string;
};

type RootStackParamList = {
  AddExercise: { trainingType: string; exercises: any[] };
  TrainingSelection: undefined;
};

type TrainingSelectionScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'TrainingSelection'
>;

interface TrainingSelectionScreenProps {
  navigation: TrainingSelectionScreenNavigationProp;
}

const trainings: Training[] = [
  { label: 'Costas', value: 'Costas' },
  { label: 'Peito', value: 'Peito' },
  { label: 'Pernas', value: 'Pernas' },
  { label: 'Braços', value: 'Braços' },
  { label: 'Abdômen', value: 'Abdômen' },
  { label: 'Cardio', value: 'Cardio' },
  { label: 'Alongamento', value: 'Alongamento' },
];

const TrainingSelectionScreen: React.FC<TrainingSelectionScreenProps> = ({ navigation }) => {
  const [selectedTraining, setSelectedTraining] = useState<string>('');

  const handleStartTraining = () => {
    if (selectedTraining) {
      navigation.navigate('AddExercise', { trainingType: selectedTraining, exercises: [] });
    } else {
      alert('Por favor, selecione um tipo de treino.');
    }
  };

  return (
    <LinearGradient colors={['#1e1e1e', '#2c2c2c', '#3a3a3a']} style={styles.background}>
      <View style={styles.container}>
        <Text style={styles.title}>Selecione o Tipo de Treino</Text>
        <Picker
          selectedValue={selectedTraining}
          style={styles.picker}
          onValueChange={(itemValue) => setSelectedTraining(itemValue)}
        >
          {trainings.map((training) => (
            <Picker.Item key={training.value} label={training.label} value={training.value} color="#ffffff" />
          ))}
        </Picker>
        <View style={styles.buttonContainer}>
          <Button title="Iniciar Treino" onPress={handleStartTraining} color="#ffffff" />
        </View>
      </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
    color: '#FFFFFF', 
  },
  picker: {
    height: 50,
    width: '100%',
    marginBottom: 20,
    color: '#FFFFFF', 
  },
  buttonContainer: {
    marginTop: 150,
  },
});

export default TrainingSelectionScreen;
