import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {useFonts, Poppins_300Light, Poppins_400Regular, Poppins_500Medium, Poppins_700Bold, Poppins_800ExtraBold } from '@expo-google-fonts/poppins'
import {DMSerifDisplay_400Regular} from '@expo-google-fonts/dm-serif-display'
import {DMSans_400Regular} from '@expo-google-fonts/dm-sans';
import { ThemeProvider } from 'styled-components/native';
import theme from "../src/styles/theme";
export default function App() {
    const [fontsLoaded] = useFonts({
        Poppins_300Light, Poppins_400Regular, Poppins_500Medium, Poppins_700Bold, Poppins_800ExtraBold, DMSerifDisplay_400Regular, DMSans_400Regular
    })
    if (!fontsLoaded) {
        return null;
      }

    return (
        <ThemeProvider theme={theme}>
        <View style={styles.container}>
            <Text>Open up App.js to start working on your app!</Text>
            <StatusBar style="auto" />
        </View>
        </ThemeProvider>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
