import React, { Component } from 'react';
import slugify from 'slugify';
import Feature from '../Feature/Feature';

class Features extends Component {

  render() {
    const features = Object.keys(this.props.features).map((feature, idx) => {
      const featureHash = feature + '-' + idx;
      const options = this.props.features[feature].map(item => {
        const itemHash = slugify(JSON.stringify(item));
        const itemCost = this.props.USCurrencyFormat.format(item.cost);
        console.log(this.props.stateSelected[feature].name);
        
        return (
        <Feature
        itemHash={itemHash}
        name={slugify(feature)}
        updateFeature={this.props.updateFeature}
        checked={item.name === this.props.stateSelected[feature].name}
        itemName={item.name}
        itemCost={itemCost}
        feature={feature}
        item={item}
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