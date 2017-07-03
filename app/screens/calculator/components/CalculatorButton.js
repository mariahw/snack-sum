import React from 'react';
import { Text, View, Button, Image, Dimensions, TouchableHighlight, StatusBar, TextInput } from 'react-native';
import { Container, Content, Form, Item, Input, Icon } from 'native-base';
import styles from './styles';
import * as constants from '../constants'

const CalculatorButton = ({ props, buttonVal, pressFunctionCallback, buttonsState }) => {
  return (
    <TouchableHighlight
      style={[
        styles.calculatorButton,
        buttonsState ? { backgroundColor: constants.ACTIVE_COLOR[buttonVal], borderColor: "white" } : {}
      ]}
      onPress={ () => { pressFunctionCallback(buttonVal) }}
    >
      <Image
        style={ styles.calculatorButtonImage }
        source={
          {uri:
            buttonsState ? ('calculatorButtonActive-' + buttonVal) : ('calculatorButton-' + buttonVal)
          }
        }
      />
    </TouchableHighlight>
  )
}

export default CalculatorButton ;
