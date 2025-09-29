// import { Alert, Button, StyleSheet, Text, TextInput, Touchable, TouchableOpacity, View } from 'react-native';
// import { styles } from "./Style";
// import {Event} from "../../components/Event"

// export default function App() {
//     return (
//         <View style={styles.container}>
//             <Text style={styles.text}>Nome Evento</Text>
//             <View style={styles.form}>
//             <TextInput style={styles.input} placeholder='Digite o Evento' placeholderTextColor={'#fff'}></TextInput>
//             <TouchableOpacity  style={styles.button} /*</View></View>onPress={()=>{Alert.alert("Teste Botão")}}*/>
//                 <Text style={styles.buttonText}>+</Text>
//             </TouchableOpacity>
//             </View>
//             <Event name='Evento Novo'/>
//             <Event name='Evento Cancelado'/>
//         </View>
        
//     )
// }

import React, { useState } from "react";
import {
  Text,
  View,
  TextInput,
  TouchableOpacity,
  FlatList,
} from "react-native";

import { AntDesign } from "@expo/vector-icons";
import { styles } from "./Style";

interface Item {
  id: string;
  nome: string;
}

export default function App() {
  const [item, setItem] = useState<string>("");
  const [lista, setLista] = useState<Item[]>([
    { id: "1", nome: "Maça" },
    { id: "2", nome: "Banana" },
    { id: "3", nome: "Melancia" },
  ]);

  const adicionarItem = () => {
    if (item.trim() === "") return;
    setLista([...lista, { id: Date.now().toString(), nome: item }]);
    setItem("");
  };

  const excluirItem = (id: string) => {
    setLista(lista.filter((item) => item.id !== id));
  };

  const renderItem = ({ item, index }: { item: Item; index: number }) => (
    <View
      style={[
        styles.item,
        index === lista.length - 1 && { borderBottomWidth: 0 },
      ]}
    >
      <AntDesign name="checkcircle" size={20} color="#fff" />
      <Text style={styles.texto}>{item.nome}</Text>

      {/* Botão de excluir */}
      <TouchableOpacity onPress={() => excluirItem(item.id)}>
        <AntDesign name="delete" size={20} color="red" />
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>LISTA DE COMPRAS</Text>

      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Digite o Produto"
          placeholderTextColor="#fff"
          value={item}
          onChangeText={setItem}
        />
        <TouchableOpacity style={styles.botao} onPress={adicionarItem}>
          <AntDesign name="pluscircleo" size={24} color="#fff" />
        </TouchableOpacity>
      </View>

      <View style={styles.listaContainer}>
        <FlatList
          data={lista}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
        />
      </View>
    </View>
  );
}