import React from "react";
import List from "../components/List";



class Kanban extends React.Component {

    constructor() {
        super();
        this.state = {
            todos: []

        };
    }


    render() {
        return (
            <div><List></List></div>
        )
    };


    componentDidMount = () => {
        const todos = localStorage.getItem("todos");
        if (todos) {
            const savedTodos = JSON.parse(todos);
            this.setState({ todos: savedTodos });
        } else {
            console.log("no todos");
        }
    }

}


export default Kanban;

