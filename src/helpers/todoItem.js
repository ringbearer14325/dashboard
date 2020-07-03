import React from 'react';
import '../css/ItemStyle.css'

class todoItem extends React.Component() {

    render() {

        const { todo } = this.props;

        return (
            <div className={'todoItem' + (todo.completed ? 'completed' : '')} onClick={this.toggleTodo}>{todo.text}</div>
        );
    }


    toggleTodo = () => {
        this.props.updateTodoFn(this.props.todo);
    }

}


export default todoItem;


