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
    this.addItem = this.addItem.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
  }

  handleChange(event) {
    // this.setState({value: event.target.value});
    // alert (this.state.value);
  }

  addItem (event) {
      if(this._inputElement.value !== "") {
        let newItem = {
        text: this._inputElement.value
        };

      this.setState((myState) => {
        return {
          items: myState.items.concat(newItem)
        };
      });
      }

      // Clear the input after adding
      this._inputElement.value = "";

      event.preventDefault();
  }

  deleteItem(key) {
    console.log(key + " is the delete key");
    let filteredItems = this.state.items.filter(function(item) {
        return (item.text !== key)});

    this.setState({
      items: filteredItems
    });
  }
  
  render () {
  return (
    <div className="App">
      <div className="header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          My Shopping List
        </p>
        <form onSubmit={this.addItem}>
          <input ref={(a) => this._inputElement = a}
                        placeholder="enter item">    
          </input>
          <button type="submit">Add to Shopping list</button> 
        </form>
      </div>  
      <ShoppingItems entries={this.state.items}
                     delete = {this.deleteItem}/>
    </div>
  );
 }
}
export default App;
