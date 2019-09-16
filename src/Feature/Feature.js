import React, { Component } from 'react';

class Feature extends Component {
  render(){
    //console.log(this.props.updateFeature);
    //console.log(this.props.feature);
    return (
      <div key={this.props.itemHash} className="feature__item">
        <input
          type="radio"
          id={this.props.itemHash}
          className="feature__option"
          name={this.props.name}
          checked={this.props.checked}
          onChange={e => {console.log('It changed');this.props.updateFeature(this.props.feature, this.props.item)}}
        />
        <label htmlFor={this.props.itemHash} className="feature__label">
          {this.props.itemName} {this.props.itemCost}
        </label>
      </div>
      );
  }
}

export default Feature