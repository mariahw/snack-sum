import React from 'react';
import { Text, View, Button, Image, Dimensions, TouchableHighlight, StatusBar, TextInput } from 'react-native';
import { Container, Content, Form, Item, Input, Icon } from 'native-base';
import styles from './styles';

const CalculatorButton = ({ props, buttonVal, pressFunctionCallback, buttonActive, activeBackgroundColor, activeProp, buttonsUIVal }) => {
  return (
    <TouchableHighlight
      style={[
        styles.calculatorButton,
        buttonsUIVal ? {backgroundColor: "blue"} : {backgroundColor: "red"}
      ]}
      onPress={ () => { pressFunctionCallback(buttonVal) }}
    >
      <Image
        style={ styles.calculatorButtonImage }
        source={{uri: ('calculatorButton-' + buttonVal)}}
      />
    </TouchableHighlight>
  )
}

export default CalculatorButton ;
