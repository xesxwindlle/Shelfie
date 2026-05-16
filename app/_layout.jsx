import { StatusBar, StyleSheet, Text, useColorScheme, View } from 'react-native'
import { Stack } from 'expo-router';
import { Colors } from '../constants/colors';
import React from 'react'
import { Slot } from 'expo-router'

const RootLayout = () => {
    const colorScheme = useColorScheme();
    const theme = Colors[colorScheme] ?? Colors.light;
    return (
        // <View style={{flex : 1}}>
        //     <Slot></Slot>
        //   <Text>Footer</Text>
        // </View>
        <>
            <StatusBar value='auto'></StatusBar>
            <Stack screenOptions={{
                headerStyle: {
                    backgroundColor: theme.navBackground
                },
                headerTintColor: theme.title,
            }}>
                <Stack.Screen name="index" options={{ title: "Home", headerShown: false}}></Stack.Screen>
                <Stack.Screen name="about" options={{ title: "About", headerShown: false }}></Stack.Screen>
                <Stack.Screen name="contact" options={{ title: "Contact", headerShown: false }}></Stack.Screen>
                <Stack.Screen name="(auth)" options={{title : "Authorization", headerShown: false}}></Stack.Screen>
                <Stack.Screen name="(dashboard)" options={{title : "Dashboard", headerShown: false}}></Stack.Screen>
                <Stack.Screen name="blank" options={{ title: "Blank"}}></Stack.Screen>
            </Stack>
        </>
    )
}

export default RootLayout

const styles = StyleSheet.create({})