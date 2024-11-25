import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, FlatList } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

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
  const [editId, setEditId] = useState<number | null>(null);

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
    resetForm();
  };

  const handleEditNota = (nota: Nota) => {
    setNome(nota.nome);
    setAv1(nota.av1.toString());
    setAv2(nota.av2.toString());
    setAv3(nota.av3.toString());
    setEditId(nota.id);
  };

  const handleUpdateNota = () => {
    if (editId === null) return;

    const notasAtualizadas = notas.map((nota) =>
      nota.id === editId
        ? { ...nota, nome, av1: parseFloat(av1) || 0, av2: parseFloat(av2) || 0, av3: parseFloat(av3) || 0 }
        : nota
    );

    setNotas(notasAtualizadas);
    resetForm();
  };

  const handleDeleteNota = (id: number) => {
    setNotas(notas.filter((nota) => nota.id !== id));
  };

  const resetForm = () => {
    setNome('');
    setAv1('');
    setAv2('');
    setAv3('');
    setEditId(null);
  };

  const renderItem = ({ item }: { item: Nota }) => (
    <View style={styles.notaItem}>
      <View>
        <Text style={styles.notaText}>{item.nome}</Text>
        <Text style={styles.notaText}>AV1: {item.av1}</Text>
        <Text style={styles.notaText}>AV2: {item.av2}</Text>
        <Text style={styles.notaText}>AV3: {item.av3}</Text>
      </View>
      <View style={styles.buttonsContainer}>
        <Button title="Editar" onPress={() => handleEditNota(item)} color="blue" />
        <Button title="Excluir" onPress={() => handleDeleteNota(item.id)} color="red" />
      </View>
    </View>
  );

  return (
    <LinearGradient
      colors={["#1e1e1e", "#2c2c2c", "#3a3a3a"]}
      style={styles.container}
    >
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
      {editId ? (
        <Button title="Atualizar Nota" onPress={handleUpdateNota} />
      ) : (
        <Button title="Adicionar Nota" onPress={handleAddNota} />
      )}
      <FlatList
        data={notas}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
      />
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  textInput: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 8,
    marginVertical: 5,
    borderRadius: 5,
    color:'white',
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
    color: 'white',
  },
  buttonsContainer: {
    flexDirection: 'row',
    gap: 5,
  },
});

export default Notas;
