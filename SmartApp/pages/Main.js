import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import BaseLayout from '../Components/BaseLayout';
import shopping from '../sources/shopping-bag.png';
import barcode_btn from '../sources/barcode-scan-btn.png';
import Logout from "../sources/logout.png";
import barcode from "../sources/barcode-scan.png";
import payment from "../sources/payment.png";
import QRCode from "../sources/qr-code.png";

export default function Main(props) {

  async function redirectScan() {
    props.navigation.navigate('Scanner')
  }

  return (
    <>
    <View style={styles.container}>
        <Image source={shopping} style={styles.image}/>
      <Text style={styles.title}>Smart Checkout</Text>
      <Text>Tired of long queues? Checkout made as easy as 1 2 3...</Text>
      <View style={styles.form}>
      <Text style={styles.text}><Image source={barcode} style={styles.icon}/> Scan ━━━━━</Text>
      <Text style={styles.text}><Image source={payment} style={styles.icon}/> Pay ━━━━━━</Text>
      <Text style={styles.text}><Image source={QRCode} style={styles.icon}/> Checkout ━━━━</Text>
      </View>
      <TouchableOpacity style={styles.btn} onPress={redirectScan}><Text style={{color: 'white', fontSize: 40}}>Scan <Image style={styles.btnImage} source={barcode_btn}/></Text></TouchableOpacity>
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
  height: 40,
  width: 40
},
icon: {
  height: 24,
  width: 24
},
text: {
  fontSize: 20
}
});
