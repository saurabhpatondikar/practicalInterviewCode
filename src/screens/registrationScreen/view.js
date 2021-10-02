import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native'
import InputField from '../../components/inputField/view';
import style from './style';
import { addUser } from '../../redux/addUser';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';

const registrationScreen = (props) => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [phoneNumber, setPhoneNumber] = useState('')
    const [age, setAge] = useState('')
    const dispatch = useDispatch();
    const user = useSelector(state => state);
    useEffect(() => {
        console.log("added user", JSON.stringify(user))
    }, [user])
    const handleName = (text) => {
        setName(text);
    }
    const handleEmail = (text) => {
        setEmail(text);
    }
    const handlePhoneNumber = (text) => {
        setPhoneNumber(text);
    }
    const handleAge = (text) => {
        setAge(text);
    }
    const handleSubmission = () => {
        let person = {
            name: name,
            email: email,
            phoneNumber: phoneNumber,
            age: age
        }
        addUser(dispatch, person)
        if (!user.addUser.loading)
            props.navigation.navigate('Home');
    }
    return (
        <View style={style.container}>
            <View style={style.fieldContainer}>
                <View style={{ flex: 0.3 }}><Text>{'Name'}</Text></View>
                <View style={{ flex: 0.7 }}>
                    <InputField
                        placeholder={'Enter Your name'}
                        keyboardType={'default'}
                        changeText={handleName}
                    />
                </View>
            </View>
            <View style={style.fieldContainer}>
                <View style={{ flex: 0.3 }}><Text>{'Email'}</Text></View>
                <View style={{ flex: 0.7 }}>
                    <InputField
                        placeholder={'Enter Your Email Address'}
                        keyboardType={'email-address'}
                        changeText={handleEmail}
                    />
                </View>
            </View>
            <View style={style.fieldContainer}>
                <View style={{ flex: 0.3 }}><Text>{'Phone Number'}</Text></View>
                <View style={{ flex: 0.7 }}>
                    <InputField
                        placeholder={'Enter Your Phone Number'}
                        keyboardType={'phone-pad'}
                        changeText={handlePhoneNumber}
                    />
                </View>
            </View>
            <View style={style.fieldContainer}>
                <View style={{ flex: 0.3 }}><Text>{'Age'}</Text></View>
                <View style={{ flex: 0.7 }}>
                    <InputField
                        placeholder={'Enter Your age'}
                        keyboardType={'numeric'}
                        changeText={handleAge}
                    />
                </View>
            </View>
            <TouchableOpacity
                onPress={() => { handleSubmission() }}
                style={[style.registerButton, style.doCenter]}>
                <Text>Register</Text>
            </TouchableOpacity>
        </View>
    )
}
export default registrationScreen;