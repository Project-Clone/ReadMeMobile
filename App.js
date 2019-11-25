

import React from 'react';
import { Text, View } from 'react-native';
import { Provider } from 'react-redux';

import store from './store';

import styles from './styles';

import ReadContent from './components/readContent';
import TopBar from './components/topBar';

export default function App() {
  return (
    <Provider store={store}>
      <View style={styles.container}>
        <TopBar />
        <ReadContent />
      </View>
    </Provider>
  )
}
