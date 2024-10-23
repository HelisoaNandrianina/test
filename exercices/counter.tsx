// import React, { useState } from 'react';
// import { View, Text, Button, StyleSheet } from 'react-native';

// export const Counter: React.FC = () =>{
//     // Initialisation du state avec TypeScript
//   const [count, setCount] = useState<number>(0);

//   // Fonctions pour gérer l'incrémentation et la décrémentation
//   const increment = () => setCount(prev => prev + 1);
//   const decrement = () => setCount(prev => prev - 1);

//   return(
//     <view style={styles.counterContainer}>
//         <Text style={styles.counterText}>Compteur: {count}</Text>
//         <view style={styles.buttonContainer}>
//         <Button title="-" onPress={decrement} />
//         <Button title="+" onPress={increment} />
//         </view>
//     </view>
//   );
// }

// const styles = StyleSheet.create({
//     counterContainer: {
//       padding: 20,
//       alignItems: 'center',
//     },
//     counterText: {
//       fontSize: 24,
//       marginBottom: 20,
//     },
//     buttonContainer: {
//       flexDirection: 'row',
//       gap: 20,
//     },
//   });
import React, { useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

export const Counter: React.FC = () => {
  // Initialisation du state avec TypeScript
  const [count, setCount] = useState<number>(0);

  // Fonctions pour gérer l'incrémentation et la décrémentation
  const increment = () => setCount(prev => prev + 1);
  const decrement = () => setCount(prev => prev - 1);

  return (
    <View style={styles.counterContainer}>
      <Text style={styles.counterText}>Compteur: {count}</Text>
      <View style={styles.buttonContainer}>
        <Button title="-" onPress={decrement} />
        <Button title="+" onPress={increment} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  counterContainer: {
    padding: 20,
    alignItems: 'center',
  },
  counterText: {
    fontSize: 24,
    marginBottom: 20,
  },
  buttonContainer: {
    flexDirection: 'row',
    gap: 20,
  },
});