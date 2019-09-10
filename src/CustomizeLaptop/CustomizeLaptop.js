import React, { Component } from 'react';
import Features from '../Features/Features';

class CustomizeLaptop extends Component {
  
  render() {
    return (
      <form className="main__form">
      <h2>Customize your laptop</h2>
        <Features
        features={this.props.features}
        USCurrencyFormat={this.props.USCurrencyFormat}
        stateSelected={this.props.stateSelected}
        updateFeature={this.props.updateFeature}
        />
      </form>
    );
  }
}

export default CustomizeLaptop