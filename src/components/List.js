import React from "react";
import Item from "../components/Item";


class List extends React.Component{
    
    
    render() {
        const { todos } = this.props;


        return (
            <div className="listContainer">
            { 
                todos.map((_todo, _index) => {
                    return (
                        <Item></Item>
                    )
                })
            }
            </div>
        )
    };
}


export default List;

