import React from 'react';
import { Text, View, Button, Image, Dimensions, TouchableHighlight, StatusBar, TextInput } from 'react-native';
import { Container, Content, Form, Item, Input, Icon } from 'native-base';
import styles from './styles';
import * as constants from '../constants'

const FunctionalButton = ({ symbol, buttonVal, pressFunction }) => {
  return (
    <TouchableHighlight
      style={ styles.functionalButton }
      onPress={ pressFunction }
    >
      {/*<Image source={{uri:          }}/>*/}
      <Text>{symbol}</Text>
    </TouchableHighlight>
  )
}

export default FunctionalButton ;
