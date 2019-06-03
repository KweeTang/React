import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ShoppingItems from './ShoppingItems';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      items : [], 
    };

    // this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    // this.setState({value: event.target.value});
    // alert (this.state.value);
  }

  handleSubmit(event) {
      if(this._inputElement.value !== "") {
        var newItem = {
        text: this._inputElement.value
        };
      }

      this.setState((myState) => {
        return {
          items: myState.items.concat(newItem)
        };
      });
      event.preventDefault();
  }

  
  render () {
  return (
    <div className="App">
      <div className="header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          My Shopping List
        </p>
        <form onSubmit={this.handleSubmit}>
          <input ref={(a) => this._inputElement = a}
                        placeholder="enter task">
           
          </input>
          <button type="submit">Add to Shopping list</button> 
        </form>
      </div>  
      <ShoppingItems entries={this.state.items}/>
    </div>
  );
 }
}
export default App;
