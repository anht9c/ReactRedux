/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useEffect, useState } from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import { useDispatch, useSelector } from 'react-redux';
import { changeCount, Increment, Decrement } from './Redux/Actions/counts'
import { store } from './Redux/Store/configureStore'


const App = () => {
  const [count, setCount] = useState(0);
  const dispatch = useDispatch();
  const countRedux = useSelector((state) => state.incrementCount)
  const dispatchAddToCart = (countRedux) => dispatch(Increment(countRedux));
  const decrement = (countRedux) => dispatch(Decrement(countRedux));
  useEffect(() => {
    console.log('[count]', countRedux)
  })
  return (
    <View style={styles.container}>
      <View style={styles.countContainer}>
        <Text>Count: {countRedux.count}</Text>
      </View>
      <TouchableOpacity
        style={styles.button}
        onPress={dispatchAddToCart}
      >
        <Text>Press Here1</Text>
      </TouchableOpacity>
      <View>
        <TouchableOpacity
          style={styles.button}
          onPress={decrement}
        >
          <Text>Press Here2</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    paddingHorizontal: 10
  },
  button: {
    alignItems: "center",
    backgroundColor: "#DDDDDD",
    padding: 10
  },
  countContainer: {
    alignItems: "center",
    padding: 10
  }
});

export default App;
