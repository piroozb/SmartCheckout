import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import Login from "./pages/Login";

export default function App() {
  return (
    <>
      <SafeAreaView />
      <SafeAreaView>
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Group>
              <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
            </Stack.Group>
          </Stack.Navigator>
        </NavigationContainer>
      </SafeAreaView >
    </>
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
