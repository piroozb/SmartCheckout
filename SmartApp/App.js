import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

// pages
import Scanner from "./pages/Scanner"

export default function App() {
  return (
    // <View style={styles.container}>
    //   <Text>Testing!</Text>
    //   <Scanner />
    //   <StatusBar style="auto" />
    // </View>
    <Scanner />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
