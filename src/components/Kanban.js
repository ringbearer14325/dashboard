import React from "react";
import { Card, Container } from 'react-bootstrap';
import todoList from "../helpers/todoList.js";
import AddTodo from "../helpers/AddTodo.js"



class titleBoardTask extends React.Component() {    
    constructor() {
        super();
    
        this.state = {
            todo: []
          };
        }

        render() {
        return (
            <div>
                <AddTodo addTodoFn={this.addTodo}></AddTodo>
                <todoList updateTodofn={this.updateTodo} todos={this.state.todos}></todoList> 
            </div>
        );
    }

    componentDidMount = () => {
        const todos = localStorage.getItem('todos');
        if(todos) {
            const savedTodos = JSON.getItem('todos');
            this.setState({ todos: savedTodos });
        } else {
            console.log('No todos');
        }
    }

    addTodo = async (todo) => {
        await this.setState({ todos: [...this.state.todo, {
            text: todo,
            completed: false
        }] });
        localStorage.setItem('todos', JSON.stringify(this.state.todos));
        console.log(localStorage.getItem('todos'));
    }

    updateTodo = async (todo) => {
        const newTodos = this.state.todos.map(_todo => {
            if(todo === _todo) 
                return {
                    text: todo.text,
                    completed: !todo.completed
                }
                else 
                 return _todo
                });
      await this.setState({ todos: newTodos});
      localStorage.setItem('todos', JSON.stringify(this.state.todos));
    }

}   

class Kanban extends React.Component() {
    render() {
        return (
            <div>
                <Container>
                     <Card className={"KanbanForm"}>
                      <titleBoardTask></titleBoardTask>
                     </Card>
                </Container>
            </div>
        );
    }
}

export default Kanban;



