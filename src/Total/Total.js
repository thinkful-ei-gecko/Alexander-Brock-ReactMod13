import React, { Component } from 'react';

class Total extends Component {
    render () {
        //Changes number to US currency format.
        const USCurrencyFormat = this.props.USCurrencyFormat;
        const stateSelected = this.props.stateSelected.selected;
        //Returns list of keys, set to each part.
        const partsArray = Object.keys(this.props.stateSelected.selected);

        const totalPrice = partsArray.reduce(
            (acc, curr) => acc + stateSelected[curr].cost,
            0
          );

        return (
            <div className="summary__total">
                <div className="summary__total__label">Total</div>
                <div className="summary__total__value">
                    {USCurrencyFormat.format(totalPrice)}
                </div>
            </div>
        )
    }
}

export default Total