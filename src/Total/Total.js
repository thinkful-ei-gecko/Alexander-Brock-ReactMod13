import React, { Component } from 'react';

class Total extends Component {
    render () {
        const totalPrice = Object.keys(this.state.selected).reduce(
            (acc, curr) => acc + this.state.selected[curr].cost,
            0
          );

        return (
            {totalPrice}
        )
    }
}

export default Total