import React from 'react';

import './Smurf.css';

const Smurf = props => {
  return (
    <div className="Smurf">
      <div className="smurf-card">
        <h3>{props.name}</h3>
        <strong>{props.height} tall</strong>
        <p>{props.age} smurf years old</p>
        <button className="delete" onClick={() => props.deleteSmurf(props.id)}>
          Delete Smurf
        </button>
      </div>
    </div>
  );
};

Smurf.defaultProps = {
  name: '',
  height: '',
  age: ''
};

export default Smurf;
