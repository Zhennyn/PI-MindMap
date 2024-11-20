import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Button, StyleSheet, FlatList } from 'react-native';
import * as SQLite from 'expo-sqlite';

interface Nota {
  id: number;
  nome: string;
  av1: number;
  av2: number;
  av3: number;
}

const databaseName = 'notas.db';
const databaseTable = 'notas';

const Notas: React.FC = () => {
  const [notas, setNotas] = useState<Nota[]>([]);
  const [nome, setNome] = useState('');
  const [av1, setAv1] = useState<number | string>('');
  const [av2, setAv2] = useState<number | string>('');
  const [av3, setAv3] = useState<number | string>('');

  useEffect(() => {
    const initDatabase = async () => {
      const db = SQLite.openDatabase(databaseName);
      db.transaction((tx: { executeSql: (arg0: string) => void; }) => {
        tx.executeSql(
          `CREATE TABLE IF NOT EXISTS ${databaseTable} (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            nome TEXT NOT NULL,
            av1 REAL,
            av2 REAL,
            av3 REAL
          );`
        );
      });
    };

    const fetchData = async () => {
      const db = SQLite.openDatabase(databaseName);
      db.transaction((tx: { executeSql: (arg0: string, arg1: never[], arg2: (_: any, { rows }: { rows: any; }) => void) => void; }) => {
        tx.executeSql(`SELECT * FROM ${databaseTable}`, [], (_: any, { rows }: any) => {
          setNotas(rows._array);
        });
      });
    };

    initDatabase();
    fetchData();
  }, []);

  const handleAddNota = () => {
    if (!nome.trim()) {
      alert('Por favor, preencha o nome da nota.');
      return;
    }

    const db = SQLite.openDatabase(databaseName);
    db.transaction((tx: { executeSql: (arg0: string, arg1: (string | number)[], arg2: { (): void; (_: any, { rows }: { rows: any; }): void; }) => void; }) => {
      tx.executeSql(
        `INSERT INTO ${databaseTable} (nome, av1, av2, av3) VALUES (?, ?, ?, ?)`,
        [nome, parseFloat(av1) || 0, parseFloat(av2) || 0, parseFloat(av3) || 0],
        () => {
          setNome('');
          setAv1('');
          setAv2('');
          setAv3('');
          tx.executeSql(`SELECT * FROM ${databaseTable}`, [], (_: any, { rows }: any) => {
            setNotas(rows._array);
          });
        }
      );
    });
  };

  const handleDeleteNota = (id: number) => {
    const db = SQLite.openDatabase(databaseName);
    db.transaction((tx: { executeSql: (arg0: string, arg1: number[], arg2: { (): void; (_: any, { rows }: { rows: any; }): void; }) => void; }) => {
      tx.executeSql(`DELETE FROM ${databaseTable} WHERE id = ?`, [id], () => {
        tx.executeSql(`SELECT * FROM ${databaseTable}`, [], (_: any, { rows }: any) => {
          setNotas(rows._array);
        });
      });
    });
  };

  const renderItem = ({ item }: { item: Nota }) => (
    <View style={styles.notaItem}>
      <Text style={styles.notaText}>{item.nome}</Text>
      <Text style={styles.notaText}>AV1: {item.av1}</Text>
      <Text style={styles.notaText}>AV2: {item.av2}</Text>
      <Text style={styles.notaText}>AV3: {item.av3}</Text>
      <Button title="Delete" onPress={() => handleDeleteNota(item.id)} color="red" />
    </View>
  );

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.textInput}
        placeholder="Nome da Nota"
        value={nome}
        onChangeText={setNome}
      />
      <TextInput
        style={styles.textInput}
        placeholder="AV1"
        keyboardType="numeric"
        value={av1.toString()}
        onChangeText={(text) => setAv1(text)}
      />
      <TextInput
        style={styles.textInput}
        placeholder="AV2"
        keyboardType="numeric"
        value={av2.toString()}
        onChangeText={(text) => setAv2(text)}
      />
      <TextInput
        style={styles.textInput}
        placeholder="AV3"
        keyboardType="numeric"
        value={av3.toString()}
        onChangeText={(text) => setAv3(text)}
      />
      <Button title="Adicionar Nota" onPress={handleAddNota} />
      <FlatList
        data={notas}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: 'gray',
  },
  textInput: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 8,
    marginVertical: 5,
    borderRadius: 5,
  },
  notaItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
    padding: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
  },
  notaText: {
    fontSize: 16,
  },
});

export default Notas;
