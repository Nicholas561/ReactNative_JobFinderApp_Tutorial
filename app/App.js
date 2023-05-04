import React from "react";
import { ImageBackground, StyleSheet, View } from "react-native";
import Welcome from "../components"

const backgroundImage = require("../assets/images/manonmountain2.jpg"); //change to file for background image

export default function App() {
    return (
        <ImageBackground source={backgroundImage} style={styles.background}>
            <View style={styles.container}>
                <Welcome />
            </View>
        </ImageBackground>
    );
}

const styles= StyleSheet.create({
    background: {
        flex: 1,
        resizeMode: "cover",
    },
    container: {
        flex: 1,
        backgroundColor: "rgba(255, 255, 255, 0.8)", //translucent white background color
        justifyContent: "center",
        alignItems: "center",
    },
})