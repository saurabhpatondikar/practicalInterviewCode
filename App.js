/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import Root from './src/navigators/root';
import {Provider} from 'react-redux';
import { store } from './src/redux/createStore';

const App = () => {
return (
    <Provider store={store}>
        <Root/>
    </Provider>
)
};


export default App;
