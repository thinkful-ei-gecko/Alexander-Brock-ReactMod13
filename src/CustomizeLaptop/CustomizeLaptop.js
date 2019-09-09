import React, { Component } from 'react';
import Features from '../Features/Features';

class CustomizeLaptop extends Component {
  
  render() {
    //console.log(this.props.monday)
    return (
      <form className="main__form">
      <h2>Customize your laptop</h2>
      {/*features - list of each feature with radio options to select different one*/}
        <Features features={this.props.features} />
      </form>
    );
  }
}

export default CustomizeLaptop