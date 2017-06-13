var React = require('react');

function BirdAttrDropdown(props) {
  return (
      <div className="twelve columns">
        <label>{props.label}</label>
        <select className="u-full-width" onChange={props.handleChange} data-bird-attr={props.birdAttr}>
          <option disabled selected value>Select a {props.label}...</option>
          {
            props.attributeIds.map(function(attributeId) {
              return (
                  <option value={attributeId} key={attributeId}>{props.attributes[attributeId].name}</option>
              );
            })
          }
        </select>
      </div>
  );
}

module.exports = BirdAttrDropdown;