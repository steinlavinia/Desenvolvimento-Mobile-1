// import { StyleSheet } from "react-native";

// export const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         backgroundColor: '#000',
//         paddingTop: 50,
//         padding: 16
//     },

//     text: {
//         color: '#fff',
//         fontSize: 36,
//     },

//     input: {
//         backgroundColor: "#1f1e25",
//         borderRadius: 8,
//         height: 56,
//         marginTop: 30,
//         flex: 1
//     },  
	
//     buttonText: {
//         color: "fff",
//         fontSize: 20
//     },

//     button: {
//         backgroundColor:"#7b2cbf",
//         width:56,
//         height: 56,
//         borderRadius: 8,
//         alignItems: "center",
//         justifyContent: "center",
//         marginTop: 30
//     },
	
//     form: {
//         width:"100%",
//         flexDirection: "row"
//     }
// })

import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#cad5df", 
    paddingTop: 60,
    paddingHorizontal: 20,
  },

  titulo: {
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 20,
    color: "#7d9ab3",
    textAlign: "center",
  },

  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
  },

  input: {
    flex: 1,
    backgroundColor: "#7d9ab3", 
    padding: 12,
    borderRadius: 8,
    color: "#fff",
    fontSize: 16,
  },

  botao: {
    marginLeft: 10,
    backgroundColor: "#7d9ab3",
    padding: 12,
    borderRadius: 8,
  },

  listaContainer: {
    flex: 1, 
    borderWidth: 3, 
    borderColor: "#fff",
    borderRadius: 20,
    padding: 10,
    backgroundColor: "#7d9ab3", 
  },

  item: {
    flexDirection: "row",
    alignItems: "center",
    padding: 12,
    borderBottomWidth: 1,
    borderBottomColor: "#fff",
  },

  texto: {
    marginLeft: 10,
    fontSize: 18,
    fontWeight: "bold",
    color: "#fff",
  },
	
botaoExcluir: {
	backgroundColor: '#ff4d4d',
	padding: 8,
	borderRadius: 5,
},
	
botaoTexto: {
	color: '#fff',
	fontWeight: 'bold',
},
});
