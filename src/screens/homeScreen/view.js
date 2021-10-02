import { isEmptyStatement } from '@babel/types';
import React, { useEffect, useState } from 'react';
import {View, Text, TouchableOpacity, FlatList} from 'react-native'
import style from './style';
import { addUser } from '../../redux/addUser';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';

const homeScreen = (props) => {
    const dispatch = useDispatch();
    const user = useSelector(state => state);
    const [person, setPerson] = useState({});
    const [data, setData] = useState([])
    useEffect(() => {
        setPerson(user.addUser.userData)
        setData(user.getProductList.productList)
    }, [user])
    const renderList = ({item, index}) => {
        return (
            <TouchableOpacity
            onPress={()=>{
                props.navigation.navigate('Product',{item: item, update: true})
            }}
            style={style.itemContainer}>
                <View style={style.itemInsideContainer}>
                    <View style={{marginBottom: 5}}>
                      <Text>{'Name'}</Text>
                    </View>
                    <Text>{item.name}</Text>
                </View>
                <View style={style.itemInsideContainer}>
                    <View style={{marginBottom: 5}}>
                      <Text>{'Price'}</Text>
                    </View>
                    <Text>{item.price}</Text>
                </View>
                <View style={style.itemInsideContainer}>
                    <View style={{marginBottom: 5}}>
                      <Text>{'Category'}</Text>
                    </View>
                    <Text>{item.category}</Text>
                </View>
            </TouchableOpacity>
        )
    }
    return (
        <View style={style.container}>
            <View  style={style.fieldContainer}>
                <View style={{flex: 0.3}}><Text>{'Name'}</Text></View>
                <View style={[style.fieldRightContainer, style.doCenter]}>
                    <Text>{person.name ? person.name : ''}</Text>
                </View>
            </View>
            <View  style={style.fieldContainer}>
                <View style={{flex: 0.3}}><Text>{'Email'}</Text></View>
                <View style={[style.fieldRightContainer, style.doCenter]}>
                    <Text>{person.email ? person.email : ''}</Text>
                </View>
            </View>
            <View  style={style.fieldContainer}>
                <View style={{flex: 0.3}}><Text>{'Phone Number'}</Text></View>
                <View style={[style.fieldRightContainer, style.doCenter]}>
                    <Text>{person.phoneNumber ? person.phoneNumber : ''}</Text>
                </View>
            </View>
            <View  style={style.fieldContainer}>
                <View style={{flex: 0.3}}><Text>{'Age'}</Text></View>
                <View style={[style.fieldRightContainer, style.doCenter]}>
                    <Text>{person.age ? person.age : ''}</Text>
                </View>
            </View>
            <View style={style.listContainer}>
                <View style={{alignSelf: 'center', marginTop: 10}}>
                  <Text >Product List</Text>
                </View>
                <FlatList
                 data={data}
                 renderItem= {renderList}
                 showsVerticalScrollIndicator={false}
                />
                <TouchableOpacity 
                onPress={() => {props.navigation.navigate('Product',{update: false})}}
                style={[style.addButton, style.doCenter]}>
                    <Text>+</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}
export default homeScreen;