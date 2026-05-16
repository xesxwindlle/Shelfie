import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar"; // Note: Make sure your import matches your package

export default function AuthLayout() {
    return (
        <>
            <StatusBar style="auto"/>
            <Stack
                screenOptions={{
                    headerShown: false, 
                    animation: 'none' // 'none' needs to be a string wrapped in quotes
                }}
            />
        </>
    )
}