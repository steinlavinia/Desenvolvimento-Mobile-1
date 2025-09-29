import React, { useState } from "react";
import { View, TextInput, Button } from "react-native";
import styles from "./styles";

export default function InputProduct({ onAdd }) {
  const [text, setText] = useState("");

  const handleAdd = () => {
    onAdd(text);
    setText("");
  };

  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.input}
        placeholder="Digite um item"
        value={text}
        onChangeText={setText}
      />
      <Button title="Adicionar" onPress={handleAdd} />
    </View>
  );
}