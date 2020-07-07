import React from "react";
import List from "../components/List";
import AddItem from "../components/AddItem";


class Kanban extends React.Component {

    constructor() {
        super();
        this.state = {
            todo: []

        };
    }


    render() {
        return (
            <div>
                <List>{this.updateTodo}</List>
                <AddItem>{this.addItem}</AddItem>
            </div>

        )
    };


    componentDidMount = () => {
        const todos = localStorage.getItem("todos");
        if (todos) {
            const savedTodos = JSON.getItem("todos");
            this.setState({ todos: savedTodos });
        } else {
            console.log("no todos");
        }
    }


    addItem = async (todo) => {
         this.setState({ todos: [...this.state.todos, {
            text: todo,
            completed: false
        }] });
        localStorage.setItem('todos', JSON.stringify(this.state.todos));
        console.log(localStorage.getItem('todos'));
    }

    updateTodo = (todo) => {
        const newTodos = this.state.todos.map(_todo => {
            if(todo === _todo) 
                return {
                    text: todo.text,
                    completed: !todo.completed
                }
                else 
                 return _todo
                });
      this.setState({ todos: newTodos});
      localStorage.setItem('todos', JSON.stringify(this.state.todos));
    }



}


export default Kanban;

