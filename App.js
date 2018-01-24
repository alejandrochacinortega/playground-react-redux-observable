import React from 'react'
import {StyleSheet, Text, View} from 'react-native'

import {createStore} from 'redux'
import {Provider} from 'react-redux'

import reducers from './src/reducers'
import Stories from './src/features/stories/Stories'

console.log('storiesReducer ', reducers)

const store = createStore(reducers)

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <View style={styles.container}>
          <Text>Open up App.js to start working on your app!</Text>
          <Stories />
        </View>
      </Provider>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
})
