import { Color, FontFamily, FontSize } from './styles';
import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, StyleSheet, TextInput, Button } from 'react-native';
import * as SQLite from 'expo-sqlite';

interface Prova {
  id: number;
  nome: string;
  pendente: boolean;
}

const Provas: React.FC = () => {
  const [provas, setProvas] = useState<Prova[]>([]);
  const [novaProva, setNovaProva] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      const db = SQLite.openDatabase({ name: 'mydatabase.db' });
      db.transaction((tx) => {
        tx.executeSql('SELECT * FROM provas', [], (_, { rows }) => {
          setProvas(rows._array);
        });
      });
    };

    fetchData();
  }, []);

  const handleAddProva = async () => {
    const db = SQLite.openDatabase({ name: 'mydatabase.db' });
    db.transaction((tx) => {
      tx.executeSql('INSERT INTO provas (nome, pendente) VALUES (?, ?)', [novaProva, true], (_, { insertId }) => {
        setNovaProva('');
        fetchData();
      });
    });
  };

  const handleTogglePendente = async (id: number) => {
    const db = await SQLite.openDatabase({ name: 'mydatabase.db' });
    db.transaction((tx) => {
      tx.executeSql('UPDATE provas SET pendente = NOT pendente WHERE id = ?', [id], () => {
        fetchData();
      });
    });
  };

  const renderItem = ({ item }: { item: Prova }) => (
    <View style={styles.provasTypo}>
      <Text style={styles.provas}>{item.nome}</Text>
      <Button
        title={item.pendente ? 'Concluída' : 'Pendente'}
        onPress={() => handleTogglePendente(item.id)}
        color={item.pendente ? 'green' : 'red'}
      />
    </View>
  );

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Nova prova"
        value={novaProva}
        onChangeText={setNovaProva}
      />
      <Button title="Adicionar" onPress={handleAddProva} />
      <FlatList
        data={provas}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
    provasTypo: {
        textAlign: "center",
        color: Color.colorWhite,
        fontFamily: FontFamily.impact,
        fontSize: FontSize.size_xl,
        position: "absolute",
        transform: [
            {
                rotate: "180deg"
            }
        ]
    },
    provas: {
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
});

export default Provas;
function fetchData() {
    throw new Error('Function not implemented.');
}

