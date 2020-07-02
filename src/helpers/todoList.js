import React from 'react';
import todoItem from '../helpers/todoItem.js'


class todoList extends React.Component {

    render() {
        const { todos } = this.props;


        return (
            <div className='todoListContainer'>
                {
                    todos.map((_todo, _index) => {
                        return (
                            <todoItem updateTodoFn={this.props} key={_index} todo={_todo}></todoItem>
                        )
                    })
                }                
            </div>
        );
    }


    updateTodo = (todo) => {
        this.props.updateTodoFn(todo);
    }
}


export default todoList;