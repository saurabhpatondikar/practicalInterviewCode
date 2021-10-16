import React from "react";
import { StyleSheet, Platform, Dimensions } from "react-native";

export default styles = StyleSheet.create({
    doCenter: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    container: {
        flex: 1,
        backgroundColor: 'rgb(255,255,255)',
        padding: 10,
        justifyContent: 'center'

    },
    fieldContainer: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    labelContainer: {
        flex: 0.3,
        justifyContent: 'center',
    },
    textInputContainer: {
        flex: 0.7,
        justifyContent: 'center'
    },
    registerButton: {
        borderColor: 'black',
        borderRadius: 10,
        borderWidth: 1,
        marginTop: 50,
        padding: 10,
        marginHorizontal: 10
    }
})