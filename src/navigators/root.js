import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack'
import registrationScreen from "../screens/registrationScreen/view";
import homeScreen from "../screens/homeScreen/view";
import productScreen from "../screens/productScreen/view";

const Stack = createStackNavigator();

const StackNavigator = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name={'Registration'} component={registrationScreen} />
            <Stack.Screen name={'Home'} component={homeScreen} />
            <Stack.Screen name={'Product'} component={productScreen} />
        </Stack.Navigator>
    )
}

const root = () => {
    return (
        <NavigationContainer>
            <StackNavigator />
        </NavigationContainer>
    )
}
export default root;