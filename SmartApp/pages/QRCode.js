import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import BaseLayout from '../Components/BaseLayout';

export default function QRCode() {
  return (
    <BaseLayout>
    <View style={styles.container}>
      <Text style={styles.title}>Payment Successful</Text>
      <View style={styles.form}>
      <Text>Thanks for shopping with us!</Text>
      </View>
      <TouchableOpacity style={styles.btn}><Text>Home</Text></TouchableOpacity>
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
    backgroundColor: 'darkorange',
    padding: 10,
    paddingHorizontal: 30,
    borderRadius: 15,
    paddingVertical: 15 
},
});
