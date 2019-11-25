
import React from 'react';
import { Text, View } from 'react-native';
import { Provider } from 'react-redux';
import { createAppContainer } from 'react-navigation';
// import { createBottomTabNavigator } from 'react-navigation-tabs';
import {createSwitchNavigator}from 'react-navigation'
import store from './store';
import styles from '../styles';
import ReadContent from './components/readContent';
import TopBar from './components/topBar';
import AllArticles from './screens/AllArticlesScreen';
import Home from './screens/Home';


// const TabNavigator = createBottomTabNavigator({
//   Home: { screen:  Home},
//   Articles: { screen: AllArticles }
// });
const TabNavigator = createSwitchNavigator({
  Home: { screen:  Home},
  Articles: { screen: AllArticles }
});

const BottomTabNavigator = createAppContainer(TabNavigator);

export default function App() {
  return (
    <Provider store={store}>
      <View style={styles.container}>
        <TopBar />
        {/* <ReadContent /> */}
        <BottomTabNavigator />
      </View>
    </Provider>
  )
}
