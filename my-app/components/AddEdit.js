import { View, Center, Button, AlertDialog, Input } from "native-base";
import { React, useState, useEffect, useRef } from "react";
import { StyleSheet } from "react-native";

const AddEdit = ({ isOpen, setIsOpen }) => {
  const [isAddNewRec, setIsAddNewRec] = useState({
    Fname: "",
    Lname: "",
  });
  const cancelRef = useRef(null);
  
  const handleOnChange = (value, field) => {
    setIsAddNewRec((prevData) => ({ ...prevData, [field]: value }));
  };

  const onClose = () => setIsOpen(false);

  return (
    <Center>
      <AlertDialog
        leastDestructiveRef={cancelRef}
        isOpen={isOpen}
        onClose={onClose}
      >
        <AlertDialog.Content>
          <AlertDialog.CloseButton />
          <AlertDialog.Header>Add New Record</AlertDialog.Header>
          <AlertDialog.Body>
            <View style={styles.textfield}>
              <Input
                variant="rounded"
                placeholder="Fname"
                value={isAddNewRec.Fname}
                onChangeText={(Text) => handleOnChange(Text, "Fname")}
              />
              <Input
                variant="rounded"
                placeholder="Lname"
                value={isAddNewRec.Lname}
                onChangeText={(Text) => handleOnChange(Text, "Lname")}
              />
            </View>
          </AlertDialog.Body>
          <AlertDialog.Footer>
            <Button.Group space={2}>
              <Button
                variant="unstyled"
                colorScheme="coolGray"
                onPress={onClose}
                ref={cancelRef}
              >
                Cancel
              </Button>
              <Button colorScheme="success" onPress={onClose}>
                Save
              </Button>
            </Button.Group>
          </AlertDialog.Footer>
        </AlertDialog.Content>
      </AlertDialog>
    </Center>
  );
};
export default AddEdit;

const styles = StyleSheet.create({
  textfield: {
    gap: 15,
  },
});
