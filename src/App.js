import React from "react";
import "./css/App.css";
import TodoItem from "./helpers/TodoItem";
import TodoList from "./helpers/TodoList";
import AddTodo from "./helpers/AddTodo";



class App extends React.Component {
   
   constructor() {
      super();
      this.state = {
         todos: []
      }
   }

            render() {
               return (            
                  <div>
                  <AddTodo></AddTodo>
                  </div>
              
      );
   }


   componentDidMount = () => {
      const todos = localStorage.getItem("todos");
      if (todos) {
         const savedTodos = JSON.parse(todos);
         this.setState({ todos: savedTodos }); 
      } else {
         console.log("no todos");
      }
   }


   addTodo = (todo) => this.setState({ todos: [...this.state.todos, todo]})
}



export default App;
