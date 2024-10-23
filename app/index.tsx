// // src/screens/index.tsx
import React from 'react';
import { ScrollView, View, StyleSheet } from 'react-native';
import { HelloUser } from '../exercices/HelloUser';
import { Counter } from '../exercices/counter';
// import { ProfileCard } from '../exercises/ProfileCard';
// import { TodoList } from '../exercises/TodoList';

export default function Index() {
  return (
    <ScrollView style={styles.container}>
      {/* Exercice 1: Hello User */}
      <View style={styles.exerciseContainer}>
        <HelloUser nom="John" age={25} />
      </View>

      {/* Exercice 2: Counter */}
      <View style={styles.exerciseContainer}>
        <Counter />
      </View>

     
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  exerciseContainer: {
    marginVertical: 10,
    padding: 10,
  },
});