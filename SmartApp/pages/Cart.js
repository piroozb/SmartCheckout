import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import BaseLayout from '../Components/BaseLayout';

export default function Cart() {
  return (
    <BaseLayout>
    <View style={styles.container}>
      <Text style={styles.title}>My Cart</Text>
      <Text>Tired of long queues? Checkout made as easy as 1 2 3...</Text>
      <View style={styles.form}>
      <Text>Scan </Text>
      <Text>Pay</Text>
      <Text>Checkout</Text>
      </View>
      <TouchableOpacity style={styles.btn}><Text>Proceed to Checkout</Text></TouchableOpacity>
      <StatusBar style="auto" />
    </View>
    </BaseLayout>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },
  form: {
    padding: 3,
    margin: 30,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
},
btn: {
    alignItems: "center",
    backgroundColor: 'red',
    padding: 10,
    paddingHorizontal: 30,
    borderRadius: 15,
    paddingVertical: 15 
},
});
