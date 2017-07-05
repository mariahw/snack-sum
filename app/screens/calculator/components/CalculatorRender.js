//frontend

import React, { Component } from 'react';
import { Text, View, Button, Image, Dimensions, TouchableHighlight, StatusBar, TextInput } from 'react-native';
import { Container, Content, Form, Item, Input, Icon } from 'native-base';
import * as constants from '../constants';
import styles from './styles';
import CalculatorButton from './CalculatorButton'
import FunctionalButton from './FunctionalButton'

const deviceHeight = Dimensions.get('window').height;
const deviceWidth = Dimensions.get('window').width;

class CalculatorRender extends Component {

  constructor(props){ super(props) }

  render() {

    return (

      <Container style={styles.container} >

        <StatusBar hidden={true} />

        <Image source={{ uri: constants.BACKGROUND_SCREEN }} style={styles.imageContainer}>

          <View id="flex-padding" style={styles.functionalContainer}>

            <FunctionalButton
              symbol = "CE"
              pressFunction = { this.props.clearCalculatorSearch }
            />

            <FunctionalButton
              symbol = "="
            />

          </View>

          <View style={styles.content}>

            <View style={styles.row}>

              <CalculatorButton
                buttonVal="doughnut"
                pressFunctionCallback={ this.props.buttonPress }
                buttonsState={ this.props.buttonsState.doughnut.active }
              />

              <CalculatorButton
                buttonVal="cake"
                pressFunctionCallback={ this.props.buttonPress }
                buttonsState={ this.props.buttonsState.cake.active }
              />

              <CalculatorButton
                buttonVal="cupcake"
                pressFunctionCallback={ this.props.buttonPress }
                buttonsState={ this.props.buttonsState.cupcake.active }
              />

            </View>

            <View style={styles.row}>

              <CalculatorButton
                buttonVal="milkshake"
                pressFunctionCallback={ this.props.buttonPress }
                buttonsState={ this.props.buttonsState.milkshake.active }
              />

              <CalculatorButton
                buttonVal="cookie"
                pressFunctionCallback={ this.props.buttonPress }
                buttonsState={ this.props.buttonsState.cookie.active }
              />

              <CalculatorButton
                buttonVal="icecream"
                pressFunctionCallback={ this.props.buttonPress }
                buttonsState={ this.props.buttonsState.icecream.active }
              />

            </View>

            <View style={styles.row}>

              <CalculatorButton
                buttonVal="macaroon"
                pressFunctionCallback={ this.props.buttonPress }
                buttonsState={ this.props.buttonsState.macaroon.active }
              />

              <CalculatorButton
                buttonVal="candy"
                pressFunctionCallback={ this.props.buttonPress }
                buttonsState={ this.props.buttonsState.candy.active }
              />

              <CalculatorButton
                buttonVal="popcorn"
                pressFunctionCallback={ this.props.buttonPress }
                buttonsState={ this.props.buttonsState.popcorn.active }
              />

            </View>

          </View>

        </Image>

      </Container>

    );
  }
}


export default CalculatorRender;
