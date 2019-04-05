import React, {Component} from 'react';
import axios from 'axios';
import {withRouter, NavLink, Route} from 'react-router-dom';

import './App.css';
import SmurfForm from './components/SmurfForm';
import Smurfs from './components/Smurfs';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      smurfs: []
    };
  }

  componentDidMount() {
    axios
      .get('http://localhost:3333/smurfs')
      .then(res => this.setState({smurfs: res.data}))
      .catch(err => console.log(err));
  }
  // add any needed code to ensure that the smurfs collection exists on state and it has data coming from the server
  // Notice what your map function is looping over and returning inside of Smurfs.
  // You'll need to make sure you have the right properties on state and pass them down to props.

  addSmurf = newSmurf => {
    axios
      .post('http://localhost:3333/smurfs', newSmurf)
      .then(res => this.setState({smurfs: res.data}))
      .catch(err => console.log(err));

    this.props.history.push('/');
  };

  deleteSmurf = id => {
    axios
      .delete(`http://localhost:3333/smurfs/${id}`)
      .then(res => this.setState({smurfs: res.data}))
      .catch(err => console.log(err));
  };

  render() {
    return (
      <div className="App">
        <div className="header">
          <div className="header-content">
            <h2>Smurf Village</h2>
            <nav>
              <NavLink exact to="/">
                Home
              </NavLink>
              <NavLink to="/smurf-form">Add Smurf</NavLink>
            </nav>
          </div>
        </div>
        <Route
          exact
          path="/"
          render={props => (
            <Smurfs
              {...props}
              smurfs={this.state.smurfs}
              deleteSmurf={this.deleteSmurf}
            />
          )}
        />
        <Route
          path="/smurf-form"
          render={props => <SmurfForm {...props} addSmurf={this.addSmurf} />}
        />
      </div>
    );
  }
}

const AppWithRouter = withRouter(App);

export default AppWithRouter;
