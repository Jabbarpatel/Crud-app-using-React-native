import { View, Text, Button } from "native-base";
import {
  StyleSheet,
  DeleteIcon,
  Touchable,
  TouchableOpacity,
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import React from "react";
import AddEdit from "./AddEdit";

const Table = () => {
    const [isOpen, setIsOpen] = React.useState(false);
  const data = [
    { idx: 1, fname: "Jabbar", lname: "Patel" },
    { idx: 2, fname: "Xyz", lname: "Xyz" },
  ];

  const handleDelete = (id) => {
    alert(id);
  };
  return (
    <View style={style.container}>
        <AddEdit isOpen={isOpen} setIsOpen={setIsOpen}/>
      <Button
        variant="solid"
        colorScheme="success"
        style={style.addicon}
        startIcon={<Icon name="plus" />}
        onPress={()=>setIsOpen(true)}
      >
        Add
      </Button>
      <View style={style.tableHeader}>
        <Text style={style.headerText}>Idx</Text>
        <Text style={style.headerText}>Fname</Text>
        <Text style={style.headerText}>Lname</Text>
        <Text style={style.headerText}>Actions</Text>
      </View>
      {data.map((item) => (
        <View style={style.tableBody}>
          <Text style={style.bodyText}>{item.idx}</Text>
          <Text style={style.bodyText}>{item.fname}</Text>
          <Text style={style.bodyText}>{item.lname}</Text>
          <View style={style.icons}>
            <Icon
              name="pencil"
              size={20}
              color="blue"
              onPress={() => handleDelete(item.idx)}
            />
            <Icon
              name="trash"
              size={20}
              color="red"
              onPress={() => handleDelete(item.idx)}
            />
          </View>
        </View>
      ))}
    </View>
  );
};
export default Table;

const style = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 40,
    // justifyContent:'center',
    alignItems: "center",
  },
  tableHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 16,
    backgroundColor: "#e0e0e0",
    height: 40,
    alignItems: "center",
    width: 370,
    gap: 53,
  },
  headerText: {
    fontWeight: "bold",
    fontSize: 16,
  },
  tableBody: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 16,
    backgroundColor: "#e0e0e0",
    height: 40,
    alignItems: "center",
    width: 370,
  },
  bodyText: {
    fontSize: 16,
  },
  icons: {
    flexDirection: "row",
    gap: 15,
  },
  addicon: {
    marginLeft: 300,
    marginBottom: 5,
  },
});
