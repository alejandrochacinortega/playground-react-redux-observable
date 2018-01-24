import React, {Component} from 'react'
import {View, Text} from 'react-native'
import {connect} from 'react-redux'

class Stories extends Component {
  render() {
    return (
      <View>
        <Text>Stories Component</Text>
        <Text>{JSON.stringify(this.props, null, 2)}</Text>
      </View>
    )
  }
}

mapStateToProps = state => {
  return state
}

export default connect(mapStateToProps)(Stories)
