import React from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import ButtonComponent from '../components/ButtonComponent'; 
import SectionTitle from '../components/SectionTitle';
import { NavigationProp } from '@react-navigation/native';

interface HomeScreenProps {
  navigation: NavigationProp<any>;
}

const HomeScreen: React.FC<HomeScreenProps> = ({ navigation }) => {
  return (
    <LinearGradient colors={['#1e1e1e', '#2c2c2c', '#3a3a3a']} style={styles.background}>
      <ScrollView contentContainerStyle={styles.container}>
        <SectionTitle title="Início rápido" />
        <ScrollView horizontal={true} contentContainerStyle={styles.horizontalScroll}>
          <ButtonComponent title="Iniciar Treino" onPress={() => navigation.navigate('TrainingSelection')} />
        </ScrollView>

        <View style={styles.sectionSpacing}>
          <SectionTitle title="Rotinas" />
          <ScrollView horizontal={true} contentContainerStyle={styles.horizontalScroll}>
            <ButtonComponent title="Nova Rotina" onPress={() => navigation.navigate('NewTraining')} />
            <ButtonComponent title="Minhas Rotinas" onPress={() => navigation.navigate('MinhasRotinas')} />
          </ScrollView>
        </View>

        <View style={styles.sectionSpacing}>
          <SectionTitle title="Rotinas Pré-Montadas" />
          <ScrollView horizontal={true} contentContainerStyle={styles.horizontalScroll}>
            <ButtonComponent title="Costas" onPress={() => navigation.navigate('Costas')} />
            <ButtonComponent title="Peito" onPress={() => navigation.navigate('Peito')} />
            <ButtonComponent title="Pernas" onPress={() => navigation.navigate('Pernas')} />
            <ButtonComponent title="Braços" onPress={() => navigation.navigate('Braços')} />
            <ButtonComponent title="Abdômen" onPress={() => navigation.navigate('Abdomen')} />
            <ButtonComponent title="Cardio" onPress={() => navigation.navigate('Cardio')} />
            <ButtonComponent title="Alongamento" onPress={() => navigation.navigate('Alongamento')} />
          </ScrollView>
        </View>
      </ScrollView>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
  },
  container: {
    flexGrow: 1,
    padding: 10,
  },
  horizontalScroll: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  sectionSpacing: {
    marginBottom: 15, 
  },
  buttonSpacing: {
    marginHorizontal: 15,
  },
});

export default HomeScreen;
