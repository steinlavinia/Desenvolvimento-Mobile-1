import { StyleSheet } from "react-native";

export default StyleSheet.create({
  listContainer: {
    width: "100%",
    marginTop: 10,
  },
  item: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 15,
    marginVertical: 6,
    borderRadius: 12,
    backgroundColor: "#e0aaff",
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    elevation: 3,
  },
  itemText: {
    fontSize: 18,
    color: "#240046",
    fontWeight: "500",
  },
});