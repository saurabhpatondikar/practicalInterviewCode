import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, Platform } from 'react-native'
import InputField from '../../components/inputField/view';
import style from './style';
import { saveToStorage } from '../../utility/utility';
import { GOOGLE_IOS_CLIENT_ID, GOOGLE_WEB_CLIENT_ID, AUTH_TOKEN } from '../../utility/AppConstant'
import { addUser } from '../../redux/addUser';
import { userLogged } from '../../redux/userLog';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { httpPost } from '../../utility/api';
import { GoogleSignin, GoogleSigninButton, statusCodes } from 'react-native-google-signin';

const LoginScreen = (props) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const dispatch = useDispatch();
  const userAdded = useSelector(state => state);
  useEffect(() => {
    googleConfig();
    console.log(JSON.stringify(userAdded));
  }, [userAdded])

  const handleEmail = (text) => {
    setEmail(text);
  }
  const handlePassword = (text) => {
    setPassword(text);
  }

  const googleConfig = async () => {
    if (Platform.OS === 'android') {
      await GoogleSignin.configure({
        // forceCodeForRefreshToken: true,
        webClientId: GOOGLE_WEB_CLIENT_ID,
        // offlineAccess: true, // if you want to access Google API on behalf of the user FROM YOUR SERVER
      })
    } else {
      await GoogleSignin.configure({
        // forceCodeForRefreshToken: true,
        iosClientId: GOOGLE_IOS_CLIENT_ID // only for iOS
      })
    }
  }
  const _signIn = async () => {
    try {
      await GoogleSignin.hasPlayServices();
      const userInfo = await GoogleSignin.signIn();
      saveToStorage(AUTH_TOKEN, userInfo.idToken)
      saveUser(userInfo.user);
    } catch (error) {
      if (error.code === statusCodes.SIGN_IN_CANCELLED) {
        // user cancelled the login flow

      } else if (error.code === statusCodes.IN_PROGRESS) {

        // operation (f.e. sign in) is in progress already
      } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {

        // play services not available or outdated
      } else {
        // some other error happened
      }
    }
  }
  const saveUser = (user) => {
    let person = {
      name: user.name,
      email: user.email
    }
    addUser(dispatch, person)
    userLogged(dispatch, true);
    if (!userAdded.addUser.loading) {
      props.navigation.navigate('Dashboard');
    }
  }
  const handleSubmission = () => {
    let person = {
      email: email,
      phoneNumber: password,
    }
    addUser(dispatch, person)
    /* httpPost('',person).then((response)=> {

     }).catch((error)=>{

     })*/
    if (!userAdded.addUser.loading)
      props.navigation.navigate('Dashboard');
  }
  return (
    <View style={[style.container]}>
      <View style={{ alignSelf: 'center', marginBottom: 30 }}>
        <Text>Login</Text>
      </View>
      <View style={style.fieldContainer}>
        <View style={style.labelContainer}><Text>{'Email'}</Text></View>
        <View style={style.textInputContainer}>
          <InputField
            placeholder={'Enter Your Email Address'}
            keyboardType={'email-address'}
            changeText={handleEmail}
          />
        </View>
      </View>
      <View style={style.fieldContainer}>
        <View style={style.labelContainer}><Text>{'password'}</Text></View>
        <View style={style.textInputContainer}>
          <InputField
            placeholder={'Enter Your Password'}
            keyboardType={''}
            secureTextEntry={true}
            changeText={handlePassword}
          />
        </View>
      </View>
      <TouchableOpacity
        onPress={() => { handleSubmission() }}
        style={[style.registerButton, style.doCenter]}>
        <Text>Login</Text>
      </TouchableOpacity>
      <GoogleSigninButton
        style={{ marginHorizontal: 10, marginTop: 20, alignSelf: 'center' }}
        size={GoogleSigninButton.Size.Wide}
        color={GoogleSigninButton.Color.Dark}
        onPress={() => { _signIn() }}
      />
    </View>
  )
}
export default LoginScreen;