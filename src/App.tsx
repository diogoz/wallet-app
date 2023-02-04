import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { useFonts, Quicksand_500Medium } from "@expo-google-fonts/quicksand";
import { Rubik_500Medium } from "@expo-google-fonts/rubik";
import { ThemeProvider } from "styled-components/native";
import theme from "../src/styles/theme";
import Login from "./screens/Login";
export default function App() {
    const [fontsLoaded] = useFonts({
        Rubik_500Medium,
        Quicksand_500Medium,
    });
    if (!fontsLoaded) {
        return null;
    }

    return (
        <ThemeProvider theme={theme}>
            <StatusBar style="dark" translucent backgroundColor="transparent" />
            <View>
                <Login />
            </View>
        </ThemeProvider>
    );
}
