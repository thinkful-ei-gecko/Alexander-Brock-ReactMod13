import React, { Component } from 'react';

class Feature extends Component {
  render(){
    console.log(this.props.itemHash);
    return (
      <div key={this.props.itemHash} className="feature__item">
        <input
          type="radio"
          id={this.props.id}
          className="feature__option"
          name={this.props.name}
          checked={this.props.checked}
          onChange={this.props.onChange}
        />
        <label htmlFor={this.props.itemHash} className="feature__label">
          {this.props.itemName} {this.props.itemCost}
        </label>
      </div>
      );
  }
}

export default Feature