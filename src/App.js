import React, { Component } from 'react';
import Clock from './Clock'
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      deadline: 'December 25, 2018',
      newDeadline:'',

    };
    
  }
  changeDeadline(){

    this.setState({
      deadline: this.state.newDeadline
    })
  }
 
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Countdown to {this.state.deadline}</h1>
        </header>
       <Clock deadline={this.state.deadline}/>
        <div>
          <input className='dateInput' placeholder='Month day, year' onChange={event => 
              this.setState({
              newDeadline: event.target.value
              })
              } 
            /> 
          <button className='submitBtn' type='submit' onClick={()=> this.changeDeadline()} >
            Submit
          </button>
        </div>
      </div>
    );
  }
}

export default App;
