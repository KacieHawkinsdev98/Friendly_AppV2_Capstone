import React, { Component } from 'react';
import axios from 'axios';


class Signup extends Component { 
    state = {
    
        firstName: "",
        lastName: "",
        emailAddress: "",
        userName: "",
        password: ""

    }

     
 handleChange = (event) => {
    console.log (event.target.value)
    this.setState({
        [event.target.name]: event.target.value,
        

    })
 };

 handleSubmit = (event) => {
    event.preventDefault();
    var user ={
        first_name: this.state.firstName,
        last_name: this.state.lastName,
        email: this.state.emailAddress,
        username: this.state.userName,
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
            
    render(){
    return(
        <form onSubmit={this.handleSubmit}>
        <label>First Name</label>
        <input type="text" name="firstName" onChange={this.handleChange} value={this.state.firstName}/>
        <label>Last Name</label>
        <input type="text" name="lastName" onChange={this.handleChange} value={this.state.lastName}/>
        <label>Email</label>
        <input type="text" name="emailAddress" onChange={this.handleChange} value={this.state.emailAddress}/>
        <label>User Name</label>
        <input type="username" name="userName" onChange={this.handleChange} value={this.state.userName}/>
        <label>Password</label>
        <input type="password" name="password" onChange={this.handleChange} value={this.state.password}/>
        <button type="submit">Register</button>
        </form>

    )};

    
}

export default Signup;
