import React from "react";
import { View, Text, StyleSheet } from 'react-native'; 

interface HelloUserProps{
    nom: string;
    age?: number;//prop optionnelle
}
export const HelloUser: React.FC<HelloUserProps> = ({ nom, age }) => {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>
        Hello {nom}{age ? `, ${age} ans` : ''}!
      </Text>
      </View>
    );
  };

  const styles = StyleSheet.create({
    container: {
      padding: 16,
      alignItems: 'center',
      backgroundColor: '#f5f5f5',
    },
    text: {
      fontSize: 18,
      color: '#333',
      fontWeight: '500',
    },
  });