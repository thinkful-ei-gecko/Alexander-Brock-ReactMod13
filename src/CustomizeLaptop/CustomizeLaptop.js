import React, { Component } from 'react';

class CustomizeLaptop extends Component {
  render() {
    return (
      <form className="main__form">
      <h2>Customize your laptop</h2>
      {/*features - list of each feature with radio options to select different one*/}
      <div key={/*itemHash*/} className="feature__item">
            <input
              type="radio"
              id={/*itemHash*/}
              className="feature__option"
              name={/*slugify(feature)*/}
              checked={/*item.name === this.state.selected[feature].name}
    onChange={e => this.updateFeature(feature, item)*/}
            />
            <label htmlFor={/*itemHash*/} className="feature__label">
              {/*item.name*/} ({/*USCurrencyFormat.format(item.cost)*/})
            </label>
          </div>
    </form>
    );
  }
}

export default CustomizeLaptop