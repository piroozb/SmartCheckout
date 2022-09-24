import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import BaseLayout from '../Components/BaseLayout';
import Logout from "../sources/logout.png";
import ShopCart from "../sources/shopping-cart.png";
import Divider from 'react-native-divider';

export default function Cart() {

  async function goBack() {
    props.navigation.goBack()
  }  

  return (
    <>
        <TouchableOpacity style={styles.exit} onPress={goBack}><Image source={Logout} style={styles.exitBtn}/></TouchableOpacity>
    <View style={styles.container}>
      <Image source={ShopCart} style={styles.img}/><Text style={styles.title}>My Cart</Text>
      <TouchableOpacity><Text>Add</Text></TouchableOpacity>
      <Divider/>
      <View style={styles.form}>
      <Text>Scan </Text>
      <Text>Pay</Text>
      <Text>Checkout</Text>
      </View>
      <TouchableOpacity style={styles.btn}><Text>Proceed to Checkout</Text></TouchableOpacity>
      <StatusBar style="auto" />
    </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  form: {
    padding: 3,
    margin: 30,
  },
  title: {
    fontSize: 28,
    textAlign: 'left',
},
btn: {
    alignItems: "center",
    backgroundColor: 'red',
    padding: 10,
    paddingHorizontal: 30,
    borderRadius: 15,
    paddingVertical: 15 
},
exit: {
  alignItems: "flex-end",
  backgroundColor: 'white',
  padding: 15
},
exitBtn: {
  height: 30,
  width: 30
},
img: {
  height: 40,
  width: 40
}
});
