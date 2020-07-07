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
                        <Item updateTodoFn={this.props} key={_index} todo={_todo}></Item>
                    )
                })
            }
            </div>
        )
    };
    

    update = (todo) => {
        this.props.updateTodoFn(todo);
    }


}





export default List;

