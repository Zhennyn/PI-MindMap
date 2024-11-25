import * as React from 'react';
import { Text, StyleSheet, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Color, FontFamily, FontSize } from './styles';
import { NavigationProp } from '@react-navigation/native';


type MultiSrcProps = {
    navigation: NavigationProp<any>;
};

const MultiScr: React.FC<MultiSrcProps> = ({ navigation }) => {

    const navigateToEstudosTela = () => {
        navigation.navigate('Estudos');
    };

    const navigateToTarefasTela = () => {
        navigation.navigate('Tarefas')
    };
    const navigateToSaudeTela = () => {
        navigation.navigate('Home')
    };

    return (
        <LinearGradient
            style={styles.estudos}
            locations={[0, 0.5, 1]}
            colors={['#333', 'rgba(34, 34, 34, 0.7)', 'rgba(17, 17, 17, 0.07)']}
        >
         
            <TouchableOpacity onPress={navigateToSaudeTela} style={styles.button}>
                <Text style={[styles.buttonText]}>Saúde Fisica</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={navigateToTarefasTela} style={styles.button}>
                <Text style={[styles.buttonText]}>Tarefas</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={navigateToEstudosTela} style={styles.button}>
                <Text style={styles.buttonText}>Estudos</Text> 
            </TouchableOpacity>
        </LinearGradient>
    );
};

const styles = StyleSheet.create({
    multiLayout: {
        height: 195,
        width: 248,
        position: "absolute"
    },
    multiScrItemLayout: {
        height: 101,
        width: 131,
        backgroundColor: 'black',
        position: "absolute",
        transform: [
            {
                rotate: "180deg"
            }
        ]
    },
    button: {
        borderRadius: 30,
        backgroundColor: 'black',
        padding: 35,
        top: 250,
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
    multiScrChild: {
        top: -144,
        left: -193
    },
    multiScrItem: {
        top: 179,
        left: 111
    },
    multiScrInner: {
        top: -914,
        left: -554
    },
    rectangleView: {
        top: 949,
        left: 472
    },
    multiScr: {
        flex: 1,
        width: "100%",
        height: 932,
        overflow: "hidden",
        opacity: 0.90,
        backgroundColor: '#000000',
        transform: [
            {
                rotate: "180deg"
            }
        ]
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
        top: 70, // Posiciona o ícone próximo ao rodapé
        right: 0, // Alinha o ícone à direita
    },
});

export default MultiScr;
