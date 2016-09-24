const React = require('react');

class Product extends React.Component {

  render(){
    return(
      <h1>test</h1>
    )
  }
}

Product.defaultProps = {
  hasWatermark: false
}

Product.propTypes = {
  name: React.PropTypes.string.isRequired,
  producer: React.PropTypes.string,
  hasWatermark: React.PropTypes.bool,
  color: React.PropTypes.oneOf(['white', 'eggshell-white', 'salmon']).isRequired,
  weight: (props, propName, componentName) => {
    const weight = props[propName];

    if (weight === undefined) {
      return new Error('There is no weight.');
    }

    if (isNaN(weight)) {
      return new Error('The weight is not a number.');
    }

    if (weight < 80 || weight > 300) {
      return new Error('The weight is not in range.');
    }
  }
}

module.exports = Product;
