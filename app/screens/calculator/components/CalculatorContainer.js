//logic

import React, { Component } from 'react'
import CalculatorRender from './CalculatorRender'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as constants from  '../constants'
import * as actions from  '../actions'

class CalculatorContainer extends Component {

  constructor(props){
    super(props)

    this.buttonPress = this.buttonPress.bind(this)
    this.buttonToggleActive = this.buttonToggleActive.bind(this)
    this.clearCalculatorSearch = this.clearCalculatorSearch.bind(this)
  }

  buttonPress(buttonVal){
    this.props.actions.buttonActive(buttonVal)
    console.log(this.props.ui.calculatorValues[buttonVal])
  }

  buttonToggleActive(buttonVal){
    this.props.actions.buttonActive(buttonVal)
  }

  clearCalculatorSearch(){
    console.log("clearHit")
    this.props.actions.clearCalculatorSearch();
  }

  render() {

    const { ui } = this.props;
    let buttonsUI = ui.calculatorValues;

    return (
      <CalculatorRender
        buttonPress={this.buttonPress}
        buttonsState={ buttonsUI }
        clearSearch={ this.clearCalculatorSearch }
      />
    );
  }

}

const mapStateToProps = (state) => {
  return {
    userinput: state[constants.NAME].userinput,
    ui: state[constants.NAME].ui,
  }
}

const mapDispatchToProps = (dispatch) => {
  const actionsToBind = Object.assign({}, actions);
  return {
    actions: bindActionCreators(actionsToBind, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(CalculatorContainer);
