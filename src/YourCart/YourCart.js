import React, { Component } from 'react';
import Summary from '../Summary/Summary';
import Total from '../Total/Total';



const USCurrencyFormat = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD'
});

/* const summary = Object.keys(this.state.selected).map((feature, idx) => {
  const featureHash = feature + '-' + idx;
  const selectedOption = this.state.selected[feature];

  return (
    <div className="summary__option" key={featureHash}>
      <div className="summary__option__label">{feature} </div>
      <div className="summary__option__value">{selectedOption.name}</div>
      <div className="summary__option__cost">
        {USCurrencyFormat.format(selectedOption.cost)}
      </div>
    </div>
  );
}); */
class YourCart extends Component {
  render() {

    const summary = Object.keys(this.state.selected).map((feature, idx) => {
      const featureHash = feature + '-' + idx;
      const selectedOption = this.state.selected[feature];

      return (
        <section className="main__summary">
        <h2>Your cart</h2>
        {summary}
        <div className="summary__total">
          <div className="summary__total__label">Total</div>
          <div className="summary__total__value">
            <Total />
          </div>
        </div>
      </section>
      );
    })
  
    return (
      <div>
        {summary}
      </div>
    )
  }
}

export default YourCart