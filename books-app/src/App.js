import React, {Component} from 'react';
import axios from 'axios';
import './App.css';


class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      searchBook: '',
      books: [],
      isLoading: false,
      hasFailed: false
    };
    this.handleSearch = this.handleSearch.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.createList = this.createList.bind();
  }

  componentDidMount() {
    // Request for data as soon as app mounts
    const url = 'https://www.googleapis.com/books/v1/volumes?q=harry%20potter';
    this.setState({ isLoading: true, hasFailed: false });
    axios.get(url).then((response) => {
        this.setState({
          books: response.data.items.map(book => ({
            title: `${book.volumeInfo.title}`,
            description: `${book.volumeInfo.description}`,
            categories: `${book.volumeInfo.categories}`,
            thumbnail: `${book.volumeInfo.imageLinks.thumbnail}`                  
          })),
          isLoading: false
        });
      })
      .catch((error) => {
        this.setState({ isLoading: false, hasFailed: true });
      });
  }

  createList(item) {
  
    return <div>
            <li>
            {item.title}
           </li>
           <li> 
            {item.description}
           </li>
           <li> 
            {item.categories}
           </li>
           <li> 
            {item.thumbnail}
           </li>  
           </div>
}

handleSearch(e) {
    this.setState ({searchBook: e.target.value});
}

handleSubmit(e) {
  e.preventDefault();
  const url = `https://www.googleapis.com/books/v1/volumes?q=${this.state.searchBook}`;
  this.setState({ isLoading: true, hasFailed: false, books: [] });
  axios.get(url).then((response) => {
    this.setState(
      {
        books: response.data.items.map(book => ({
          title: `${book.volumeInfo.title}`,
          description: `${book.volumeInfo.description}`,
          categories: `${book.volumeInfo.categories}`,
          thumbnail: `${book.volumeInfo.imageLinks.thumbnail}`                  
        })),
        isLoading: false
      }
    );
  })
  .catch((error) => {
    this.setState({ isLoading: false, hasFailed: true });
  });
  
}

render() {
  const { isLoading, books} = this.state;
  let listItems = this.state.books.map(this.createList);

  return(
         <div className="App">
            <form onSubmit={this.handleSubmit}>
            <input
              value={this.state.searchBook}
              onChange={this.handleSearch}
              placeholder="Harry Potter"
            />
            <button>Search</button>
            </form> 
            {this.state.hasFailed && (
          <p>  “no books found"</p>
        )}

          {!this.state.isLoading ? (
            <ul className="bookList">{listItems} </ul>
          ) : <p>Loading...</p>}
         </div>
  );
}
}
export default App;
