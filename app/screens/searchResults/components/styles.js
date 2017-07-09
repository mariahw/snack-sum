import { StyleSheet, Dimensions, Platform } from 'react-native'
import * as constants from '../constants'

const deviceHeight = Dimensions.get('window').height;
const deviceWidth = Dimensions.get('window').width;

const buttonWidth = ( deviceWidth / 3 )
const rowHeight =  ( deviceHeight * 0.60 ) / 3

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
    flexDirection: 'column',
    width: deviceWidth
  },

  paddedInteriorContainer: {
    flex: 1.75,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    marginLeft: 125
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
    backgroundColor: constants.PRIMARY_COLOR,
    flex: 0.35,
  },

  searchObject: {

    container: {
      height: 125,
      justifyContent: "flex-start",
      flexDirection: 'column',
      marginBottom: 20,
      marginLeft: 0,
    },

    objectHead: {
      width: deviceWidth,
      flex: 0.35,
      justifyContent: "center",
      flexDirection: "row",
      paddingLeft: 15,
      paddingRight: 15,
    },

    locationStars: {
      flex: 0.5,
      justifyContent: "center",
    },

    locationMiles: {
      flex: 0.5,
      justifyContent: "center",
    },

    locationMilesText: {
      textAlign: "right",
      color: "white",
      fontWeight: 'bold',
      fontSize: 17.5,
    },

    objectBody: {
      backgroundColor: 'white',
      width: deviceWidth,
      flex: 0.65,
      flexDirection: 'row'
    },

    locationInfo: {
      flex: 0.65,
      backgroundColor: "white",
      flexDirection: "row",
      paddingTop: 10.5,
      paddingLeft: 15,
      paddingRight: 15
    },

    title: {
      fontWeight: "bold",
      flex: 0.5,
      fontSize: 22.5
    },

    hours: {
      textAlign: "right",
      flex: 0.5
    },

    hoursEmph: {
      fontWeight: "bold"
    },

    favoriteIcon: {
      flex: 0.25,
      opacity: 0.5,
      justifyContent: "center",
      alignItems: "center"
    },

    favoriteIconImage: {
      height: 50,
      width: 50,
      backgroundColor: "green",
    }

  }

}

export default styles
