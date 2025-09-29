import React from "react";
import { View, Text, Button } from "react-native";
import styles from "./styles";

export default function ShoppingList({ items, onRemove }) {
  return (
    <View style={styles.listContainer}>
      {items.map((item, index) => (
        <View key={index} style={styles.item}>
          <Text style={styles.itemText}>{item}</Text>
          <Button title="Excluir" onPress={() => onRemove(index)} />
        </View>
      ))}
    </View>
  );
}