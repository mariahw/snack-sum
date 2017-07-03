//frontend

import React, { Component } from 'react';
import { Text, View, Button, Image, Dimensions, TouchableHighlight, StatusBar, TextInput } from 'react-native';
import { Container, Content, Form, Item, Input, Icon } from 'native-base';
import * as constants from '../constants';
import styles from './styles';
import { Field, reduxForm } from 'redux-form'

const deviceHeight = Dimensions.get('window').height;
const deviceWidth = Dimensions.get('window').width;

class renderInput extends Component {
  render(){
    const { input: {placeholderText, value, onChange} } = this.props;

    return (
      <Input
        style={styles.input}
        placeholder={placeholderText}
        onChangeText={(value) => onChange(value)}
        value={value}
      />
    )

  }


}

class SignInRender extends Component {

  constructor(props){ super(props) }

  render() {

    const { handleSubmit } = this.props

    return (

      <Container style={styles.container} >

        <StatusBar hidden={true} />

        <Image source={{ uri: constants.BACKGROUND_SCREEN }} style={styles.imageContainer}>

          <View id="flex-padding" style={styles.flexPadding}></View>

          <View style={styles.content}>

              <Form
                style={styles.form}
              >
                <Item regular style={styles.item}>

                  <Field
                    name="email"
                    component={renderInput}
                    placeholderText="email"
                  />

                  <View style={styles.inputIconContainer}>
                    <Image style={styles.inputIcon} source={{uri: constants.INPUT_SUCCESS_ICON}}/>
                  </View>

                </Item>
                <Item regular style={styles.item}>

                  <Field
                    name="password"
                    component={renderInput}
                    placeholderText="password"
                  />

                  <View style={styles.inputIconContainer}>
                    <Image style={styles.inputIcon} source={{uri: constants.INPUT_SUCCESS_ICON}}/>
                  </View>

                </Item>

                <TouchableHighlight
                  style={styles.submit}
                  onPress={handleSubmit(this.props.onSubmit)}
                  type="submit"
                >
                  <Text style={styles.submitButtonText}>yyyyuuuuummm</Text>
                </ TouchableHighlight>

              </Form>

              <View>
                <Text style={styles.quote}>
                  <Text style={styles.quoteEmphasis}>obesity</Text> is a word found only in the dictionary of fools
                </Text>
                <Text style={styles.citation}> - napoleon bonapart</Text>
              </View>


          </View>

        </Image>

      </Container>

    );
  }
}

SignInRender = reduxForm({
  // a unique name for the form
  form: 'sign-in'
})(SignInRender)

export default SignInRender;
