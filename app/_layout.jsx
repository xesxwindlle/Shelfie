import { StyleSheet, Text, View } from 'react-native'
import { Stack } from 'expo-router';
import React from 'react'
import { Slot } from 'expo-router'

const RootLayout = () => {
  return (
    // <View style={{flex : 1}}>
    //     <Slot></Slot>
    //   <Text>Footer</Text>
    // </View>
  <Stack screenOptions={{
    headerStyle: {
        backgroundColor: "#ddd"
    },
    headerTintColor: "purple"
}}>
        <Stack.Screen name = "index" options={{title : "Home"}}></Stack.Screen>
        <Stack.Screen name = "about" options={{title : "About"}}></Stack.Screen>
        <Stack.Screen name = "contact" options={{title : "Contact"}}></Stack.Screen>
        <Stack.Screen name = "blank" options={{title : "Blank", headerShown : false}}></Stack.Screen>
    </Stack>
  )
} 

export default RootLayout

const styles = StyleSheet.create({})