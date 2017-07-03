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
  }

  buttonPress(buttonVal){
    this.props.actions.buttonActive(buttonVal)
  }

  buttonToggleActive(buttonVal){
    this.props.actions.buttonActive(buttonVal)
  }

  render() {

    const buttons = this.props;
    let buttonsUI = buttons.ui.calculatorValues;

    return (
      <CalculatorRender
        buttonPress={this.buttonPress}
        buttonActive={this.props.ui.calculatorValues.doughnut.active}
        buttonsState={buttonsUI}
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
