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
        <View style={[styles.buttonContainer, styles.containerSpacing]}>
          <ButtonComponent title="Iniciar Treino" onPress={() => navigation.navigate('TrainingSelection')} />
        </View>

        <View style={[styles.sectionSpacing, styles.containerSpacing]}>
          <SectionTitle title="Rotinas" />
          <ScrollView horizontal={true} contentContainerStyle={styles.horizontalScroll}>
            <View style={styles.buttonSpacing}>
              <ButtonComponent title="Nova Rotina" onPress={() => navigation.navigate('NewTraining')} />
            </View>
            <View style={styles.buttonSpacing}>
              <ButtonComponent title="Explorar" onPress={() => navigation.navigate('MinhasRotinas')} />
            </View>
          </ScrollView>
        </View>

        <View style={[styles.sectionSpacing, styles.containerSpacing]}>
          <SectionTitle title="Rotinas Pré-Montadas" />
          <ScrollView horizontal={true} contentContainerStyle={styles.horizontalScroll}>
            <View style={styles.buttonSpacing}>
              <ButtonComponent title="Costas" onPress={() => navigation.navigate('Costas')} />
            </View>
            <View style={styles.buttonSpacing}>
              <ButtonComponent title="Peito" onPress={() => navigation.navigate('Peito')} />
            </View>
            <View style={styles.buttonSpacing}>
              <ButtonComponent title="Pernas" onPress={() => navigation.navigate('Pernas')} />
            </View>
            <View style={styles.buttonSpacing}>
              <ButtonComponent title="Braços" onPress={() => navigation.navigate('Bracos')} />
            </View>
            <View style={styles.buttonSpacing}>
              <ButtonComponent title="Abdômen" onPress={() => navigation.navigate('Abdomen')} />
            </View>
            <View style={styles.buttonSpacing}>
              <ButtonComponent title="Cardio" onPress={() => navigation.navigate('Cardio')} />
            </View>
            <View style={styles.buttonSpacing}>
              <ButtonComponent title="Alongamento" onPress={() => navigation.navigate('Alongamento')} />
            </View>
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
    justifyContent: 'flex-start',
  },
  buttonContainer: {
    marginBottom: 20, 
  },
  horizontalScroll: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  sectionSpacing: {
    marginBottom: 10, 
  },
  containerSpacing: {
    marginHorizontal: 15,
  },
  buttonSpacing: {
    marginHorizontal: 5,
  },
});

export default HomeScreen;
