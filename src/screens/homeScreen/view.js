
import React, { useEffect, useState } from 'react';
import {View, Text, TouchableOpacity} from 'react-native'
import style from './style';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import {GoogleSignin} from 'react-native-google-signin';
import { removeFromStorage } from '../../utility/utility';
import { AUTH_TOKEN } from '../../utility/AppConstant';
import { userLogged } from '../../redux/userLog';

const homeScreen = (props) => {
    const dispatch = useDispatch();
    const user = useSelector(state => state);
    const [person, setPerson] = useState(null);
    useEffect(() => {
        setPerson(user.addUser.userData)
    }, [user])
    const signOut = async () => {
        if(GoogleSignin.isSignedIn){
            GoogleSignin.signOut()
            await removeFromStorage(AUTH_TOKEN);
            userLogged(dispatch, false);
            setTimeout(()=>{
                props.navigation.navigate('Login');
            },2000)
           // 
        }
    } 
    return (
        <View style={style.container}>
            <View  style={style.fieldContainer}>
                <View >
                    <Text>{person && person.email ? person.email : ''}</Text>
                </View>
            </View>
            <TouchableOpacity 
             onPress = {() => {signOut()}}
             style={{alignSelf: 'flex-end'}}
            >
                <Text>Sign out</Text>
            </TouchableOpacity>
        </View>
    )
}
export default homeScreen;