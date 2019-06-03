import React, {Component} from 'react';

class ShoppingItems extends Component {

    createList(item) {
        return <li key={item.key}>{item.text}</li>
    }

    render() {
        var shoppingEntries = this.props.entries;
        var listItems = shoppingEntries.map(this.createList)

        return(
            <ul className="shopList">
               {listItems}
            </ul>
        );
     }
}


export default ShoppingItems;