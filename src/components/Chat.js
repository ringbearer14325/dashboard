import React  from "react";
import { Form, Button, Container, Row } from 'react-bootstrap';
import Parse from "parse";
import '../css/chat.css';
import Kanban from "../components/Kanban";


class Chat extends React.Component() {
    constructor() {
        super();
        this.state = {
            buttonLoading: false,
            username: '',
            message: [],
            readState: null,
            write: null,
            usernameError: false,

        }

        this.handleSubmit = this.handleSubmit.bind(this);
    }
    

    changeHandler = event => {
        const name = event.target.getAtrribute('id');
        const value = event.target.value;
        console.log(value)
        if (!value || value === '') {
            this.setState({
                [`${name}Error`]: true
            })
        } else {
            this.setState({
                [`${name}Error`]: false,
                [name]: value
            })
        } 
    }



    handleSubmit = async (event) => {
        event.preventDefault();
        const message = Parse.Object.extend('Message');
        message.set('fromUser', Parse.User.current());
        message.set('message', 'A string');
        message.set('readState', 'A string');

        try {
           await message.save().then(
                (result) => {
              if (typeof document !== 'undefined') document.write(`Message created: ${JSON.stringify(result)}`);
              alert('Message created', result) })            
        } catch (error) {
                if (typeof document !== 'undefined') document.write(`Error while creating Message: ${JSON.stringify(error)}`);
                alert("Error: " + error.code + " " + error.message);
        }
}
     
    
    render() {
        return (
            <div>
            <div className="chat">
                <Container>
                <Button type="submit" id="widget" className={"btn btn-primary"}>widget</Button>
                    <Row>
                        <Form onSubmit={this.handleSubmit} className={"chatForm"}>
                        <Form.Label htmlFor="username">Username</Form.Label>
                        <Form.Control 
                        required 
                        id="username"
                        type="text"
                        onChange={this.changeHandler}
                        />
                        {this.state.map(message => {
                          return <p key={message.timestamp}>{message.content}</p>
                        })}
                        </Form>
                    </Row>    
                </Container>
            </div>
            <Kanban></Kanban>
            </div>
        );
    }    
}

export default Chat;




