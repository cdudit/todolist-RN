import React from "react";
import { StyleSheet, Text, View, TextInput, Button } from "react-native";

import screenStyles from "./ScreenStyles"

const addTodoStyles = StyleSheet.create({
  input: {
    borderWidth: 1,
    borderRadius: 12,
    padding: 16,
    marginBottom: 12
  },
  button: {}
});

const AddTodo = () => {
  return (
    <View style={screenStyles.container}>
      <Text style={screenStyles.title}>Add ✍🏽</Text>
      <TextInput style={addTodoStyles.input} />
      <Button style={addTodoStyles.button} title="Let's go" />
    </View>
  );
};

export default AddTodo;