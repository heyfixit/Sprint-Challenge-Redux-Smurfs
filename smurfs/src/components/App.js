import React, { Component } from 'react';
import { fetchSmurfs, addSmurf, deleteSmurf, updateSmurf } from '../actions';
import { connect } from 'react-redux';
import SmurfForm from './SmurfForm';
import Smurf from './Smurf';
import './App.css';
/*
 to wire this component up you're going to need a few things.
 I'll let you do this part on your own.
 Just remember, `how do I `connect` my components to redux?`
 `How do I ensure that my component links the state to props?`
 */
class App extends Component {
  componentDidMount() {
    this.props.fetchSmurfs();
  }

  render() {
    const { smurfs, addSmurf, deleteSmurf, updateSmurf } = this.props;
    return (
      <div className="App">
        <h1>SMURFS! 2.0 W/ Redux</h1>
        <div>Welcome to your Redux version of Smurfs!</div>
        <div>Start inside of your `src/index.js` file!</div>
        <div>Have fun!</div>
        <hr />
        {smurfs.map(s => (
          <Smurf
            key={s.id}
            smurf={s}
            deleteSmurf={deleteSmurf}
            updateSmurf={updateSmurf}
          />
        ))}
        <hr />
        <SmurfForm onSubmit={addSmurf} />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  ...state
});

export default connect(
  mapStateToProps,
  { fetchSmurfs, addSmurf, deleteSmurf, updateSmurf }
)(App);
