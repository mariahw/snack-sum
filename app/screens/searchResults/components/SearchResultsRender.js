import React, { Component } from 'react'
import * as constants from  '../constants'
import * as actions from  '../actions'
import { Text, View, Button, Image, Dimensions, TouchableHighlight, StatusBar, TextInput } from 'react-native';

class SearchResultRender extends Component {

  constructor(props){
    super(props)

  }

  render() {

    return (
      <Text>
        Search return render
      </Text>
    );
  }

}
export default SearchResultRender;
