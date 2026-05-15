import { StyleSheet, Text, View } from 'react-native'
import { Link } from 'expo-router'
import ThemedView from '../components/ThemedView'
import ThemedText from '../components/ThemedText'

const Contact = () => {
    return (
        <ThemedView style={styles.container}>
            <ThemedText style={styles.title}>Contact Page</ThemedText>
            <Link href='/' style={styles.link}>
                <ThemedText>Home Page</ThemedText>
            </Link>
        </ThemedView>
    )
}

export default Contact

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
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