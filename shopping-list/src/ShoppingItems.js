import React, {Component} from 'react';

class ShoppingItems extends Component {

    constructor(props) {
        super(props);

        this.createList = this.createList.bind(this);
        this.delete = this.delete.bind(this);
    }

    createList(item) {
        console.log("item key: " + item.id);
        return <li onClick={() => this.delete(item.id)} key={item.id}>
                {item.text} <button type="submit">Delete</button> </li>
    }

    delete(key) {
        this.props.delete(key);
    }

    render() {
        let shoppingEntries = this.props.entries;
        let listItems = shoppingEntries.map(this.createList);
         
        return(
            <ul className="shopList">
               {listItems}   
            </ul>
        );
     }
}


export default ShoppingItems;