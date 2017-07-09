import React, { Component } from 'react'
import * as actions from  '../actions'
import constants from  '../constants'
import styles from  './styles'
import { Text, View, Button, Image, Dimensions, ScrollView, TouchableHighlight, StatusBar, TextInput } from 'react-native';
import { Container, Content, Form, Item, Input, Icon } from 'native-base';
import SearchReturnObject from './SearchReturnObject'

const deviceHeight = Dimensions.get('window').height;
const deviceWidth = Dimensions.get('window').width;

class SearchResultRender extends Component {

  constructor(props){
    super(props)

  }

  render() {

    return (

      <Container style={styles.container}>

        <StatusBar hidden={ true } />

        <Image
          source={{uri: 'ice-cream-stack-yellow-background'}}
          style={styles.imageContainer}
        >

          <View
            style={styles.paddedContainer}
          >

            <View style={styles.resultsList}>

              <View
                id="flex-padding"
                style={styles.paddedInteriorContainer}
              >

                <Text style={styles.quoteText}>
                  <Text style={styles.quoteHightlight}>gluten free</Text> anywhere, is a threat to <Text style={styles.quoteHightlight}>gluten</Text> everywhere
                </Text>
                <Text style={styles.quoteCitation}>
                  - elenore roosevelt
                </Text>

              </View>


              <ScrollView
                id="flex-padding"
                style={styles.interiorContainer}
              >

                <SearchReturnObject
                  emphasisColor={'rgba(231, 81, 107, 1)'}
                />
                <SearchReturnObject
                  emphasisColor={'rgba(231, 81, 107, 1)'}
                />
              </ScrollView>

            </View>

          </View>

        </Image>

      </Container>
    );
  }

}

export default SearchResultRender;
