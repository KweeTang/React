import React, {Component} from 'react';
import axios from 'axios';
// import logo from './logo.svg';
import './App.css';
// import Books from './Books'

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      books: [],
      isLoading: true,
      hasFailed: false,
      errors: null
    };
    this.createList = this.createList.bind();
  }

  componentDidMount() {
    // Request for data as soon as app mounts
    // axios.get('https://dog.ceo/api/breed/germanshepherd/images')
    axios.get('https://www.googleapis.com/books/v1/volumes?q=harry%20potter')

      .then((response) => {
        console.log('in "then" function');
        
        console.log(response.data.items);
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

render() {
  const { isLoading, books} = this.state;
  let listItems = this.state.books.map(this.createList);

  return(
         <div>
          {!isLoading ? (
          <ul className="shopList">{listItems} </ul>
          ) : <p>Loading...</p>}
         </div>
  );
}
}
export default App;
