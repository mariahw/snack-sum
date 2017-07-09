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
              >

                <Text style={styles.quoteText}>
                  <Text style={styles.quoteHightlight}>gluten free</Text> anywhere, is a threat to <Text style={styles.quoteHightlight}>gluten</Text> everywhere
                </Text>
                <Text style={styles.quoteCitation}>
                  - elenore roosevelt
                </Text>

              </View>


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
    alignItems: "flex-end",
    justifyContent: "center",
    marginRight: 30
  },

  quoteText: {
    fontSize: 25,
    color: "white",
    position: "absolute",
    width: (deviceWidth / 2),
    paddingLeft: 15,
    paddingRight: 15,
    paddingTop: 15,
    paddingBottom: 15,
    backgroundColor: constants.EMPHASIS_COLOR_SEMI_TRANSPARENT,
  },

  quoteHightlight: {
    backgroundColor: 'transparent',
    color: constants.PRIMARY_COLOR,
  },

  quoteCitation: {
    backgroundColor: 'transparent',
    color: constants.EMPHASIS_COLOR,
    fontSize: 20,
    textAlign: "left",
    marginTop: 222.5,
  },

  interiorContainer: {
    backgroundColor: "yellow",
    flex: 0.35,
  }


}
