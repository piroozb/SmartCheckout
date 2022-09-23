import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView, TouchableOpacity } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import Main from "./pages/Main"
const Stack = createStackNavigator();

// pages
import Scanner from "./pages/Scanner"

export default function App() {
  return (
<>
      <SafeAreaView style={styles.top_safe_container} />
      <SafeAreaView style={styles.bottom_safe_container}>
        <TouchableOpacity style={styles.btn}><Text>balls</Text></TouchableOpacity>
        <NavigationContainer>
            <Stack.Navigator>
              <Stack.Group>
                <Stack.Screen name="Main" component={Main} options={{ headerShown: false }} />
              </Stack.Group>
            </Stack.Navigator>
        </NavigationContainer>
      </SafeAreaView >
    </>
  );
}

const styles = StyleSheet.create({
  top_safe_container: {
    flex: 0,
    backgroundColor: 'darkorange'
  },
  bottom_safe_container: {
    flex: 1,
    backgroundColor: "darkorange"
  },
  btn: {
    alignItems: "right",
    backgroundColor: 'white',
    padding: 2,
    paddingHorizontal: 4,
    borderRadius: 15,
    paddingVertical: 15 
},
});
