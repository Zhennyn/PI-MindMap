import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, FlatList } from 'react-native';

type Nota = {
  id: number;
  nome: string;
  av1: number;
  av2: number;
  av3: number;
};

const Notas: React.FC = () => {
  const [notas, setNotas] = useState<Nota[]>([]);
  const [nome, setNome] = useState('');
  const [av1, setAv1] = useState<string>('');
  const [av2, setAv2] = useState<string>('');
  const [av3, setAv3] = useState<string>('');

  const handleAddNota = () => {
    if (!nome.trim()) {
      alert('Por favor, preencha o nome da prova.');
      return;
    }

    const novaNota: Nota = {
      id: notas.length + 1,
      nome,
      av1: parseFloat(av1) || 0,
      av2: parseFloat(av2) || 0,
      av3: parseFloat(av3) || 0,
    };

    setNotas([...notas, novaNota]);
    setNome('');
    setAv1('');
    setAv2('');
    setAv3('');
  };

  const handleDeleteNota = (id: number) => {
    setNotas(notas.filter((nota) => nota.id !== id));
  };

  const renderItem = ({ item }: { item: Nota }) => (
    <View style={styles.notaItem}>
      <View>
        <Text style={styles.notaText}>{item.nome}</Text>
        <Text style={styles.notaText}>AV1: {item.av1}</Text>
        <Text style={styles.notaText}>AV2: {item.av2}</Text>
        <Text style={styles.notaText}>AV3: {item.av3}</Text>
      </View>
      <Button title="Delete" onPress={() => handleDeleteNota(item.id)} color="red" />
    </View>
  );

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.textInput}
        placeholder="Nome da prova"
        value={nome}
        onChangeText={setNome}
      />
      <TextInput
        style={styles.textInput}
        placeholder="AV1"
        keyboardType="numeric"
        value={av1}
        onChangeText={setAv1}
      />
      <TextInput
        style={styles.textInput}
        placeholder="AV2"
        keyboardType="numeric"
        value={av2}
        onChangeText={setAv2}
      />
      <TextInput
        style={styles.textInput}
        placeholder="AV3"
        keyboardType="numeric"
        value={av3}
        onChangeText={setAv3}
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
    backgroundColor: '#f5f5f5',
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
    backgroundColor: '#1E1E1E',
    marginTop: 10,
  },
  notaText: {
    fontSize: 16,
    color:'white',
  },
});

export default Notas;
