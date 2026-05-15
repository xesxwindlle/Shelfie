import { StyleSheet, Text, View, useColorScheme } from 'react-native'
import { Colors } from '../constants/colors'; 
import { Link } from 'expo-router'

const About = () => {
    const colorScheme = useColorScheme();
        const theme = Colors[colorScheme] ?? Colors.light; 
    return (
        <View style={[styles.container, {backgroundColor : theme.background}]}>
            <Text style={styles.title}>About Page</Text>
            <Link href='/' style={styles.link}>Home Page</Link>
        </View>
    )
}

export default About

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "white",
    },

    title: {
        fontWeight: "bold",
        fontSize: 18,
    },

    card: {
        backgroundColor: "#eee",
        padding: 20,
        borderRadius: 5,

        shadowColor: "#000",
        shadowOffset: {
            width: 4,
            height: 4,
        },
        shadowOpacity: 0.1,
        shadowRadius: 4,

        elevation: 4,
    },

    img: {
        marginVertical: 20,
    },

    link : {
        marginVertical : 10, 
        borderBottomWidth : 1
    }
})