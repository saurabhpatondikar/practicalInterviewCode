import React from 'react';
import { View, TextInput } from 'react-native';

export default inputField = (props) => {
    return (
        <TextInput
            style={{ width: '100%', height: 50, backgroundColor: 'white', borderBottomWidth: 1 }}
            placeholder={props.placeholder}
            onChangeText={(text) => { props.changeText(text) }}
            returnKeyType={'next'}
            keyboardType={props.keyboardType}
            value={props.value}
        />
    )
}