import React, { useState } from "react";
import { View, Text, TextInput, Button, FlatList, TouchableOpacity, StyleSheet } from "react-native";

type Todo = {
    id: number;
    text: string;
    done: boolean;
};

const TodoApp: React.FC = () => {
    const [todos, setTodos] = useState<Todo[]>([]);
    const [inputValue, setInputValue] = useState<string>("");

    const addTodo = () => {
        if (inputValue.trim() === "") {
            alert("Digite uma tarefa!");
            return;
        }
        const newTodo: Todo = {
            id: todos.length + 1,
            text: inputValue,
            done: false,
        };
        setTodos([...todos, newTodo]);
        setInputValue("");
    };

    const toggleTodo = (id: number) => {
        setTodos(
            todos.map((todo) =>
                todo.id === id ? { ...todo, done: !todo.done } : todo
            )
        );
    };

    const removeTodo = (id: number) => {
        setTodos(todos.filter((todo) => todo.id !== id));
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>To-Do List</Text>

            <View style={styles.inputContainer}>
                <TextInput
                    style={styles.input}
                    value={inputValue}
                    onChangeText={setInputValue}
                    placeholder="Digite uma tarefa"
                />
                <Button title="Adicionar" onPress={addTodo} />
            </View>

            <FlatList
                data={todos}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => (
                    <View style={styles.todoItem}>
                        <TouchableOpacity onPress={() => toggleTodo(item.id)}>
                            <Text
                                style={[
                                    styles.todoText,
                                    item.done && styles.todoTextDone,
                                ]}
                            >
                                {item.text}
                            </Text>
                        </TouchableOpacity>
                        <Button
                            title="Remover"
                            color="#ff4d4d"
                            onPress={() => removeTodo(item.id)}
                        />
                    </View>
                )}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: "#f5f5f5",
    },
    title: {
        fontSize: 24,
        fontWeight: "bold",
        marginBottom: 20,
        textAlign: "center",
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
    todoItem: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        padding: 10,
        backgroundColor: "#fff",
        borderRadius: 5,
        marginBottom: 10,
        shadowColor: "#000",
        shadowOpacity: 0.1,
        shadowRadius: 5,
        elevation: 3,
    },
    todoText: {
        fontSize: 16,
    },
    todoTextDone: {
        textDecorationLine: "line-through",
        color: "#aaa",
    },
});

export default TodoApp;
