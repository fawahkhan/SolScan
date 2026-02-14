import { StyleSheet, Text, View  } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Accounts() {
    return (
        <SafeAreaView style={styles.safe} edges={["top", "left", "right"]}>
            <Text style={styles.title}>Accounts</Text>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    safe: {
        flex: 1,
        backgroundColor: "#0D0D12",
        paddingHorizontal: 16,
        paddingTop: 16,
    },
    title: {
        color: "#FFFFFF",
        fontSize: 18,
        fontWeight: "600",
    },
});