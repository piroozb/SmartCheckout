import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, View, Text, ScrollView, StyleSheet, TouchableOpacity, Image } from "react-native"
import Logout from "../sources/logout.png";

export default function BaseLayout({children, back}) {



  return (
  <SafeAreaView style={{ flex: 1 }}>
    <View style={styles.contentContainer}>
   
    {children}
    </View>
  </SafeAreaView>
  );
}

const styles = StyleSheet.create({
    contentContainer: {
        flex: 9 / 10,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 60,
        backgroundColor: 'white'
    },
});
