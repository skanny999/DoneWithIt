import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, SafeAreaView} from 'react-native';

export default function App() {
  console.log("App executed");

  return (
    <SafeAreaView style={styles.container}>
      <Text>Hello React Native</Text>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'dodgerblue'
  },
});
