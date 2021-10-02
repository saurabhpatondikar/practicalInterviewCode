import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native'
import { useDispatch, useSelector } from 'react-redux';
import InputField from '../../components/inputField/view';
import { updateProduct, addProduct } from '../../redux/getProductList';
import style from './style';

const productScreen = (props) => {
    const { update } = props.route.params
    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const [category, setCategory] = useState('');
    const dispatch = useDispatch();
    const product = useSelector(state => state);
    useEffect(() => {
        if (update) {
            setName(props.route.params.item.name)
            setPrice(props.route.params.item.price)
            setCategory(props.route.params.item.category);
        }
    }, [])
    const handleName = (text) => {
        setName(text);
    }
    const handlePrice = (text) => {
        setPrice(text);
    }
    const handleCategory = (text) => {
        setCategory(text);
    }
    const handleAddUpdate = () => {
        let productData = {
            name: name,
            price: price,
            category: category
        }
        if (update) {
            updateProduct(dispatch, productData, props.item)
            if (!product.getProductList.loading) {
                props.navigation.navigate('Home');
            }
        }
        else {
            addProduct(dispatch, productData)
            if (!product.getProductList.loading) {
                props.navigation.navigate('Home');
            }
        }
    }
    return (
        <View style={style.container}>
            <View style={style.fieldContainer}>
                <View style={{ flex: 0.3 }}><Text>{'Product Name'}</Text></View>
                <View style={{ flex: 0.7 }}>
                    <InputField
                        placeholder={'Enter Product Name'}
                        keyboardType={'default'}
                        value={name}
                        changeText={handleName}
                    />
                </View>
            </View>
            <View style={style.fieldContainer}>
                <View style={{ flex: 0.3 }}><Text>{'Product Price'}</Text></View>
                <View style={{ flex: 0.7 }}>
                    <InputField
                        placeholder={'Enter Product Amount'}
                        keyboardType={'numeric'}
                        value={price}
                        changeText={handlePrice}
                    />
                </View>
            </View>
            <View style={style.fieldContainer}>
                <View style={{ flex: 0.3 }}><Text>{'Category'}</Text></View>
                <View style={{ flex: 0.7 }}>
                    <InputField
                        placeholder={'Product Category'}
                        keyboardType={'phone-pad'}
                        value={category}
                        changeText={handleCategory}
                    />
                </View>
            </View>
            <TouchableOpacity
                onPress={() => { handleAddUpdate() }}
                style={[style.registerButton, style.doCenter]}>
                <Text>{update ? 'Update' : 'Add Product'}</Text>
            </TouchableOpacity>
        </View>
    )
}
export default productScreen;