import { StyleSheet, Dimensions, Platform } from 'react-native'

const deviceHeight = Dimensions.get('window').height;
const deviceWidth = Dimensions.get('window').width;

const buttonWidth = ( deviceWidth / 3 )
const rowHeight =  ( deviceHeight * 0.60 ) / 3

const styles = {

  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: "green",
    height: 20,
    width: 20,
  },

  // imageContainer: {
  //   width: deviceWidth,
  //   height: deviceHeight,
  //   backgroundColor: constants.PRIMARY_COLOR,
  //   flex: 1,
  //   flexDirection: "column"
  // },
  //
  // resultsList: {
  //   width: deviceWidth,
  //   height: deviceHeight,
  //   backgroundColor: "green",
  //   flex: 1,
  // }


}

export default styles
