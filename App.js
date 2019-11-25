

import React from 'react';
import { Text, View } from 'react-native';
import { Provider } from 'react-redux';

import store from './store';

import styles from './styles';

import ReadContent from './components/readContent';
import TopBar from './components/topBar';
import AddContent from './components/addContent';

export default function App() {
  return (
    <Provider store={store}>
      <View style={styles.container}>
        <TopBar />
        <AddContent />
      </View>
    </Provider>
  )
}
