import { StyleSheet, Text, View, Pressable, Image } from 'react-native';
import Logo from '../assets/image/logo_light.png'
const Home = () => {
    return (
        <View style={styles.container}>
            <Image source = {Logo} style = {styles.img}></Image>
            <Text style={[styles.title, {color : 'purple'}]}>最屌的</Text>

            <Text style={{
                marginTop: 10,
                marginBottom: 30
            }}>
                Reading List App
            </Text>
                
            <View style={styles.card}>
                <Text>Card</Text>
            </View>
        </View>
    );
};

export default Home;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor : 'white'
    },

    title: {
        fontWeight: 'bold',
        fontSize: 18,
    },

    card: {
        backgroundColor: '#eee',
        padding: 20,
        borderRadius: 5,

        shadowColor: '#000',
        shadowOffset: {
            width: 4,
            height: 4,
        },
        shadowOpacity: 0.1,
        shadowRadius: 4,

        elevation: 4,
    }, 

    img : {
        marginVertical : 20
    }
});