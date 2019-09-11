import React, { Component } from 'react';
import Summary from '../Summary/Summary';
import Total from '../Total/Total';


class YourCart extends Component {
  
  render() {
      const summary = Object.keys(this.props.stateSelected).map((feature, idx) => {
        const featureHash = feature + '-' + idx;
        const selectedOption = this.props.stateSelected[feature];
        
        return(
          <Summary
          USCurrencyFormat={this.props.USCurrencyFormat}
          featureHash={featureHash}
          selectedOption={selectedOption}
          />
        );
      });

      return (
        <section className="main__summary">
        <h2>Your cart</h2>
          {summary}
          <Total
            stateSelected={this.props.stateSelected}
            USCurrencyFormat={this.props.USCurrencyFormat}
            />
      </section>
      );  
  }
}

export default YourCart