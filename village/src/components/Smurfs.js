import React, {Component} from 'react';

import Smurf from './Smurf';
import './Smurfs.css';

class Smurfs extends Component {
  render() {
    return (
      <div className="Smurfs">
        <h2>
          <span>Smurfs</span> in the village
        </h2>
        <div className="smurf-list">
          {this.props.smurfs.map(smurf => {
            return (
              <Smurf
                name={smurf.name}
                id={smurf.id}
                age={smurf.age}
                height={smurf.height}
                key={smurf.id}
                deleteSmurf={this.props.deleteSmurf}
              />
            );
          })}
        </div>
      </div>
    );
  }
}

Smurf.defaultProps = {
  smurfs: []
};

export default Smurfs;
