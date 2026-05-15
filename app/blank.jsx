import { StyleSheet, Text, View } from 'react-native'
import { Link } from 'expo-router'

const Blank = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Blank Page</Text>
            <Link href='/' style={styles.link}>Home Page</Link>
        </View>
    )
}

export default Blank

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