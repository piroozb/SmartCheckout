import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView, TouchableOpacity, Image } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import Logout from "./sources/logout.png";

// pages
import Scanner from "./pages/Scanner";
import Main from "./pages/Main";
import Cart from "./pages/Cart";

// redux
import store from './store';
import { Provider } from 'react-redux'

const Stack = createStackNavigator();

export default function App() {

  return (
<Provider store={store}>
      <SafeAreaView style={styles.top_safe_container} />
      <SafeAreaView style={styles.bottom_safe_container}>
        <NavigationContainer>
            <Stack.Navigator>
              <Stack.Group>
                <Stack.Screen name="Main" component={Main} options={{ headerShown: false }} />
                <Stack.Screen name="Scanner" component={Scanner} options={{ headerShown: false }} />
                <Stack.Screen name="Cart" component={Cart} options={{ headerShown: false }}/>
              </Stack.Group>
            </Stack.Navigator>
        </NavigationContainer>
      </SafeAreaView >
    </Provider>
  );
}

const styles = StyleSheet.create({
  top_safe_container: {
    flex: 0,
    backgroundColor: "white"
  },
  bottom_safe_container: {
    flex: 1,
    backgroundColor: "white"
  },
});
