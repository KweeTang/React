import React, {Component} from 'react';

class ShoppingItems extends Component {

    constructor(props) {
        super(props)

        this.createList = this.createList.bind(this);
    }

    createList(item) {
        return <li onClick={() => this.delete(item.key)} key={item.key}>
                {item.text} <button type="submit">delete</button>
               </li>
    }

    render() {
        let shoppingEntries = this.props.entries;
        let listItems = shoppingEntries.map(this.createList)

        return(
            <ul className="shopList">
               {listItems}   
            </ul>
        );
     }
}


export default ShoppingItems;