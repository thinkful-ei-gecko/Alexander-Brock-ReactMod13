import React, { Component } from 'react';
import slugify from 'slugify';
import Feature from '../Feature/Feature';

const USCurrencyFormat = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD'
});

  /* <div key={itemHash} className="feature__item">
<input
  type="radio"
  id={itemHash}
  className="feature__option"
  name={slugify(feature)}
  checked={item.name === this.state.selected[feature].name}
onChange={e => this.updateFeature(feature, item)}
/>
<label htmlFor={itemHash} className="feature__label">
  {item.name} ({USCurrencyFormat.format(item.cost)})
</label>
</div> */

class Features extends Component {

  render() {
    const features = Object.keys(this.props.features).map((feature, idx) => {
      const featureHash = feature + '-' + idx;
      const options = this.props.features[feature].map(item => {
        const itemHash = slugify(JSON.stringify(item));
        const itemCost = this.props.USCurrencyFormat.format(item.cost);
        
        return (
        <Feature
        itemHash={itemHash}
        name={slugify(feature)}
        checked={item.name === this.props.stateSelected.selected[feature].name}
        onChange={e => this.props.updateFeature(feature, item)}
        itemName={item.name}
        itemCost={itemCost}
        />
        );
      });
      return (
        <fieldset className="feature" key={featureHash}>
          <legend className="feature__name">
            <h3>{feature}</h3>
          </legend>
          {options}
        </fieldset>
      );
     });
     return (
     <div>
       {features}
     </div>
     )
  }
}

export default Features;