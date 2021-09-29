import React, { Component } from 'react';
import axios from 'axios';
import { Card, Button, Form} from "react-bootstrap";
import { Link } from "react-router-dom";
import './Signup.css';


class Signup extends Component { 
    constructor(state) {
        super(state);
        this.state = { 
        
        first_name: "",
        last_name: "",
        email: "",
        username: "",
        password: ""
    };
    
 
}
     
 handleChange = (event) => {
    console.log (event.target.value)
    this.setState({
        [event.target.name]: event.target.value});
 };

 handleSubmit = (event) => {
    event.preventDefault();
    var user ={
        first_name: this.state.first_name,
        last_name: this.state.last_name,
        email: this.state.email,
        username: this.state.username,
        password: this.state.password

    }
    this.registerUser(user)
 };
    async registerUser(user) {
        console.log(user)
      try{
      let response = await axios.post('http://127.0.0.1:8000/api/auth/register/',user);
      console.log(response.data)
    }
      catch (ex) {
         console.log('There was an error!');

        }          
    
    }
            
render() { 
  
    return ( 

        <>
           <h1 className="friendly-header"className="text=center mb-7">Friendly</h1>
    
        <Card  style={{ width: '25rem' }}>
          <Card.Body>
            <h2 className="text-center mb-4">Sign Up</h2>
            <Form  onSubmit={(event) => this.handleSubmit(event)}>
              <Form.Group id="firstname">
                <Form.Label>First Name</Form.Label>
                <Form.Control 
                type="text" name="first_name" 
                placeholder="first name"
                onChange={this.handleChange} 
                value={this.state.first_name}/>
              </Form.Group>
              <Form.Group id="lastname">
                <Form.Label>Last Name</Form.Label>
                <Form.Control type="last_name" name="last_name" 
                placeholder="last name"
                onChange={this.handleChange} 
                value={this.state.last_name}/>
              </Form.Group>
              <Form.Group id="emailAddress">
                <Form.Label>Email Address</Form.Label>
                <Form.Control type="email" name="email" 
                placeholder="email address"
                onChange={this.handleChange} 
                value={this.state.email}/>
              </Form.Group>
              <Form.Group id="userName">
                <Form.Label>User Name</Form.Label>
                <Form.Control type="username" name="username" 
                placeholder="Username"
                onChange={this.handleChange} 
                value={this.state.username}/>
              </Form.Group>
              <Form.Group id="password">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" name="password" 
                placeholder="Password"
                onChange={this.handleChange} 
                value={this.state.password}/>
              </Form.Group>
              <Button className="w-100" type="submit">
                Sign Up!
              </Button>
            </Form>
              <div className="w-100 text-center mt-2">
          Already have an account? <Link to="./">Login</Link>
        </div>
          </Card.Body>
        </Card>
      
      </>


     );
}
}

export default Signup;
