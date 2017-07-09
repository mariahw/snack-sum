import React, { Component } from 'react'
import * as constants from  '../constants'
import * as actions from  '../actions'
// import * as styles from  './styles'
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

      < Container style={styles.container} >

        <StatusBar hidden={ true } />

        <Image
          source={{uri: 'ice-cream-stack-yellow-background'}}
          style={styles.imageContainer}
        >

          <View
            style={styles.paddedContainer}
          >

            <ScrollView style={styles.resultsList}>

              <View
                id="flex-padding"
                style={styles.paddedInteriorContainer}
              ></View>


              <View
                id="flex-padding"
                style={styles.interiorContainer}
              >

                <SearchReturnObject />
                <SearchReturnObject />

              </View>

            </ScrollView>

          </View>

        </Image>

      </Container>
    );
  }

}

export default SearchResultRender;

const styles = {

  container: {
    flex: 1,
    flexDirection: 'column',
  },

  imageContainer: {
    backgroundColor: 'yellow',
    flex: 1,
    flexDirection: "row",
    width: deviceWidth
  },

  paddedContainer: {
    width: deviceWidth
  },

  resultsList: {
    flex: 1,
    flexDirection: 'row',
    width: deviceWidth
  },

  paddedInteriorContainer: {
    flex: 0.65,
  },

  interiorContainer: {
    backgroundColor: "yellow",
    flex: 0.35,
  }


}
