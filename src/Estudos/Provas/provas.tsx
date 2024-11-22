import React, { useState } from "react";
import { View, Text, FlatList, StyleSheet, TextInput, Button, TouchableOpacity } from "react-native";

type Prova = {
  id: number;
  nome: string;
  pendente: boolean;
};

const Provas: React.FC = () => {
  const [provas, setProvas] = useState<Prova[]>([]);
  const [novaProva, setNovaProva] = useState("");

  const handleAddProva = () => {
    if (novaProva.trim() === "") {
      alert("Digite uma prova!");
      return;
    }
    const nova = {
      id: provas.length + 1,
      nome: novaProva,
      pendente: true,
    };
    setProvas([...provas, nova]);
    setNovaProva("");
  };

  const handleTogglePendente = (id: number) => {
    setProvas(
      provas.map((prova) =>
        prova.id === id ? { ...prova, pendente: !prova.pendente } : prova
      )
    );
  };

  const handleRemoveProva = (id: number) => {
    setProvas(provas.filter((prova) => prova.id !== id));
  };

  const renderItem = ({ item }: { item: Prova }) => (
    <View style={styles.provaItem}>
      <TouchableOpacity onPress={() => handleTogglePendente(item.id)}>
        <Text style={[styles.provaText, item.pendente && styles.provaTextPendente]}>
          {item.nome}
        </Text>
      </TouchableOpacity>
      <Button title="Remover" color="#ff4d4d" onPress={() => handleRemoveProva(item.id)} />
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Lista de Provas</Text>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Nova prova"
          value={novaProva}
          onChangeText={setNovaProva}
        />
        <Button title="Adicionar" onPress={handleAddProva} />
      </View>
      <FlatList
        data={provas}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "white",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
    color: 'black',
  },
  inputContainer: {
    flexDirection: "row",
    marginBottom: 20,
    alignItems: "center",
  },
  input: {
    flex: 1,
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
    marginRight: 10,
  },
  provaItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 10,
    backgroundColor: "black",
    borderRadius: 5,
    marginBottom: 10,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  provaText: {
    fontSize: 16,
    color: 'white',
  },
  provaTextPendente: {
    textDecorationLine: "line-through",
    color: "#aaa",
  },
});

export default Provas;
