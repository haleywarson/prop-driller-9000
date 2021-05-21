import React, { Component } from 'react';

import Transformer from '../Components/Transformer'

class TransformersSection extends Component {

  displayTransformers = () => this.props.proptimii.map((proptimi) => (
        <Transformer 
            key={proptimi.id}
            proptimi={proptimi}
          />
  ))

  render() {
    return (
      <section className = "transformers-section">
        {this.displayTransformers()}
      </section>
    );
  }
}

export default TransformersSection;
