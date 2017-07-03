//frontend

import React, { Component } from 'react';
import { Text, View, Button, Image, Dimensions, TouchableHighlight, StatusBar, TextInput } from 'react-native';
import { Container, Content, Form, Item, Input, Icon } from 'native-base';
import * as constants from '../constants';
import styles from './styles';

const deviceHeight = Dimensions.get('window').height;
const deviceWidth = Dimensions.get('window').width;

const CalculatorButton = ({ buttonVal, pressFunction, buttonActive, activeBackgroundColor, buttonSelect }) => {
  return (
    <TouchableHighlight
      style={[
        styles.calculatorButton,
        buttonActive ? { backgroundColor: activeBackgroundColor } : {},
        buttonActive ? { opacity: 1 } : { opacity: 0.65 }
      ]}
      onPress={pressFunction}
    >
      <Image
        style={ styles.calculatorButtonImage }
        source={{uri: ('calculatorButton-' + buttonVal)}}
      />
    </TouchableHighlight>
  )
}

class CalculatorRender extends Component {

  constructor(props){ super(props) }

  render() {

    return (

      <Container style={styles.container} >

        <StatusBar hidden={true} />

        <Image source={{ uri: constants.BACKGROUND_SCREEN }} style={styles.imageContainer}>

          <View id="flex-padding" style={styles.flexPadding}></View>

          <View style={styles.content}>

            <View style={styles.row}>

              <CalculatorButton
                buttonVal="doughnut"
                activeBackgroundColor="rgba(235, 35, 41, 1)"
                pressFunction={ () => this.props.buttonSelect("doughnut") }
              />
              <CalculatorButton buttonVal="cake" />
              <CalculatorButton buttonVal="cupcake" />

            </View>

            <View style={styles.row}>

              <CalculatorButton buttonVal="milkshake" />
              <CalculatorButton buttonVal="cookie" />
              <CalculatorButton buttonVal="iceCream" />

            </View>

            <View style={styles.row}>

              <CalculatorButton buttonVal="macaron" />
              <CalculatorButton buttonVal="candy" />
              <CalculatorButton buttonVal="popcorn" />

            </View>

          </View>

        </Image>

      </Container>

    );
  }
}


export default CalculatorRender;
