import React, { useEffect, useState } from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack'
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import loginScreen from "../screens/loginScreen/view";
import homeScreen from "../screens/homeScreen/view";
import productScreen from "../screens/productScreen/view";
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { accessStorage, isJwtExpired } from "../utility/utility";
import { AUTH_TOKEN } from "../utility/AppConstant";
import { userLogged } from "../redux/userLog";
import { Image } from "react-native";

const Stack = createStackNavigator();
const BottomNavigator = createBottomTabNavigator();

const root = () => {
    const [isLogIn, setIsLogIn] = useState(false);
    const userLog = useSelector(state => state.userLog);
    useEffect(() => {
        isLoggedIn()
    }, [userLog, isLogIn])
    const isLoggedIn = async () => {
        let token = await accessStorage(AUTH_TOKEN);
        if (token && !isJwtExpired(token)) {
            setIsLogIn(true);
        }
        else {
            setIsLogIn(false)
        }
    }
    const BottomTabNavigator = () => {
        return (
            <BottomNavigator.Navigator
                screenOptions={({ route }) => ({
                    tabBarVisible: true,
                    tabBarShowLabel: false,
                    tabBarIcon: () => {
                        if (route.name === 'Home') {
                            return <Image source={require('../assets/home.png')} style={{ width: 20, height: 20, resizeMode: 'contain' }} />
                        } else {
                            return <Image source={require('../assets/user.png')} style={{ width: 20, height: 20, resizeMode: 'contain' }} />
                        }
                    },

                })}

            >
                <BottomNavigator.Screen name={'Home'} component={homeScreen} />
                <BottomNavigator.Screen name={'Product'} component={productScreen} />
            </BottomNavigator.Navigator>
        )
    }

    const StackNavigator = () => {
        if (userLog.loggedIn || isLogIn) {
            return (
                <Stack.Navigator>
                    <Stack.Screen name={'Dashboard'} component={BottomTabNavigator} options={{ headerShown: false }} />
                </Stack.Navigator>
            )
        }
        else {
            return (
                <Stack.Navigator
                    initialRouteName={'Login'}
                >
                    <Stack.Screen name={'Login'} component={loginScreen} options={{ headerShown: false }} />
                    <Stack.Screen name={'Dashboard'} component={BottomTabNavigator} options={{ headerShown: false }} />
                </Stack.Navigator>
            )
        }
    }

    return (
        <NavigationContainer>
            <StackNavigator />
        </NavigationContainer>
    )
}
export default root;