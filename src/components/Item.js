import React from "react";
import "../css/ItemStyle.css";


class Item extends React.Component{


    


    render() {
        return (
            <div className="Item" onClick={this.toogleItem}></div>
        )
    };




    toogleItem = () => {

    }
}


export default Item;

