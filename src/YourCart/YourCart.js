import React, { Component } from 'react';

class YourCart extends Component {
  render() {
    return (
      <section className="main__summary">
      <h2>Your cart</h2>
      {/*summary: list of components*/}
      <div className="summary__total">
        <div className="summary__total__label">Total</div>
        <div className="summary__total__value">
          {/*USCurrencyFormat.format(total) - total cost in us dollars format*/}
        </div>
      </div>
    </section>
    );
  }
}

export default YourCart