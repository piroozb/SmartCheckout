import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import BaseLayout from '../Components/BaseLayout';
import shopping from '../sources/shopping-bag.png'
import barcode_btn from '../sources/barcode-scan-btn.png'

export default function Main() {
  return (
    <BaseLayout>
    <View style={styles.container}>
        <Image source={shopping} style={styles.image}/>
      <Text style={styles.title}>Smart Checkout</Text>
      <Text>Tired of long queues? Checkout made as easy as 1 2 3...</Text>
      <View style={styles.form}>
      <Text>Scan ━━━━━━━━</Text>
      <Text>Pay ━━━━━━━━━</Text>
      <Text>Checkout ━━━━━━</Text>
      </View>
      <TouchableOpacity style={styles.btn}><Text style={{color: 'white', fontSize: 40}}>Scan<Image style={styles.btnImage} source={barcode_btn}/></Text></TouchableOpacity>
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
    fontSize: 40,
    textAlign: 'center',
},
btn: {
    alignItems: "center",
    backgroundColor: 'red',
    borderRadius: 50,
    padding: 20,
    paddingHorizontal: 75,
    marginBottom: 20,
    shadowColor: '#303838',
    shadowOffset: { width: 0, height: 5 },
    shadowRadius: 10,
    shadowOpacity: 0.35,
},
image: {
   resizeMode: "contain",
    height: 200,
    width: 200,
    marginBottom: 30
},
btnImage: {
  height: 20,
  width: 30
}

});
