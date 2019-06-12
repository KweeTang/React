import React, {Component} from 'react';

class Books extends Component {

    render() {

        let searchBooks = this.props.search;
        // let listBooks = searchBooks.map(this.createList);

        return (
            <div className="bookList">
                {searchBooks}
            </div>
        );
    }
}

export default Books;