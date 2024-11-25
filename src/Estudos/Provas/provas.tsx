import { LinearGradient } from "expo-linear-gradient";
import React, { useState } from "react";
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  TextInput,
  Button,
  TouchableOpacity,
} from "react-native";

type Prova = {
  id: number;
  nome: string;
  pendente: boolean;
};

const Provas: React.FC = () => {
  const [provas, setProvas] = useState<Prova[]>([]);
  const [novaProva, setNovaProva] = useState("");
  const [editId, setEditId] = useState<number | null>(null);

  const handleAddOrEditProva = () => {
    if (novaProva.trim() === "") {
      alert("Digite uma prova!");
      return;
    }

    if (editId !== null) {
      setProvas(
        provas.map((prova) =>
          prova.id === editId ? { ...prova, nome: novaProva } : prova
        )
      );
      resetForm();
    } else {
      const nova = {
        id: provas.length + 1,
        nome: novaProva,
        pendente: true,
      };
      setProvas([...provas, nova]);
      setNovaProva("");
    }
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

  const handleEditProva = (prova: Prova) => {
    setNovaProva(prova.nome);
    setEditId(prova.id);
  };

  const resetForm = () => {
    setNovaProva("");
    setEditId(null);
  };

  const renderItem = ({ item }: { item: Prova }) => (
    <LinearGradient
      colors={["#1e1e1e", "#2c2c2c", "#3a3a3a"]}
      style={styles.gradient}
    >
      <View style={styles.provaItem}>
        <TouchableOpacity onPress={() => handleTogglePendente(item.id)}>
          <Text
            style={[
              styles.provaText,
              item.pendente && styles.provaTextPendente,
            ]}
          >
            {item.nome}
          </Text>
        </TouchableOpacity>
        <View style={styles.buttonGroup}>
          <Button title="Editar" color="blue" onPress={() => handleEditProva(item)} />
          <Button
            title="Remover"
            color="#ff4d4d"
            onPress={() => handleRemoveProva(item.id)}
          />
        </View>
      </View>
    </LinearGradient>
  );

  return (
    <LinearGradient
      colors={["#1e1e1e", "#2c2c2c", "#3a3a3a"]}
      style={styles.container}
    >
      <Text style={styles.title}>Lista de Provas</Text>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Nova prova"
          value={novaProva}
          onChangeText={setNovaProva}
        />
        <Button
          title={editId !== null ? "Atualizar" : "Adicionar"}
          onPress={handleAddOrEditProva}
        />
      </View>
      <FlatList
        data={provas}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
      />
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  gradient: {
    flex: 1,
  },
  container: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
    color: "white",
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
    shadowRadius: 15,
    elevation: 3,
  },
  provaText: {
    fontSize: 16,
    color: "white",
  },
  provaTextPendente: {
    textDecorationLine: "line-through",
    color: "#aaa",
  },
  buttonGroup: {
    flexDirection: "row",
    gap: 10,
  },
});

export default Provas;
