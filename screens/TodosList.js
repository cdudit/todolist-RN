import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, ActivityIndicator, ScrollView, Switch } from 'react-native';

// You can import from local files
import screenStyles from './ScreenStyles'

// or any pure javascript modules available in npm
import { Card } from 'react-native-paper';

export default function TodosList() {
  const [loading, setLoading] = useState(true);
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then(response => response.json())
      .then(data => {
        setTodos(data);
        setLoading(false);
      });
  }, [])

  return (
    <View style={screenStyles.container}>
      <Text style={screenStyles.title}>
        To do:
      </Text>
      <ScrollView>
        {loading ? <ActivityIndicator /> : todos.map((todo) => (
          <Card style={[
            screenStyles.padding,
            screenStyles.marginBottom,
            todo.completed ? styles.cardCompleted : undefined
          ]}>
            <Text style={[
              screenStyles.contentText,
              todo.completed ? styles.todoCompleted : undefined
            ]}>
              {todo.title}
            </Text>
          </Card>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  todoCompleted: {
    textDecorationLine: "line-through"
  },
  cardCompleted: {
    backgroundColor: "lightgrey"
  }
});
