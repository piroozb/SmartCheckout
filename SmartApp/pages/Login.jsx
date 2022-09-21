import { View, Text, TextInput, StyleSheet, TouchableOpacity } from "react-native"
import { theme } from '../theme';

export default function Login(props) {

    async function redirectSignUp() {
        props.navigation.navigate('Signup')
    }

    return (
        <BaseLayout>
            <View>
            </View>

        </BaseLayout>
    )
}

const styles = StyleSheet.create({
    form: {
        flex: 8,
        //backgroundColor: 'purple'
    },
    newAccount: {
        flex: 2,
        //backgroundColor: 'violet',
    },
    login: {
        flexDirection: 'row',
        marginLeft: 'auto',
    },
    btn: {
        alignItems: "center",
        backgroundColor: theme.primary_gray,
        padding: 10,
        paddingHorizontal: 30,
        borderRadius: 15,
        paddingVertical: 15 
    },
});