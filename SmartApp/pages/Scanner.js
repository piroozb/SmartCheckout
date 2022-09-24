import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { BarCodeScanner } from 'expo-barcode-scanner';
import BaseLayout from '../Components/BaseLayout';
import Logout from "../sources/logout.png"

export default function Scanner(props) {
  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);

  async function goBack() {
    props.navigation.goBack()
  }

  async function redirectCart() {
    props.navigation.navigate('Cart')
  }

  useEffect(() => {
    const getBarCodeScannerPermissions = async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === 'granted');
    };

    getBarCodeScannerPermissions();
  }, []);

  const handleBarCodeScanned = ({ type, data }) => {
    setScanned(true);
    alert(`Bar code with type ${type} and data ${data} has been scanned!`);
  };

  if (hasPermission === null) {
    return <Text>Requesting for camera permission</Text>;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  return (
    <>
    <TouchableOpacity style={styles.exit} onPress={goBack}><Image source={Logout} style={styles.exitBtn}/></TouchableOpacity>
    <View style={styles.container}>
      <BarCodeScanner
        onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
        style={StyleSheet.absoluteFillObject}
      />
      {scanned && <TouchableOpacity onPress={() => setScanned(false)} style={styles.btn}><Text style={styles.textBtn}>Tap to scan another item</Text></TouchableOpacity>}
      {scanned && <TouchableOpacity onPress={redirectCart} style={styles.btn}><Text style={styles.textBtn}>Proceed to cart</Text></TouchableOpacity>}
    </View>
    </>
  );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: 'column',
      justifyContent: 'center',
      backgroundColor: '#e6e6ff',
    },
    exit: {
      alignItems: "flex-end",
      backgroundColor: 'white',
      padding: 15
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
    exitBtn: {
      height: 30,
      width: 30
    },
    textBtn: {
      color: "white",
      fontSize: 20
    }
  });