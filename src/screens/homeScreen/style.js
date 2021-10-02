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
        padding: 10
    },
    fieldContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 10
    },
    fieldRightContainer: {
        flex: 0.7,
        justifyContent: 'center'
    },
    listContainer: {
        marginTop: 10,
        flex: 1,
        borderTopWidth: 1
    },
    itemContainer: {
        flex: 1,
        margin: 10,
        padding: 10,
        borderWidth: 1,
        borderRadius: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    itemInsideContainer: {
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    addButton: {
        width: 30,
        height: 30,
        backgroundColor: 'pink',
        borderRadius: 20,
        position: 'absolute',
        bottom: 0,
        right: 10
    }
})