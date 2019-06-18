import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';

class App extends Component {
  
  constructor(props) {
    super(props);

    this.state = {
      countries : [], 
      isLoading: false,
      searchTerm: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    const url = 'https://restcountries.eu/rest/v2/all';

    this.setState( { isLoading: true});
    
    axios.get(url).then((response) => {
         this.setState({
            countries: response.data,
            isLoading: false
         });
      })
      .catch((error) => {
        // handle error
        this.setState({
            isLoading: false
        });
        console.log(error);
      })
      .finally(function () {
        // always executed
      });
    
  }

  handleChange(e) {
      this.setState({searchTerm: e.target.value}); 
  }

  handleSubmit(e) {
      e.preventDefault();
      const url = `https://restcountries.eu/rest/v2/name/${this.state.searchTerm}`;

      this.setState({isLoading: true, countries: []});
      axios.get(url).then((response) => {
          this.setState({countries: response.data, isLoading: false});
      })
      .catch((error) => {
        this.setState({isLoading: false });
      })
  }

  render () {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <form onSubmit={this.handleSubmit}>
          <input 
            value = {this.state.searchTerm}
            onChange = {this.handleChange}
          />
          <button type="Submit">Search</button>
        </form>
        <ul> 
            {this.state.isLoading && 'Loading ...'}  
            {this.state.countries.map((country) => {
                return (
                <li key="{country.alpha3Code}">
                  <h1>
                    {country.name}
                    <br />
                  </h1>
                </li>
                )
            })
            }
        </ul>
      </header>
      <div>
   
      </div>
    </div>
  );
}
}
export default App;
