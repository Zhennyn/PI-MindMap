import * as React from 'react';
import { Text, StyleSheet, Linking, TouchableOpacity, View,  } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Color, FontFamily, FontSize } from './styles';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { NavigationProp } from '@react-navigation/native';


type EstudosProps = {
  navigation: NavigationProp<any>;
};

const Estudos: React.FC<EstudosProps> = ({ navigation }) => {
  const openGoogleCalendar = () => {
    const url = 'https://calendar.google.com/calendar/u/0/r'; // URL do Google Calendar
    Linking.openURL(url).catch(err =>
      console.error('Erro ao abrir o Google Calendar:', err)
    );
  };

  const navigateToNotasTela = () => {
    navigation.navigate('Notas');
  };
  const navigateToProvasTela = () => {
    navigation.navigate('Provas');
  };

  return (
    <LinearGradient
      style={styles.estudos}
      locations={[0, 0.5, 1]}
      colors={['#333', 'rgba(34, 34, 34, 0.7)', 'rgba(17, 17, 17, 0.07)']}
    >
      <TouchableOpacity onPress={openGoogleCalendar} style={styles.button}>
        <Text style={styles.buttonText}>Agenda</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={navigateToNotasTela} style={styles.button}>
        <Text style={styles.buttonText}>Notas</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={navigateToProvasTela} style={styles.button}>
        <Text style={styles.buttonText}>Provas Pendentes</Text>
      </TouchableOpacity>

      {/* Ícone para redirecionar para o Google Calendar */}
      <View style={styles.iconContainer}>
        <TouchableOpacity onPress={openGoogleCalendar}>
          <Icon name="event" size={300} color="#ffffff" /> {/* Ícone de calendário */}
        </TouchableOpacity>
      </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  button: {
    borderRadius: 30,
    backgroundColor: 'black',
    padding: 35,
    top: 280,
    width: 266,
    height: 100,
    left: 60,
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 15,
    boxShadow: 'black 0px 0px 30px',
  },
  buttonText: {
    color: Color.colorWhite,
    fontFamily: FontFamily.impact,
    fontSize: FontSize.size_xl,
    textAlign: 'center',
  },
  estudos: {
    flex: 1,
    width: '100%',
    height: 932,
    overflow: 'hidden',
    opacity: 0.9,
    backgroundColor: '#000000',
  },
  iconContainer: {
    position: 'absolute',
    top: 10,
    right: 50,
  },
});

export default Estudos;
